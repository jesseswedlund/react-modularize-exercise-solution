const ProjectTile = (props) => {
    return (
        <div className="project project-tile">
          <img
            className="project-pic"
            src={`images/projectbg${props.projNum}.png`}
            alt="project"
          />
          <div className="project-title">Demo Project {props.projNum}</div>
        </div>
    )
}

export default ProjectTile