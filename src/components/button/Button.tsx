"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import ButtonTextUnderline from './ButtonTextUnderline';
import ButtonIconArrow from './ButtonIconArrow';
import ButtonTextStagger from './ButtonTextStagger/ButtonTextStagger';
import ButtonShiftHover from './ButtonShiftHover/ButtonShiftHover';
import ButtonHoverMagnetic from './ButtonHoverMagnetic/ButtonHoverMagnetic';
import ButtonHoverBubble from './ButtonHoverBubble';
import ButtonExpandHover from './ButtonExpandHover';
import { useRouter } from 'next/navigation';
import type { ButtonVariantProps } from './types';

export type { ButtonVariant, ButtonVariantProps, ButtonPropsForVariant } from './types';

type ButtonProps<T extends keyof ButtonVariantProps> = {
  variant: T;
  className?: string;
} & ButtonVariantProps[T];

export default function Button<T extends keyof ButtonVariantProps>({
  variant,
  ...props
}: ButtonProps<T>) {
  const router = useRouter();

  // Handle navigation for href prop
  const handleClick = React.useCallback(
    (originalOnClick?: () => void, href?: string) => {
      return () => {
        // Call original onClick if provided
        if (originalOnClick) {
          originalOnClick();
        }
        
        // Handle navigation
        if (href) {
          // External links (http, https, www) open in new tab
          if (href.startsWith('http') || href.startsWith('https') || href.startsWith('www.')) {
            window.open(href.startsWith('www.') ? `https://${href}` : href, '_blank');
          } else {
            // Internal navigation - scroll to section or navigate to route
            if (href.startsWith('/')) {
              router.push(href);
            } else {
              // Assume it's a section ID for smooth scrolling
              const element = document.getElementById(href);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }
        }
      };
    },
    [router]
  );

  const buttonProps = {
    ...props,
    onClick: handleClick((props as any).onClick, (props as any).href),
  };

  // Remove href from props since we handle it via onClick
  if ('href' in buttonProps) {
    delete (buttonProps as any).href;
  }

  switch (variant) {
    case 'text-underline':
      return <ButtonTextUnderline {...(buttonProps as ButtonVariantProps['text-underline'])} />;
    case 'icon-arrow':
      return <ButtonIconArrow {...(buttonProps as ButtonVariantProps['icon-arrow'])} />;
    case 'text-stagger':
      return <ButtonTextStagger {...(buttonProps as ButtonVariantProps['text-stagger'])} />;
    case 'shift-hover':
      return <ButtonShiftHover {...(buttonProps as ButtonVariantProps['shift-hover'])} />;
    case 'hover-magnetic':
      return <ButtonHoverMagnetic {...(buttonProps as ButtonVariantProps['hover-magnetic'])} />;
    case 'hover-bubble':
      return <ButtonHoverBubble {...(buttonProps as ButtonVariantProps['hover-bubble'])} />;
    case 'expand-hover':
      return <ButtonExpandHover {...(buttonProps as ButtonVariantProps['expand-hover'])} />;
    default:
      return <ButtonTextUnderline {...(buttonProps as ButtonVariantProps['text-underline'])} />;
  }
}