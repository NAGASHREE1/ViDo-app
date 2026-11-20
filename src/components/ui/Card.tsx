import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = false,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`bg-[var(--surface)] border border-[var(--line)] rounded-xl p-5 shadow-xs transition-shadow ${
        hoverable ? 'hover:shadow-md cursor-pointer' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

