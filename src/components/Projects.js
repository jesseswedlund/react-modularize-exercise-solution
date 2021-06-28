import ProjectTile from "./ProjectTile"

const projectList = [1, 2, 3, 4, 5, 6]

const Projects = (props) => {
    return (
      <div id="projects" className="work">
        <h2 className="work-header">These are some of my projects..</h2>
        {projectList.map((projectNumber) => <ProjectTile projNum={projectNumber}/>)}
        <div><a href="http://google.com">Show all</a></div>
      </div>
    )
}

export default Projects