import React from "react";

function AboutSkill({ skills }: any) {
  return (
    <section className="d-flex w-100 mt-auto flex-column justify-content-center align-items-center">
      <h3 className="font-weight-bold" style={{ textDecoration: "underline" }}>
        Skills
      </h3>
      <ul className="aboutSkillSlider">
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
    </section>
  );
}

export default AboutSkill;
