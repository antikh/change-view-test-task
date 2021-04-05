import React from "react";
import cn from "classnames";
import VideoPlayer from "./components/VideoPlayer";
import ImageView from "./components/ImageView";
import {IMAGE_URL, VIDEO_URL} from "./config"
import "./App.css";

enum ViewType {
  video,
  image,
}

function App() {
  const [view, setView] = React.useState<ViewType>(ViewType.video);

  const handleChangeViewButtonClick = () => {
    if (view === ViewType.image) {
      setView(ViewType.video);
    } else {
      setView(ViewType.image);
    }
  };

  return (
    <div className="App">
      <div className="controls">
        <button onClick={handleChangeViewButtonClick}>Изменить вид</button>
      </div>
      <div className={cn("content", { "reverse-columns": view === ViewType.image })}>
        <div
          className={cn("column", {
            "primary-column": view === ViewType.video,
            "secondary-column": view === ViewType.image,
          })}
        >
          <VideoPlayer videoUrl={VIDEO_URL} />
        </div>
        <div
          className={cn("column", {
            "primary-column": view === ViewType.image,
            "secondary-column": view === ViewType.video,
          })}
        >
          <ImageView url={IMAGE_URL} />
        </div>
      </div>
    </div>
  );
}

export default App;
