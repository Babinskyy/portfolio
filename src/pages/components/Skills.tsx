import skills from "../../common/data/skills";

const Skills = ():JSX.Element => {
    return (  <div className="skills-paragraph">
    <h3>MY SKILLS</h3>
    <div className="skills-container">

    {skills.map((e, i) => {
      return (
        <div className="skill">
          <img src={e.image} alt={e.name + " icon"} />
          <span>{e.name}</span>
        </div>
      )
    })}
    </div>
  </div>)
}

export default Skills;