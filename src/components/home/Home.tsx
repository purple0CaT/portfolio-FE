import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import "./Home.css";
//
function Home() {
  return (
    <div className="homeWrapper">
      {/* <Parallax
        className="h-100"
        bgImage="/bgImg.jpg"
        strength={400}
        bgImageStyle={{ minHeight: "calc( 100vh - 1px )" }}
      >
        Content goes here. Parallax height grows with content height.
      </Parallax> */}
      {/* <Parallax
        // className={style.text}
        // offsetYMax={70}
        // offsetYMin={-70}
        // offsetXMax={-30}
        // offsetXMin={30}
        x={[100, -100]}
      >
        <span className="h1">Horizontal</span>
      </Parallax> */}
      <ParallaxBanner
        className="your-class"
        layers={[
          {
            image: "/bgImg.jpg",
            amount: 0.15,
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
