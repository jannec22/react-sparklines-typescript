import arrayMax from "./max";
import arrayMin from "./min";

export interface DataToPointsArgs {
  data: number[];
  limit?: number;
  width?: number;
  height?: number;
  margin?: number;
  max?: number;
  min?: number;
}

export default ({
  data,
  limit,
  width = 1,
  height = 1,
  margin = 0,
  max = arrayMax(data),
  min = arrayMin(data),
}: DataToPointsArgs) => {
  const len = data.length;

  if (limit && limit < len) {
    data = data.slice(len - limit);
  }

  const vFactor = (height - margin * 2) / (max - min || 2);
  const hFactor = (width - margin * 2) / ((limit || len) - (len > 1 ? 1 : 0));

  return data.map((d, i) => ({
    x: i * hFactor + margin,
    y: (max === min ? 1 : max - d) * vFactor + margin,
  }));
};
