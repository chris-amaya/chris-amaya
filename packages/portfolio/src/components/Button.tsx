import React from 'react'

interface Props {
  text?: string
  circular?: boolean
}

export const Button: React.FC<Props> = ({text, circular, children}) => {
  return (
    <div className={`button ${circular ? 'circular' : ''}`}>
      {children ? children : <p>{text}</p>}
    </div>
  )
}

export default Button
