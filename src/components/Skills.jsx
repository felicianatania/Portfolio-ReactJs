import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    },
    {
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    },
    {
      logo: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
    },
    {
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
      logo: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
    },
    {
      logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    },
    {
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    },
    {
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
    },
    {
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    },
    {
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    },
    {
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
    },
    {
      logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
    },
  ];
  return (
    <section
      id="skills"
      className="from-blue-400 relative 
    animate-gradient-x 
    bg-gradient-to-r 
    via-purple-500
    to-orange-500 py-10"
    >
      <div className="text-gray-100 mt-8 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-primarydark">Skills</span>
        </h3>
        <p className="text-graylight mt-3 text-lg">My knowledge</p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 px-3 ">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="group relative min-w-[10rem] max-w-[16rem] rounded-xl border-2 border-primarydark p-10 hover:bg-primary hover:-translate-y-1 delay-75"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full">
                <div className="flex h-28 w-28 items-center justify-center rounded-full text-6xl">
                  <img className="h-20" src={skill.logo} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
