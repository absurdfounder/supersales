'use client';

import type { ReactNode } from 'react';

type PixelAtmosphereProps = {
  children: ReactNode;
  className?: string;
  flicker?: boolean;
  camo?: boolean;
};

export function PixelAtmosphere({
  children,
  className = '',
  flicker = true,
  camo = false,
}: PixelAtmosphereProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {camo && (
        <div className="pointer-events-none absolute inset-0 z-0 pixel-camo-wash" aria-hidden />
      )}
      {flicker && (
        <div
          className="pointer-events-none absolute inset-0 z-[1] pixel-flicker-grid"
          aria-hidden
        />
      )}
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}

export function PixelMissionTag({
  index,
  label,
  className = '',
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <span className={`army-mission-tag ${className}`}>
      <span className="text-slate-400">[{index}]</span>
      <span className="army-mission-tag__sep" aria-hidden />
      {label}
    </span>
  );
}
