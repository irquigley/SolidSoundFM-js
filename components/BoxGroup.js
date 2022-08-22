export default function BoxGroup({color},{children}) {
  return (
      <div className="boxes {color}">
          {children}
      </div>
  )
}
