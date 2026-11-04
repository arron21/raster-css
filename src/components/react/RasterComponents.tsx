import React, { ReactNode } from 'react';

/**
 * RASTER CSS - React Component Wrappers
 * Aesthetic: Refined Neo-Swiss Editorial (Motus / Quiet Modernism)
 */

export interface SpecRowProps {
  label: string;
  children: ReactNode;
  split?: boolean;
  className?: string;
}

export const SpecRow: React.FC<SpecRowProps> = ({
  label,
  children,
  split = false,
  className = '',
}) => {
  return (
    <div className={`${split ? 'raster-spec-row-split' : 'raster-spec-row'} ${className}`}>
      <span className="raster-spec-key">{label}</span>
      <div className="raster-spec-val">{children}</div>
    </div>
  );
};

export interface SurfaceCardProps {
  title: string;
  priceOrValue: string | number;
  badge?: string;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const SurfaceCard: React.FC<SurfaceCardProps> = ({
  title,
  priceOrValue,
  badge,
  children,
  onClick,
  className = '',
}) => {
  return (
    <div className={`raster-surface-card ${className}`} onClick={onClick}>
      <div className="raster-media-well">
        {badge && <span className="raster-surface-badge">{badge}</span>}
        {children}
      </div>
      <div className="raster-surface-card-meta">
        <span className="raster-surface-card-title">{title}</span>
        <span className="raster-surface-card-price">{priceOrValue}</span>
      </div>
    </div>
  );
};

export interface StatCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  delta?: string;
  deltaType?: 'positive' | 'negative';
  meta?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  subtext,
  delta,
  deltaType = 'positive',
  meta,
  className = '',
}) => {
  return (
    <div className={`raster-card ${className}`}>
      <div className="raster-stat">
        <div className="raster-stat-label">
          <span>{label}</span>
          {meta && <span>{meta}</span>}
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
  title: string;
  meta?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  meta,
  className = '',
}) => {
  return (
    <div className={`raster-section-header ${className}`}>
      <h2 className="raster-h2">{title}</h2>
      {meta && <span className="raster-meta">{meta}</span>}
    </div>
  );
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
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
