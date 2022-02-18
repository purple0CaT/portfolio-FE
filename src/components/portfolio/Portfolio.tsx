import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import { Parallax } from "react-scroll-parallax";
import { getPortfolio } from "../../firebase/FbHooks";
import HorizontalMeme from "./HorizontalMeme";
import PortfolioItem from "./PortfolioItem";
import "./style/Port.scss";
//
interface PortfolioType {
  createdAt: any;
  description: string;
  id: string;
  image: string;
  title: string;
  url: string;
  techStack: string[];
}
//
function Portfolio() {
  const [visibleTicker, setVisibleTicker] = useState(false);
  const [PortfolioData, setPortfolioData] = useState<PortfolioType[] | []>([]);
  const { ref, inView, entry } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  //
  //
  async function loadPortfolioData() {
    const dataFetched = await getPortfolio();
    setPortfolioData(dataFetched);
  }
  //
  useEffect(() => {
    loadPortfolioData();
  }, []);
  //
  return (
    <main
      className="portWrapper sectionWrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <section className="w-100 d-flex flex-column align-items-center justify-content-center">
        <h1
          style={{ cursor: "pointer", position: "relative", margin: 0 }}
          onClick={() => setVisibleTicker(!visibleTicker)}
        >
          My projects
          <div className="nextSectionTab">
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-48}
              duration={400}
            >
              <IconButton size="small">
                <ArrowDownwardIcon />
              </IconButton>
            </Link>
          </div>
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
