import { CSSProperties } from "react"

interface SparklinesBarsProps {
  points?: any[]
  height?: number
  style?: CSSProperties
  barWidth?: number
  margin?: number
  onMouseMove?: () => void
}

const SparklinesBars = (props: SparklinesBarsProps): JSX.Element => {
  const {
    points = [],
    height = 0,
    style = { fill: "slategray" },
    barWidth,
    margin,
    onMouseMove,
  } = props

  const marginWidth = margin ? 2 * margin : 0
  const strokeWidth: number =
    1 * ((style && style.strokeWidth ? +style.strokeWidth : 0) || 0)

  const width =
    barWidth ||
    (points && points.length >= 2
      ? Math.max(0, points[1].x - points[0].x - strokeWidth - marginWidth)
      : 0)

  return (
    <g transform="scale(1,-1)">
      {points.map((p, i) => (
        <rect
          key={i}
          x={p.x - (width + strokeWidth) / 2}
          y={-height}
          width={width}
          height={Math.max(0, height - p.y)}
          style={style}
          onMouseMove={onMouseMove && onMouseMove.bind({}, p)}
        />
      ))}
    </g>
  )
}

export default SparklinesBars
