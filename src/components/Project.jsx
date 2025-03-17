import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import hackathon from "../assets/images/hackathon.png";
import jefdemy from "../assets/images/jefdemy.png";
import sunbic from "../assets/images/sunbic.png";
import care from "../assets/images/care.png";
import vorgreens from "../assets/images/vorgreens.png";
import jefmental from "../assets/images/jefmental.png";
import credwise from "../assets/images/CredWise.png";
import bajo from "../assets/images/bajo.png";
import flockid from "../assets/images/FlockID.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: flockid,
      name: "FLOCKID",
      github_link: "https://github.com/HFJ-thesis/farmit-fe",
      desc: "Next.js, Node.js, CSS",
    },
    {
      img: hackathon,
      name: "Hackathon",
      github_link: "https://github.com/Sridhar-C-25",
      desc: "Laravel(php), HTML, CSS",
    },
    {
      img: jefdemy,
      name: "JEFDemy",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      desc: "Laravel, Tailwind CSS",
    },
    {
      img: sunbic,
      name: "SUNBIC",
      github_link: "https://github.com/Sridhar-C-25/highking",
      desc: "HTML, CSS",
    },
    {
      img: care,
      name: "CAR-E",
      github_link:
        "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
      desc: "Flutter(Dart)",
    },
    {
      img: vorgreens,
      name: "Vue Country",
      github_link: "https://github.com/Sridhar-C-25",
      desc: "HTML, CSS, JavaScript",
    },
    {
      img: jefmental,
      name: "JEFMental",
      github_link: "https://github.com/Sridhar-C-25/highking",
      desc: "Swift",
    },
    {
      img: credwise,
      name: "CredWise",
      github_link:
        "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
      desc: "Laravel, Tailwind CSS, Vue.js",
    },
    {
      img: bajo,
      name: "BAJO!",
      github_link: "https://github.com/Sridhar-C-25",
      desc: "Figma",
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
      <div className="relative mx-auto flex max-w-6xl items-center gap-6 px-5">
        <div className="w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full rounded-xl bg-primary p-4">
                  <img
                    src={project_info.img}
                    alt=""
                    className="mx-auto rounded-lg"
                  />
                  <h3 className="mt-4 text-xl">{project_info.name}</h3>
                  <p className="my-2">{project_info.desc}</p>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="inline-block rounded-full bg-primary2 px-2 py-1 text-white delay-100 hover:-translate-y-0.5 hover:bg-primarylight hover:text-gray"
                    >
                      Github
                    </a>
                    {/* <a
                      href={project_info.live_link}
                      target="_blank"
                      className="inline-block  bg-primary2 px-2 py-1 text-white rounded-full hover:bg-primarylight hover:text-gray hover:-translate-y-0.5 delay-100"
                    >
                      Live Demo
                    </a> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
