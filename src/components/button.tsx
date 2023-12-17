import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    type?: 'button' | 'submit' | 'reset'
    className?: string
    onClick: () => void
    children: React.ReactNode
}

const Button = ({ children, onClick, type, className }: Props) => {
  return (
      <button
          onClick={onClick}
          type={type}
          className={twMerge(
              'px-4 py-2 text-sm font-medium text-white bg-primary-default border border-transparent rounded-md hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-default disabled:opacity',
              className ?? '' // eslint-disable-line react/prop-types 
          )}
      >
            {children }
      </button>
  )
}

export default Button