import React from "react";
import fel from "../assets/images/fel.png";
import Button from "./Button";
const Hero = () => {
  // const social_media = [
  //   "logo-instagram",
  //   "logo-facebook",
  //   "logo-linkedin",
  //   "logo-twitter",
  // ];
  const social_media = [
    {
      logo: "logo-github",
      link: "https://github.com/felicianatania",
    },
    {
      logo: "logo-instagram",
      link: "https://www.instagram.com/felicia.natania/",
    },
    {
      logo: "logo-linkedin",
      link: "https://www.linkedin.com/in/felicia-natania-782300216/",
    },
  ];
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center py-10 md:flex-row"
    >
      <div className="flex h-full flex-1 items-center justify-center">
        <img
          src={fel}
          alt=""
          className="mb-5 h-full w-6/12 object-cover md:w-6/12"
        />
      </div>
      <div className="flex-1">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold leading-10 text-gray md:text-5xl md:leading-normal">
            <span className="text-5xl text-primarydark md:text-6xl">
              Hello!
              <br />
            </span>
            I'm <span>Felicia Natania</span>
          </h1>
          <h4 className="text-graylight mt-4 text-lg font-bold leading-5 md:text-2xl md:leading-normal">
            Aspiring Software Engineer
          </h4>
          {/* <button className="btn-primary mt-8">Contact Me</button> */}
          <a href="https://wa.link/pq0v3e" target="_blank">
            <Button>Contact Me</Button>
          </a>
          <div className="mt-8 flex items-center justify-center gap-5 text-3xl md:justify-start">
            {social_media?.map((icon) => (
              <a
                key={icon.link}
                href={icon.link}
                target="_blank"
                className="text-gray-600 cursor-pointer hover:text-primarydark"
              >
                <ion-icon name={icon.logo}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
