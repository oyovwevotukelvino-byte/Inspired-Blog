import * as React from 'react'

type ButtonVariant = 'primary' | 'accent' | 'surface' | 'muted'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  as?: React.ElementType
}


// Minimal `as` support so we can use Button with Next.js <Link> in server components.
// We intentionally keep this permissive for now; later we can harden with generics.
export type ButtonAsProp = {
  as?: React.ElementType
}


const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[#D4A017] text-white hover:bg-yellow-500 shadow-lg',
  accent:  'bg-[#1E3A5F] text-white hover:bg-blue-800 shadow-lg',

  surface:
    'bg-white/80 backdrop-blur-md text-gray-900 border border-gray-200 hover:bg-white',
  muted: 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200',
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 rounded-lg text-sm font-semibold',
  md: 'px-6 py-3 rounded-xl text-base font-semibold',
  lg: 'px-8 py-4 rounded-xl text-lg font-semibold',
}

export default function Button({
  as: As,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const Comp: any = As ?? 'button'

  return (
    <Comp
      type={Comp === 'button' ? type : undefined}
      className={[
        'inline-flex items-center justify-center gap-2 transition-all duration-300',
        'focus:outline-none focus:ring-2 focus:ring-faith-gold/50 focus:ring-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(' ')}
      {...props}
    />
  )
}

