import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    // { text: "Completed Projects", count: "24" },
    // { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-gray">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">
          About <span className="text-primarydark">Me</span>
        </h3>
        <p className="text-graylight my-3 text-lg">My introduction</p>
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-10 md:flex-row md:gap-6">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="mx-auto w-11/12 text-justify leading-7">
                Hello, I'm Felicia Natania, a computer science student and
                aspiring software engineer. I embarked on my coding journey three
                years ago, and I've been hooked ever since. What I enjoy most is
                the thrill of learning new things and the satisfaction of
                solving problems. When I'm not immersed in coding,
                you'll often find me delving into tutorials and exploring the
                latest tech trends such as data science and machine learning. One guiding principle I live by
                is to never be afraid to start something new, as it's the best
                way to grow and achieve your goals. I'm excited to connect with
                fellow tech enthusiasts who share my passion for continuous
                learning and creative problem-solving.
              </p>
              <div className="mt-10 flex items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="text-2xl font-semibold text-gray md:text-4xl">
                      {content.count}
                      <span className="text-primarydark">+</span>{" "}
                    </h3>
                    <span className="text-xs md:text-base">{content.text}</span>
                  </div>
                ))}
              </div>
              {/* <br />
              <br /> */}
              <a href="https://drive.google.com/file/d/11FpWYaxZzygbHWOsIcfx1JgNFaeKdfQe/view?usp=sharing" target="_blank">
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="mt-6 flex flex-1 items-center justify-center md:mt-0">
            <div className="aboutImg relative h-full w-11/12 max-w-sm sm:w-10/12 lg:w-96">
              <img
                src={aboutImg}
                alt=""
                className="w-full rounded-xl bg-primary object-cover hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
