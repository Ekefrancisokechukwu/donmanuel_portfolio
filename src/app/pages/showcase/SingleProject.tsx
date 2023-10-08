import Image from "next/image";

type Props = {
  project: Project;
};

const SingleProject = ({ project }: Props) => {
  return (
    <article className="xl:w-[1060px] mt-16 bg-[#161616] px-5">
      <div className="xl:w-[900px] mx-auto">
        <h2 className="primary-head py-5">{project.title}</h2>
        <figure className="group overflow-hidden  h-auto cursor-pointer ">
          <Image
            src={project.image}
            alt={"project1"}
            className="w-full h-full cursor-pointer  group-hover:scale-125 transition-transform 1s ease-in"
          />
        </figure>
        <ul className="">
          <li className="grid md:grid-cols-2 grid-cols-1 border-b py-7  gap-y-5 border-gray-100/20">
            <h4 className="font-semibold">{project.infoTitle}:</h4>
            <p className="font-light leading-9">{project.infoPara}</p>
          </li>
          <li className="grid md:grid-cols-2  grid-cols-1 gap-y-5  py-7 border-gray-100/20">
            <h4 className="">{project.resultTitle}:</h4>
            <ol className="font-semibold list-disc">
              {project.results.map((result, i) => (
                <li key={i}>{result} </li>
              ))}
            </ol>
          </li>
        </ul>
      </div>
    </article>
  );
};
export default SingleProject;
