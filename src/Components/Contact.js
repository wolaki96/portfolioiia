import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-pink-600 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112222.13767757958!2d-81.4250659316284!3d28.48129925543697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1719267149091!5m2!1sen!2sus"
          />
          <div className="bg-pink-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-11">
              <h2 className="title-font font-semibold text-gray-50 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-yellow-50">
                 <br />
                Orlando, FL
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-yellow-50 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                <a href= "mailto: iia.wolak@gmail.com">iia.wolak@gmail.com</a>
              </a>
              <h2 className="title-font font-semibold text-yellow-50 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-yellow-50">850-591-0565</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            I am always looking for opportunities to build my skills. Feel free to download my resume
            and reach out.
          </p>
          <div className="relative mb-4"></div>
          <a className="inline-flex items-center bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0" href="Wolak, Iia Resume.pdf" download> 
       Download Resume
   
</a>
           
        </form>
      </div>
    </section>
  );
}