interface Props {
  text: string
}
export function Tag({text}: Props) {
  return (
    <div className="tag">
      <p>{text}</p>
    </div>
  )
}
