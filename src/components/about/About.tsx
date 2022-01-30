import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { getAbout } from "../../firebase/FbHooks";
import "./style/About.scss";

//
interface AboutType {
  image: string;
  extraDes: string;
  id: string;
  description: string;
}
//
function About() {
  const [AboutData, setAboutData] = useState<AboutType | null>(null);
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
      <h1 className="m-0 mx-auto position-relative">
        About
        <div className="nextSectionTab">
          <Link
            to="Portfolio"
            spy={true}
            smooth={true}
            offset={-48}
            duration={400}
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
            }}
          >
            <h3>
              <span className="greeting-span">Hello there</span>, I'm Istvan
              Sandor
            </h3>
            <p>{AboutData?.description}</p>
            <p className="mt-auto">{AboutData?.extraDes}</p>
            <div className="mx-auto">
              <a
                className="text-decoration-none downloadCV"
                href="./IstvanSandor.pdf"
                download="Istvan Sandor"
                target={"_blank"}
              >
                Download CV
                {/* <h5 className="downloadCV"></h5> */}
              </a>
            </div>
          </section>
        </Col>
        {/* RIGHt COLUMN */}
        <Col xs="12" md="4" className="d-flex align-items-center">
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
