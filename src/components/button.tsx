import React from 'react'

type Props = {
    onClick: () => void
    children: React.ReactNode
}

const Button = ({ children, onClick }: Props) => {
  return (
      <button
            onClick={onClick}
          type="submit"
          className="rounded-md bg-primary-default px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
            {children }
      </button>
  )
}

export default Button