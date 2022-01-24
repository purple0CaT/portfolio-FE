import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import PortfolioData from "../../data/portfolioData.json";
import PortfolioItem from "./PortfolioItem";
import "./style/Port.scss";
import memeData from "../../data/memes.json";
//
function Portfolio() {
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
        <h1>Portfolio</h1>
        {/*  */}
        <div className="memeContainer">
          <ul className="memeWrapper1 p-0">
            {memeData.length > 0 &&
              memeData.map((img: any, index: number) => (
                <li className="d-flex mx-2 memeItem" key={index + "mem"}>
                  <img
                    src={img.img}
                    alt="memeImg"
                    style={{
                      height: "100%",
                      aspectRatio: "1/1",
                      objectFit: "contain",
                    }}
                  />
                </li>
              ))}
          </ul>
          {/* <ul className="memeWrapper2 p-0">
            {memeData.length > 0 &&
              memeData.map((img: any, index: number) => (
                <li className="d-flex mx-2" key={index + "mem"}>
                  <img
                    src={img.img}
                    alt="memeImg"
                    style={{
                      height: "100%",
                      aspectRatio: "1/1",
                      objectFit: "contain",
                    }}
                  />
                </li>
              ))}
          </ul>
          <ul className="memeWrapper3 p-0">
            {memeData.length > 0 &&
              memeData.map((img: any, index: number) => (
                <li className="d-flex mx-2" key={index + "mem"}>
                  <img
                    src={img.img}
                    alt="memeImg"
                    style={{
                      height: "100%",
                      aspectRatio: "1/1",
                      objectFit: "contain",
                    }}
                  />
                </li>
              ))}
          </ul> */}
          {/* <ul className="memeWrapper4 p-0">
            {memeData.length > 0 &&
              memeData.map((img: any, index: number) => (
                <li className="d-flex mx-2" key={index + "mem"}>
                  <img
                    src={img.img}
                    alt="memeImg"
                    style={{
                      height: "100%",
                      aspectRatio: "1/1",
                      objectFit: "contain",
                    }}
                  />
                </li>
              ))}
          </ul> */}
        </div>
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
