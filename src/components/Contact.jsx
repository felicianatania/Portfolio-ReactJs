import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "felicianatania3113@gmail.com" },
    { logo: "logo-whatsapp", text: "087876838817" },
    {
      logo: "location",
      text: "Jakarta | Tangerang",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white mb-20">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold text-gray">
          Contact <span className="text-primarydark">Me</span>
        </h3>
        <p className="text-graylight mt-3 text-lg">Get in touch</p>

        <div
          className="mt-8 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-primary2 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" className="placeholder-white"/>
            <input type="Email" placeholder="Your Email Address" className="placeholder-white"/>
            <textarea placeholder="Your Message" rows={10} className="placeholder-white"></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-gray bg-primary rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm text-gray break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
