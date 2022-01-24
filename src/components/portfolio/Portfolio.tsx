import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import PortfolioData from "../../data/portfolioData.json";
import PortfolioItem from "./PortfolioItem";
import "./style/Port.scss";
import HorizontalMeme from "./HorizontalMeme";
import { useState } from "react";
//
function Portfolio() {
  const [visibleTicker, setVisibleTicker] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  //
  return (
    <main className="portWrapper sectionWrapper">
      <section
        className="w-100 d-flex flex-column align-items-center justify-content-center"
        style={{ height: "20vh" }}
      >
        <h1
          style={{ cursor: "pointer" }}
          onClick={() => setVisibleTicker(!visibleTicker)}
        >
          Portfolio
        </h1>
        {visibleTicker && <HorizontalMeme />}
      </section>
      <section ref={ref} className={`portfolioItemsWrapper`}>
        <Parallax className="h-100" x={[-40, 55]} tagOuter="figure">
          <div className="portfolioItemsContainerWrapper shadowsBox">
            <ul
              className={`portfolioItemsContainer ${
                inView && "portfolioAppear"
              }`}
            >
              {PortfolioData.map((item, index): any => (
                <PortfolioItem item={item} index={index} key={index + "asd"} />
              ))}
            </ul>
          </div>
        </Parallax>
      </section>
    </main>
  );
}

export default Portfolio;
