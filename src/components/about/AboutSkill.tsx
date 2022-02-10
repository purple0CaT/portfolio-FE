import React, { useRef } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton } from "@mui/material";

function AboutSkill({ skills }: any) {
  const skillSliderRef: any = useRef(null);
  return (
    <section className="d-flex w-100 mt-auto flex-column justify-content-center align-items-center">
      <h3 className="font-weight-bold" style={{ textDecoration: "underline" }}>
        Skills
      </h3>
      <div className="w-100 d-flex align-items-center mb-2">
        <IconButton style={{ color: "white" }} color="info">
          <ChevronLeftIcon
            onClick={() => (skillSliderRef.current.scrollLeft -= 250)}
          />
        </IconButton>
        <ul className="aboutSkillSlider" ref={skillSliderRef}>
          {skills?.length > 0 &&
            skills.map((imgLink: string, i: number) => (
              <li className="d-flex mx-2" key={i + "skillsImg"}>
                <img
                  src={imgLink}
                  alt="tech stack"
                  height={40}
                  width={40}
                  className="skillImg"
                />
              </li>
            ))}
        </ul>
        <IconButton style={{ color: "white" }} color="info">
          <ChevronRightIcon
            onClick={() => (skillSliderRef.current.scrollLeft += 250)}
          />
        </IconButton>
      </div>
    </section>
  );
}

export default AboutSkill;
