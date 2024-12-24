import { ImageProps } from "../types";

export const Image = ({ src, width, height }: ImageProps) => (
  <img src={`/img/images/${src}`} alt={src} width={width} height={height} />
);
