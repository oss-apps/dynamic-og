import Link from 'next/link'
import clsx from 'clsx'
import Script from 'next/script';
import { Gem } from 'lucide-react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const baseStyles = {
  solid:
    'group flex gap-1 items-center border-2 inline-flex items-center justify-center rounded-full lg:py-2 lg:px-4 p-1 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group flex gap-1 items-center border-2 inline-flex  items-center justify-center rounded-full lg:py-2 lg:px-4 p-2 text-sm focus:outline-none',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-300 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
    primary: 'bg-fuchsia-600 text-white hover:text-slate-100 hover:bg-fuchsia-500 active:bg-fuchsia-800 active:text-fuchsia-100 focus-visible:outline-fuchsia-600',

  },
  outline: {
    slate:
      'ring-slate-400 text-slate-800 hover:text-slate-900 hover:ring-slate-400 active:bg-slate-100 active:text-slate-700 focus-visible:outline-blue-600 focus-visible:ring-slate-400',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },
}

type ButtonProps = (
  | {
    variant?: 'solid'
    color?: keyof typeof variantStyles.solid
  }
  | {
    variant: 'outline'
    color?: keyof typeof variantStyles.outline
  }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
      href?: undefined
    })
  )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'slate'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}

export function BuyButton() {
  // Paste the stripe-buy-button snippet in your React component
  return (
    <> 
    <Script async src="https://js.stripe.com/v3/buy-button.js" />
    <stripe-buy-button
      buy-button-id="buy_btn_1PSbmcK27QgSmXIJVMNBHK5g"
      publishable-key="pk_live_51MwfzMK27QgSmXIJ8LtNlIqcFMh8FD2UhGZvCdBveMDwnOtxOThw9UtaVowD5FZ4fQdvX05Q9yALGnobtzZgcIhW00LglEbT0s"
      >
    </stripe-buy-button>
      </>
  );
}

export function BuyButtonSmall() {
  // Paste the stripe-buy-button snippet in your React component
  return (
    <>
      <Button target='_blank' variant='solid' className='min-w-[30px]' color='slate' href="https://buy.stripe.com/5kAcP8aVyers2yc000">
        <Gem className='h-4 w-4 ' /> <span className='xl:block hidden'> Buy Now </span>
      </Button>
    </>
  );
}
