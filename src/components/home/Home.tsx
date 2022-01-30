import { ParallaxBanner } from "react-scroll-parallax";
import HChildren from "./HChildren";
import "./style/Home.scss";
//
function Home() {
  return (
    <main className="homeWrapper">
      <HChildren />
      <ParallaxBanner
        className="your-class"
        layers={[
          {
            // children: ,
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
