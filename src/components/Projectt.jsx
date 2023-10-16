import React from "react";
import hackathon from "../assets/images/hackathon.png";
import jefdemy from "../assets/images/jefdemy.png";
import sunbic from "../assets/images/sunbic.png";
import care from "../assets/images/care.png";
import vorgreens from "../assets/images/vorgreens.png";
import jefmental from "../assets/images/jefmental.png";
import credwise from "../assets/images/CredWise.png";
import bajo from "../assets/images/bajo.png";
import ml from "../assets/images/ml.png";

const Projectt = () => {
  const projects = [
    {
      img: hackathon,
      name: "Hackathon",
      github_link: "https://github.com/felicianatania/hackathon",
      desc: "Laravel(php), HTML, CSS",
      type: "Github",
    },
    {
      img: jefdemy,
      name: "JEFDemy",
      github_link: "https://github.com/felicianatania/JEFDemy",
      desc: "Laravel, Tailwind CSS",
      type: "Github",
    },
    {
      img: sunbic,
      name: "SUNBIC",
      github_link: "https://github.com/felicianatania/SUNBIC",
      desc: "HTML, CSS",
      type: "Github",
    },
    {
      img: care,
      name: "CAR-E",
      github_link: "https://github.com/felicianatania/car-e",
      desc: "Flutter(Dart)",
      type: "Github",
    },
    {
      img: vorgreens,
      name: "VOrgreens",
      github_link: "https://github.com/felicianatania/VOrgreens",
      desc: "HTML, CSS, JavaScript",
      type: "Github",
    },
    {
      img: jefmental,
      name: "JEFMental",
      github_link: "https://github.com/felicianatania/Find-it",
      desc: "Swift",
      type: "Github",
    },
    {
      img: credwise,
      name: "CredWise",
      github_link: "https://github.com/felicianatania/codebusters",
      desc: "Laravel, Tailwind CSS, Vue.js",
      type: "Github",
    },
    {
      img: bajo,
      name: "BAJO!",
      github_link:
        "https://www.figma.com/proto/Fq5J9t8uvkt3p0n7NmuLWM/BAJO!?page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2&scaling=scale-down&mode=design&t=fViziPFgbioFoTc6-1",
      desc: "Figma",
      type: "Figma",
    },
    {
      img: ml,
      name: "Machine Learning",
      github_link: "https://colab.research.google.com/drive/1bjS0tq1U87r7QL9VwuYJBmvaBx5KqNsT?usp=sharing",
      desc: "Python",
      type: "Colab",
    },
  ];
  return (
    <section id="projects" className="py-10 text-gray">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-primarydark">Projects</span>
        </h3>
        <p className="mt-3 text-lg text-graylight">My works</p>
      </div>
      <br />
      <div className="realtive mx-8 lg:mx-32 grid grid-cols-1 gap-8 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {projects.map((project_info, i) => (
          <div key={i} className="mb-4">
            <div className="h-fit rounded-xl bg-primary p-4 hover:bg-primary2 transition hover:duration-150 ease-in-out hover:text-white">
              <img
                src={project_info.img}
                alt=""
                className="mx-auto rounded-lg"
              />
              <h3 className="mt-4 text-xl font-bold">{project_info.name}</h3>
              <p className="my-2">{project_info.desc}</p>
              <div className="flex gap-3">
                <a
                  href={project_info.github_link}
                  target="_blank"
                  className="mt-2 inline-block rounded-full bg-primarydark px-2 py-1 text-white delay-100 hover:-translate-y-0.5 hover:bg-primarylight hover:text-gray"
                >
                  {project_info.type}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projectt;
