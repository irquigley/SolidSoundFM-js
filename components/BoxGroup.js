const COLORS = [
  "orange",
  "purple"
]; 

export default function BoxGroup({color},{children}) {
  
  const checkColor = COLORS.includes(color)
    ? color
    : COLORS[0];
  
  return (
      <div className={'boxes ${color}'}>
          {children}
      </div>
  )
}
