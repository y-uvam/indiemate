import React from 'react';
import { colors } from '../../utils';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  disabled = false,
  href,
  style = {},
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold',
    md: 'px-6 py-2.5 text-sm font-semibold',
    lg: 'px-8 py-3.5 text-base font-bold',
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: `linear-gradient(135deg, ${colors.storyRing} 0%, ${colors.pink} 50%, ${colors.primaryBlue} 100%)`,
          color: colors.white,
          border: `1px solid ${colors.transparentWhite15}`,
          boxShadow: `0 4px 20px ${colors.transparentBlack25}`,
        };
      case 'secondary':
        return {
          backgroundColor: colors.transparentWhite10,
          color: colors.white,
          border: `1px solid ${colors.transparentWhite15}`,
          backdropFilter: 'blur(12px)',
        };
      case 'dark':
        return {
          backgroundColor: colors.darkblue,
          color: colors.white,
          border: `1px solid ${colors.transparentWhite10}`,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: colors.white,
          border: `1px solid ${colors.transparentWhite40}`,
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: colors.subtitleGray,
          border: '1px solid transparent',
        };
      default:
        return {};
    }
  };

  const baseClasses =
    'relative inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 ease-out select-none disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 cursor-pointer';

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${className}`;

  const buttonStyle = {
    ...getVariantStyles(),
    ...style,
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} style={buttonStyle} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};
