import React, { ReactNode } from 'react';

/**
 * RASTER CSS - React Component Wrappers
 * Lightweight, zero-dependency, type-safe components.
 */

export interface StatCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  delta?: string;
  deltaType?: 'positive' | 'negative';
  index?: string | number;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  subtext,
  delta,
  deltaType = 'positive',
  index,
  className = '',
}) => {
  return (
    <div className={`raster-card ${className}`}>
      <div className="raster-stat">
        <div className="raster-stat-label">
          <span>{label}</span>
          {index !== undefined && <span className="raster-mono">[{String(index).padStart(2, '0')}]</span>}
        </div>
        <div className="raster-stat-value">{value}</div>
        {(subtext || delta) && (
          <div className="raster-stat-sub">
            {delta && (
              <span className={`raster-delta ${deltaType === 'positive' ? 'raster-delta-positive' : 'raster-delta-negative'}`}>
                {delta}
              </span>
            )}
            {subtext && <span>{subtext}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export interface SectionHeaderProps {
  index?: string | number;
  title: string;
  meta?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  title,
  meta,
  className = '',
}) => {
  return (
    <div className={`raster-section-header ${className}`}>
      {index !== undefined && (
        <span className="raster-index">[{String(index).padStart(2, '0')}]</span>
      )}
      <h2 className="raster-h2">{title}</h2>
      <div className="raster-rule" />
      {meta && <span className="raster-meta">{meta}</span>}
    </div>
  );
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'default' | 'sm';
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  ...props
}) => {
  const variantClass = `raster-btn-${variant}`;
  const sizeClass = size === 'sm' ? 'raster-btn-sm' : '';
  return (
    <button className={`raster-btn ${variantClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export interface SegmentedBarProps {
  label: string;
  totalLabel?: string;
  segments: {
    label: string;
    percentage: number;
    color?: string; // CSS color string or var
  }[];
}

export const SegmentedBar: React.FC<SegmentedBarProps> = ({
  label,
  totalLabel,
  segments,
}) => {
  return (
    <div className="raster-meter">
      <div className="raster-meter-header">
        <span className="raster-label">{label}</span>
        {totalLabel && <span className="raster-mono">{totalLabel}</span>}
      </div>
      <div className="raster-segmented-bar">
        {segments.map((seg, i) => (
          <div
            key={i}
            style={{
              width: `${seg.percentage}%`,
              backgroundColor: seg.color || 'var(--raster-fg-primary)',
            }}
            title={`${seg.label}: ${seg.percentage}%`}
          />
        ))}
      </div>
      <div className="raster-flex raster-justify-between mt-2 raster-label">
        {segments.map((seg, i) => (
          <span key={i}>■ {seg.label}: {seg.percentage}%</span>
        ))}
      </div>
    </div>
  );
};
