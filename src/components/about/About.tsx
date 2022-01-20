import { Col, Row } from "react-bootstrap";
// import { Parallax } from "react-parallax";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import "./About.css";

function About() {
  return (
    <div className="aboutWrapper sectionWrapper">
      <h1 className="mx-auto">About</h1>
      <Row className="h-100">
        {/*  LEFT COLUMN */}
        <Col
          xs="12"
          md="8"
          className="position-relative d-flex align-items-center"
          style={{ minHeight: "50%" }}
        >
          <div style={{ minHeight: "80%" }}>
            <h3>Full Stack Developer</h3>
          </div>
        </Col>
        {/* RIGHt COLUMN */}
        <Col
          xs="12"
          md="4"
          className="d-flex align-items-center"
          style={{ minHeight: "50%" }}
        >
          <div style={{ height: "80%", width: "100%", position: "relative" }}>
            <Parallax className="h-100" x={[40, -40]} tagOuter="figure">
              <ParallaxBanner
                className="h-100"
                layers={[
                  {
                    image: "bgImg.jpg",
                    amount: 0.3,
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
    </div>
  );
}

export default About;
