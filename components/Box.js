export default function Box({title},{children}) {
  return (
    <div className="box">
        <div className="title">{title}</div>
        <div className="body">{children}</div>
    </div>
  )
}
