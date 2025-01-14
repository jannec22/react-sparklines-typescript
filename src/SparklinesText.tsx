import { Point } from "./types";

export interface SparklinesTextProps {
  point?: Point;
  text?: string;
  fontSize?: string;
  fontFamily?: string;
}

const SparklinesText = (props: SparklinesTextProps): JSX.Element => {
  const {
    point = { x: undefined, y: undefined },
    text,
    fontSize,
    fontFamily,
  } = props;

  const { x, y } = point;

  return (
    <g>
      <text
        x={x}
        y={y}
        fontFamily={fontFamily || "Verdana"}
        fontSize={fontSize || 10}
      >
        {text}
      </text>
    </g>
  );
};

export default SparklinesText;
