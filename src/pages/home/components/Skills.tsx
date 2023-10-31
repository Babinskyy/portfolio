import { frontSkills, backSkills } from "../../../common/data/skills";

type SkillsProps = {
  darkTheme: boolean;
};

const Skills = (props: SkillsProps): JSX.Element => {
  return (
    <div className={`skills-paragraph ${props.darkTheme ? "dark" : ""}`}>
      <h2>Frontend</h2>
      <div className="skills-container">
        {frontSkills.map((e, i) => {
          return (
            <div className={`skill ${e.name}`} key={e.name}>
              <img src={e.image} alt={e.name + " icon"} />
              <span>{e.name}</span>
            </div>
          );
        })}
      </div>
      <h2>Backend & Environment</h2>
      <div className="skills-container">
        {backSkills.map((e, i) => {
          return (
            <div className={`skill ${e.name}`} key={e.name}>
              <img src={e.image} alt={e.name + " icon"} />
              <span>{e.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
