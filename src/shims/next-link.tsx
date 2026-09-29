import React from 'react';
import { navigateTo } from '../navigation';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Link({
  href,
  children,
  className,
  onClick,
  ...props
}: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // If external or opened in new tab or default was prevented, let native browser handle
    if (
      e.defaultPrevented ||
      props.target === '_blank' ||
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:')
    ) {
      return;
    }

    e.preventDefault();
    navigateTo(href);
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
