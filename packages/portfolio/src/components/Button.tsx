import React, {CSSProperties} from 'react'
import styles from '../sass/modules/Button.module.scss'

interface Props {
  text?: string
  className?: string
  styles?: CSSProperties
}

export const Button: React.FC<Props> = ({
  className = '',
  text,
  children,
  styles: _styles,
}) => {
  return (
    <div className={`${styles.button} ${className}`} style={_styles}>
      {children ? children : <p>{text}</p>}
    </div>
  )
}

export default Button
