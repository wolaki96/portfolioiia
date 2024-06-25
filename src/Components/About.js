import React from "react";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-50">
            Hello World! I'm Iia!
            <br className="hidden lg:inline-block" /> Data, Travel, Language, Coffee
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a data analyst, linguist, and coffee efficianado. I enjoy team building and learning
            new technologies. I am always looking for new ways to display data and constantly
            brushing up on my Japanese or Mandarin skills. Feel free to check out what I do in my spare time
            and professional time.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-black bg-yellow-50 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-black-400 bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./me.jpg"
          />
        </div>
      </div>
    </section>
  );
}