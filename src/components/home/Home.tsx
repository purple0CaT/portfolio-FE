import ReactPlayer from "react-player";
import { ParallaxBanner } from "react-scroll-parallax";
import HChildren from "./HChildren";
import "./style/Home.scss";
//
function VideoPlayer() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ReactPlayer
        url="https://www.youtube.com/watch?v=nd80_lEqhoI"
        height="100%"
        width="auto"
        style={{ position: "absolute", aspectRatio: "2/1" }}
        loop
        muted
        playing
      />
    </div>
  );
}

function Home() {
  return (
    <main className="homeWrapper">
      <HChildren />
      <ParallaxBanner
        className="your-class"
        layers={[
          {
            children: <VideoPlayer />,
            image: "https://i.imgur.com/qJQezzj.jpg",
            amount: 0.12,
          },
        ]}
        style={{
          height: "100%",
        }}
      />
    </main>
  );
}

export default Home;
