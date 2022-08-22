const COLORS = [
  "orange",
  "purple"
]; 

export default function BoxGroup({color},{children}) {
  
  const checkColor = COLORS.includes(color)
    ? color
    : COLORS[0];
  
  const combinedClass = "boxes " + color;
  
  return (
      <div className={combinedClass}>
          {children}
      </div>
  )
}
