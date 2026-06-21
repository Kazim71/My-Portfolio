"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

function Node({
  label,
  sublabel,
  accent = false,
}: {
  label: string;
  sublabel?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border px-4 py-3 text-center ${
        accent
          ? "border-accent-line bg-accent-tint"
          : "border-border bg-bg-elevated"
      }`}
    >
      <p className="font-mono text-[13px] font-medium text-text">{label}</p>
      {sublabel && (
        <p className="mt-0.5 font-mono text-[11px] text-text-soft">{sublabel}</p>
      )}
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-1.5" aria-hidden="true">
      <ArrowDown className="h-3.5 w-3.5 text-accent" />
    </div>
  );
}

export default function ArchitectureDiagram() {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      aria-label="System architecture: clients flow through an API layer and service logic into the database, with automation workers feeding the data store."
      className="relative w-full max-w-md"
    >
      <div className="dot-grid absolute -inset-3 rounded-2xl opacity-60" aria-hidden="true" />
      <div className="relative rounded-2xl border border-border bg-bg-soft p-5 shadow-card">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between border-b border-divider pb-3">
          <span className="font-mono text-xs text-text-soft">system.flow</span>
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-accent-line" />
          </div>
        </div>

        <Node label="Client / Consumers" sublabel="web · cron · webhooks" />
        <Connector />
        <Node label="REST API Layer" sublabel="routing · rate limits" accent />
        <Connector />

        {/* Service layer */}
        <div className="rounded-lg border border-border bg-bg-elevated p-3">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-label text-text-soft">
            Service Layer
          </p>
          <div className="grid grid-cols-3 gap-2">
            {["Auth", "Validation", "Logic"].map((s) => (
              <div
                key={s}
                className="rounded-md border border-divider bg-bg-soft py-2 text-center font-mono text-[11px] text-text-muted"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <Connector />

        {/* Data layer */}
        <div className="grid grid-cols-2 gap-2">
          <Node label="PostgreSQL" sublabel="indexed · tuned" />
          <Node label="Workers" sublabel="python jobs" />
        </div>

        <p className="mt-4 text-center font-mono text-[11px] text-text-soft">
          docker · linux · aws ec2
        </p>
      </div>
    </motion.figure>
  );
}
