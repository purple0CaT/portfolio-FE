import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import "./style/Home.scss";
//
function Home() {
  return (
    <main className="homeWrapper">
      <ParallaxBanner
        className="your-class"
        layers={[
          {
            image: "https://i.imgur.com/qJQezzj.jpg",
            amount: 0.12,
          },
        ]}
        style={{
          height: "100%",
        }}
      ></ParallaxBanner>
    </main>
  );
}

export default Home;
