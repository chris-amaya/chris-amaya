interface Props {
  text: string
}
export default function Tag({text}: Props) {
  return (
    <div className="tag">
      <p>{text}</p>
    </div>
  )
}
