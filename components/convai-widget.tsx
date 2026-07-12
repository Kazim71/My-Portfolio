"use client"

import { useEffect } from "react"

// ElevenLabs Conversational AI (chatbot + voice) widget.
// Set NEXT_PUBLIC_ELEVENLABS_AGENT_ID in your environment (e.g. Vercel project
// settings) to your own agent id. Create an agent at https://elevenlabs.io/app/agents
// If the id is not set, the widget simply does not render.

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "agent-id"?: string },
        HTMLElement
      >
    }
  }
}

export default function ConvaiWidget() {
  const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID

  useEffect(() => {
    if (!agentId) return
    if (document.querySelector('script[data-elevenlabs-convai="true"]')) return

    const script = document.createElement("script")
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed"
    script.async = true
    script.type = "text/javascript"
    script.dataset.elevenlabsConvai = "true"
    document.body.appendChild(script)
  }, [agentId])

  if (!agentId) return null

  return (
    <div className="w-full max-w-md">
      {/* @ts-expect-error — custom web component provided by the embed script */}
      <elevenlabs-convai agent-id={agentId} style={{ display: "block", width: "100%", minHeight: "80px" }} />
    </div>
  )
}
