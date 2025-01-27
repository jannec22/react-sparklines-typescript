import { CSSProperties } from "react"
import { Point } from "./types"

export interface SparklinesCurveProps {
  color?: string
  divisor?: number
  height?: number
  margin?: number
  points?: Point[]
  style?: CSSProperties
  width?: number
}

const SparklinesCurve = (props: SparklinesCurveProps): JSX.Element => {
  const {
    points = [],
    height = 0,
    margin = 0,
    color,
    style = {},
    divisor = 0.25,
  } = props

  let prev: Point

  const curve = (p: Point): (number | string)[] => {
    let res: (number | string)[]

    if (!prev) {
      res = [p.x, p.y]
    } else {
      const len = (p.x - prev.x) * divisor

      res = [
        "C",
        //x1
        prev.x + len,
        //y1
        prev.y,
        //x2,
        p.x - len,
        //y2,
        p.y,
        //x,
        p.x,
        //y
        p.y,
      ]
    }

    prev = p
    return res
  }

  if (!points.length) {
    return <></>
  }

  const linePoints = points
    .map(curve)
    .reduce((a, b) => a.concat(b), [])

  const closePolyPoints: (number | string)[] = [
    "L" + points[points.length - 1].x,
    height - margin,
    margin,
    height - margin,
    margin,
    points[0].y,
  ]

  const fillPoints = linePoints.concat(closePolyPoints)

  const lineStyle: CSSProperties = {
    stroke: color || style.stroke || "slategray",
    strokeWidth: style.strokeWidth || "1",
    strokeLinejoin: style.strokeLinejoin || "round",
    strokeLinecap: style.strokeLinecap || "round",
    fill: "none",
  }

  const fillStyle: CSSProperties = {
    stroke: style.stroke || "none",
    strokeWidth: "0",
    fillOpacity: style.fillOpacity || 0.1,
    fill: style.fill || color || "slategray",
  }

  return (
    <g>
      <path d={"M" + fillPoints.join(" ")} style={fillStyle} />
      <path d={"M" + linePoints.join(" ")} style={lineStyle} />
    </g>
  )
}

export default SparklinesCurve
