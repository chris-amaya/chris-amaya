import React, {CSSProperties} from 'react'
import styles from '../sass/modules/_button.module.scss'

interface Props {
  text?: string
  className?: string
  styles?: CSSProperties
  onClick?: () => void
}

export const Button: React.FC<Props> = ({
  className = '',
  text,
  children,
  styles: _styles,
  onClick,
}) => {
  return (
    <div
      className={`${styles.button} ${className}`}
      style={_styles}
      onClick={onClick}>
      {children ? children : <p>{text}</p>}
    </div>
  )
}

export default Button
