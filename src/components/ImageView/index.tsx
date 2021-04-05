import React from "react";
import cn from "classnames";
import "./style.css";

type ImageViewProps = {
  url: string;
  className?: string;
};
const ImageView: React.FC<ImageViewProps> = (props) => {
  const { url, className } = props;
  return (
    <div className={cn("image-view", className)}>
      <img src={url} alt="" />
    </div>
  );
};

export default ImageView;
