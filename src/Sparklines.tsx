import {
  CSSProperties,
  Children,
  ReactNode,
  cloneElement,
  isValidElement,
  useMemo,
} from "react"
import SparklinesReferenceLine, {
  SparklinesReferenceLineTypes,
} from "./SparklinesReferenceLine"

import SparklinesBars from "./SparklinesBars"
import SparklinesCurve from "./SparklinesCurve"
import SparklinesLine from "./SparklinesLine"
import SparklinesNormalBand from "./SparklinesNormalBand"
import SparklinesSpots from "./SparklinesSpots"
import SparklinesText from "./SparklinesText"
import dataToPoints from "./dataProcessing/dataToPoints"

export interface SparklinesProps {
  children?: ReactNode
  data: number[] | number[][]
  height?: number
  limit?: number
  margin?: number
  max?: number
  min?: number
  onMouseMove?: () => void
  preserveAspectRatio?: string
  svgWidth?: number
  svgHeight?: number
  style?: CSSProperties
  width?: number
}

interface SVGOpts {
  height?: number | string
  preserveAspectRatio: string
  style?: CSSProperties
  viewBox: string
  width?: number | string
}

const isSeries = (data: number[] | number[][]): data is number[][] => {
  return data.length > 0 ? Array.isArray(data[0]) : false
}

const Sparklines = (props: SparklinesProps): JSX.Element => {
  const {
    data = [],
    limit,
    width = 240,
    height = 60,
    preserveAspectRatio = "none",
    margin = 2,
    svgWidth,
    svgHeight,
    style,
    max,
    min,
  } = props

  if (data.length === 0) {
    return <></>
  }

  const points = useMemo(
    () => {
      if (isSeries(data)) {
        return data.map(series => dataToPoints({ data: series, limit, width, height, margin, max, min }))
      } else {
        return dataToPoints({ data, limit, width, height, margin, max, min })
      }
    },
    [data, limit, width, height, margin, max, min]
  )

  const svgOpts: SVGOpts = {
    style,
    viewBox: `0 0 ${width} ${height}`,
    preserveAspectRatio: preserveAspectRatio,
  }

  if (svgWidth && svgWidth > 0) svgOpts.width = svgWidth
  if (svgHeight && svgHeight > 0) svgOpts.height = svgHeight

  return (
    <svg {...svgOpts}>
      {Children.map(props.children, function (child: ReactNode, index: number) {
        if (!isValidElement(child)) {
          return child
        }

        const childPoints = isSeries(data) ? points[index] : points

        if (!childPoints) {
          return child
        }

        return cloneElement(child, {
          data,
          points: childPoints,
          width,
          height,
          margin,
        })
      })}
    </svg>
  )
}

export {
  Sparklines,
  SparklinesBars,
  SparklinesLine,
  SparklinesNormalBand,
  SparklinesReferenceLine,
  SparklinesReferenceLineTypes,
  SparklinesSpots,
  SparklinesText,
  SparklinesCurve,
}
