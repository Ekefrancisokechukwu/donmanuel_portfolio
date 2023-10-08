import { projects } from "../../../../utils/datas";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <section className="mt-16">
      {projects.map((project, i) => (
        <SingleProject key={i} project={project} />
      ))}
    </section>
  );
};
export default Projects;
