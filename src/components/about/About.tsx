import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { getAbout } from "../../firebase/FbHooks";
import AboutSkill from "./AboutSkill";
import "./style/About.scss";

//
interface AboutType {
  image: string;
  extraDes: string;
  id: string;
  description: string;
  techStack: string[];
}
//
function About() {
  const [AboutData, setAboutData] = useState<AboutType | null>(null);
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  //
  async function loadAboutData() {
    const someData = await getAbout();
    setAboutData(someData[0]);
  }
  //
  useEffect(() => {
    loadAboutData();
  }, []);

  return (
    <main className="aboutWrapper sectionWrapper">
      <h1 className="my-2 mx-auto position-relative">
        About
        <div className="nextSectionTab d-flex align-items-center">
          <Link
            to="Portfolio"
            spy={true}
            smooth={true}
            offset={-48}
            duration={400}
            className="d-flex align-items-center"
          >
            <IconButton size="small">
              <ArrowForwardIcon />
            </IconButton>
          </Link>
        </div>
      </h1>
      <Row className="h-100">
        {/*  LEFT COLUMN */}
        <Col
          xs="12"
          md="8"
          className="position-relative d-flex align-items-center"
          style={{ minHeight: "50%" }}
        >
          <section
            style={{
              minHeight: "80%",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "1.5rem",
            }}
            ref={ref}
          >
            <h3>
              <span className="greeting-span">Hello there!</span> I'm Istvan
              Sandor,{" "}
              <small className="font-weight-bold font-italic">
                Full Stack Developer
              </small>
            </h3>
            <div className="position-relative overflow-hidden">
              <p style={{ opacity: "0" }}>{AboutData?.description}</p>
              <p
                className={`aboutDescription ${
                  inView && "aboutDescriptionVisible"
                }`}
              >
                {AboutData?.description}
              </p>
            </div>
            <AboutSkill skills={AboutData?.techStack} />
            <div className="mx-auto">
              <a
                className="text-decoration-none downloadCV"
                href="./IstvanSandor.pdf"
                download="Istvan Sandor"
                target={"_blank"}
              >
                Download CV
              </a>
            </div>
          </section>
        </Col>
        {/* RIGHt COLUMN */}
        <Col
          xs="12"
          md="4"
          className="d-flex align-items-center"
          style={{ minHeight: "400px" }}
        >
          <div style={{ height: "80%", width: "100%", position: "relative" }}>
            <Parallax className="h-100" x={[40, -40]} tagOuter="figure">
              <ParallaxBanner
                className="h-100"
                layers={[
                  {
                    image: AboutData?.image,
                    amount: -0.2,
                    props: { style: { boxShadow: "0 0 20px red" } },
                  },
                ]}
                style={{
                  height: "100%",
                  widgth: "100%",
                }}
              ></ParallaxBanner>
            </Parallax>
          </div>
        </Col>
      </Row>
    </main>
  );
}

export default About;
