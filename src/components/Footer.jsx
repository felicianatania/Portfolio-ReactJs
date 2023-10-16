import React from "react";

const Footer = () => {
  const contact_info = [
    { logo: "mail", text: "felicianatania3113@gmail.com" },
    { logo: "logo-whatsapp", text: "087876838817" },
    {
      logo: "location",
      text: "Jakarta | Tangerang",
    },
  ];

  return (
    <section
      className="mx-auto mt-8 flex flex-col gap-6 bg-primary p-10
    text-center text-sm text-gray md:flex-row md:p-10"
    >
      <div className="flex flex-col text-left w-1/2 gap-4">
        <h1 className="font-bold text-2xl text-gray">Felicia Natania</h1>
        <div className="font-semibold text-xl">Feel free to reach me any time!</div>
      </div>
      <div className="flex flex-col gap-7 ">
        {contact_info.map((contact, i) => (
          <div
            key={i}
            className="flex flex-row  
                  flex-wrap items-center gap-4 text-left"
          >
            <div className="flex  min-h-[3.5rem] min-w-[3.5rem] items-center justify-center rounded-full bg-primary text-3xl text-gray hover:text-white">
              <ion-icon name={contact.logo}></ion-icon>
            </div>
            <p className="break-words text-sm text-gray md:text-base">
              {contact.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
