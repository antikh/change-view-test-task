import React from "react";
import cn from "classnames";
import "./style.css";

type VideoPlayerProps = {
  videoUrl: string;
  className?: string;
};
const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const { videoUrl, className } = props;
  return (
    <video controls={true} className={cn("video-player", className)}>
      <source src={videoUrl} type="video/mp4" />
    </video>
  );
};

export default React.memo(VideoPlayer);
