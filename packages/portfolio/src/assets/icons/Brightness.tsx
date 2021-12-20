import React from 'react'

interface Props {
  color?: string
  onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void
}

export function Brightness({color, onClick}: Props) {
  return (
    <div onClick={(ev) => onClick && onClick(ev)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill={color ? color : '#fff'}
          d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path>
      </svg>
    </div>
  )
}

export default Brightness
