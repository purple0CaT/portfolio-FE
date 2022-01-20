import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import "./Home.css";
//
function Home() {
  return (
    <div className="homeWrapper">
      <ParallaxBanner
        className="your-class"
        layers={[
          {
            // image: "/bgImg.jpg",
            image:
              "https://i.imgur.com/qJQezzj.jpg",
            amount: -0.15,
          },
        ]}
        style={{
          height: "100%",
        }}
      ></ParallaxBanner>
    </div>
  );
}

export default Home;
