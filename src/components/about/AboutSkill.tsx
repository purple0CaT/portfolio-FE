import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton } from "@mui/material";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

function AboutSkill({ skills }: { skills: string[] | undefined }) {
  const skillSliderRef: any = useRef(null);
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <section className="d-flex w-100 mt-auto flex-column justify-content-center align-items-center">
      <h3 className="font-weight-bold" style={{ textDecoration: "underline" }}>
        Skills
      </h3>
      <div className="w-100 d-flex align-items-center mb-2" ref={ref}>
        <IconButton style={{ color: "white" }} color="info">
          <ChevronLeftIcon
            onClick={() => (skillSliderRef.current.scrollLeft -= 250)}
          />
        </IconButton>
        <ul
          className={`aboutSkillSlider ${inView && "aboutSkillSliderAnim"}`}
          ref={skillSliderRef}
        >
          {skills &&
            skills.length > 0 &&
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
