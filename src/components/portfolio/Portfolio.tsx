import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import PortfolioData from "../../data/portfolioData.json";
import PortfolioItem from "./PortfolioItem";
import "./style/Port.scss";
//
function Portfolio() {
  const { ref, inView, entry } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });
  //
  return (
    <main className="portWrapper sectionWrapper">
      <div className="w-100 d-flex" style={{ height: "20vh" }}>
        <h1 className="mx-auto my-auto">Portfolio</h1>
      </div>
      <section ref={ref} className={`portfolioItemsWrapper`}>
        {/* <ul
          className={`portfolioItemsContainer shadowsBox ${
            inView && "portfolioAppear"
          }`}
        >
          {PortfolioData.map((item, index): any => (
            <PortfolioItem item={item} index={index} key={index + "asd"} />
          ))}
        </ul> */}
        <Parallax className="h-100" x={[-40, 55]} tagOuter="figure">
          <div className="portfolioItemsContainerWrapper shadowsBox">
            <ul className={`portfolioItemsContainer ${inView && "portfolioAppear"}`}>
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
