import React from 'react'
interface Props {
  color?: string
}
export function Figma({color}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512">
      <path
        fill={color ? color : '#fff'}
        d="M336 176a80 80 0 000-160H176a80 80 0 000 160 80 80 0 000 160 80 80 0 1080 80V176z"></path>
      <circle fill={color ? color : '#fff'} cx="336" cy="256" r="80"></circle>
    </svg>
  )
}

export default Figma
