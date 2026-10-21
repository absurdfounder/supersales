'use client'

import React from 'react'
import Link from 'next/link'

type Variant = 'solid' | 'outline'
type Tone = 'brand' | 'dark' | 'light'
type Size = 'sm' | 'md' | 'lg'

interface BasePropsCommon {
  children: React.ReactNode
  variant?: Variant
  tone?: Tone
  size?: Size
  icon?: React.ReactNode
  ariaLabel?: string
  className?: string
  disabled?: boolean
}

type AnchorRest = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'className' | 'aria-label' | 'children'
>

type ButtonRest = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'className' | 'aria-label' | 'children' | 'disabled' | 'onClick'
>

interface AnchorProps extends BasePropsCommon, AnchorRest {
  href: string
  external?: boolean
  type?: never
}

interface ButtonProps extends BasePropsCommon, ButtonRest {
  href?: undefined
  type?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

type PixelButtonProps = AnchorProps | ButtonProps

const BUTTON_SIZE: Record<Size, string> = {
  sm: 'min-h-10 px-4 py-2.5 text-sm',
  md: 'min-h-11 px-5 py-3 text-base',
  lg: 'min-h-12 px-6 py-3.5 text-base sm:text-lg',
}

function resolveButtonStyle(variant: Variant, tone: Tone) {
  if (variant === 'outline') return 'btn-secondary'
  if (tone === 'dark') return 'btn-dark'
  if (tone === 'light') return 'btn-light'
  return 'btn-primary'
}

function buildShellClass(className?: string, disabled?: boolean) {
  const wantsFullWidth = className?.includes('w-full')
  return [
    'group relative inline-flex min-w-0 items-stretch align-middle select-none',
    wantsFullWidth ? 'w-full' : 'w-fit',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agro-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
    'active:translate-y-px',
    disabled ? 'pointer-events-none opacity-60' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
}

export default function PixelButton(props: PixelButtonProps) {
  const {
    children,
    variant = 'solid',
    tone = 'brand',
    size = 'md',
    icon,
    ariaLabel,
    className,
    disabled,
  } = props

  const shellClassName = buildShellClass(className, disabled)
  const labelClassName = [
    'btn-face flex-1 self-stretch',
    BUTTON_SIZE[size],
    resolveButtonStyle(variant, tone),
  ].join(' ')

  const content = (
    <span className={labelClassName}>
      <span>{children}</span>
      {icon ? <span className="inline-flex shrink-0 items-center">{icon}</span> : null}
    </span>
  )

  if ('href' in props && props.href) {
    const {
      href,
      external,
      children: _children,
      variant: _variant,
      tone: _tone,
      size: _size,
      icon: _icon,
      ariaLabel: _ariaLabel,
      className: _className,
      disabled: _disabled,
      ...rest
    } = props as AnchorProps

    const isExternal = external || href.startsWith('http')

    if (disabled) {
      return (
        <span role="link" aria-disabled="true" aria-label={ariaLabel} className={shellClassName}>
          {content}
        </span>
      )
    }

    if (isExternal) {
      return (
        <a
          {...rest}
          href={href}
          target={rest.target ?? '_blank'}
          rel={rest.rel ?? 'noopener noreferrer'}
          aria-label={ariaLabel}
          className={shellClassName}
        >
          {content}
        </a>
      )
    }

    return (
      <Link {...rest} href={href} aria-label={ariaLabel} className={shellClassName}>
        {content}
      </Link>
    )
  }

  const {
    type,
    onClick,
    children: _children,
    variant: _variant,
    tone: _tone,
    size: _size,
    icon: _icon,
    ariaLabel: _ariaLabel,
    className: _className,
    disabled: _disabled,
    ...rest
  } = props as ButtonProps

  return (
    <button
      {...rest}
      type={type ?? 'button'}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      className={shellClassName}
    >
      {content}
    </button>
  )
}
