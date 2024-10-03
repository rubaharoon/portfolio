"use client";
import react from "react";
import Typewiter from "typewriter-effect";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

import { SiVisualstudiocode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

import Link from "next/link";
export default function Home() {
  return (
    <main>
      <title> Ruba Haroon Portfolio </title>

      {/* Header Section*/}

      <header className="text-gray-400 bg-yellow-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img
              src="https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg"
              width={50}
              height={50}
              alt="logo"
              className="w-20 h-20  text-white p-2 rounded-full"
            />
            <span className="ml-3 text-xl">Ruba Haroon</span>
          </a>

          {/* Navbar Section*/}
          
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            
            <Link
              className="mr-5 text-white hover:text-blue-500"
              href={"http://localhost:3000/about"}
            >
              About{" "}
            </Link>
            <Link
              className="mr-5 text-white hover:text-green-500"
              href={"http://localhost:3000/contactus"}
            >
              Contact Us
            </Link>
            <Link
              className="mr-5 text-white hover:text-pink-400"
              href={"http://localhost:3000/privacypolicy"}
            >
              Privacy Policy
            </Link>
          </nav>

          {/* Buttons*/}

          <a href="">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-rose-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-rose-200 dark:focus:ring-rose-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Download Resume
            </button>
          </a>
        </div>

        {/* Hero*/}
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
            {/* Image*/}
            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded border-yellow-600 border-4"
              alt="hero"
              src="https://sharedp.com/wp-content/uploads/2024/06/cute-cartoon-girl-pic-wallpaper-960x1024.jpg"
            />

            {/*Hero Content*/}
            <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
              {/*Typewiter Effect*/}
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500">
                <Typewiter
                  options={{
                    strings: [
                      "Freelancer",
                      "Blogger",
                      "Accountant",
                      "Learner,seeking new opportunities",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="text-white mb-8 leading-relaxed">
                {" "}
                I am Ruba Haroon, a passionate learner who is always seeking new
                challenges and learning new things in order to stay ahead in the
                rapidly evolving fields such as FreeLancing, Blogging and
                Accounting. As a FreeLancer, I specialize in video editing. As
                an Accountant, I bring precision and analytical thinking to
                manage financial tasks effectively. I also enjoy sharing
                insights & experiences through my blogs, where I write about
                different topics. I am always eager to take on new challenges
                that push me to grow.
              </p>
              <div className="flex w-full justify-center items-end">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                  <label
                    htmlFor="hero-field"
                    className="leading-7 text-sm text-blue-400"
                  >
                    {" "}
                    News Letter
                  </label>
                  <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-red-900 focus:bg-transparent focus:border-red-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                {/*Subscribe Button*/}

                <a href="https://www.youtube.com/@rubaharoon331">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Subscribe
                  </button>
                </a>
              </div>
              <br></br>
              <br></br>

              {/*Social Media Buttons*/}
              <div className="flex text-gray-300">
                <a href="https://github.com/rubaharoon">
                  <button className="bg-yellow-600 inline-flex py-3 px-5 rounded-lg items-center hover:bg-purple-700 hover:text-white focus:outline-none">
                    <img
                      src="https://i.pinimg.com/474x/48/e0/73/48e07378e01dd719c060c1f2f2b5cb00.jpg"
                      alt="github"
                      className="w-15 h-10"
                    />
                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-xs text-white mb-1">
                        Connect with
                      </span>
                      <span className="text-white title-font font-bold">
                        Git Hub
                      </span>
                    </span>
                  </button>
                </a>

                <a href="https://www.linkedin.com/in/ruba-haroon-67636b180/">
                  <button className="bg-blue-900 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-sky-700 hover:text-white focus:outline-none">
                    <img
                      src="https://image.similarpng.com/thumbnail/2020/05/Popular-social-media-Linkedin-logo-transparent-PNG.png"
                      alt="linkedin"
                      className="w-15 h-10"
                    />

                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-xs text-white mb-1">
                        Connect with
                      </span>
                      <span className="text-white title-font font-bold">
                        Linked In
                      </span>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*Blog Section*/}

        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
          <div className="container px-2 py-4 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-sm text-blue-500 tracking-widest font-medium title-font mb-1">
                Dev.To Blog
              </h2>

              {/*Typewiter Effect*/}
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-500">
                <Typewiter
                  options={{
                    strings: [
                      "Explore My Latest Blogs - Insights,Tips & Tricks",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold">
                Welcome to our blog hub! Dive into a wide range of articles
                covering everything from the latest trends in technology to
                in-depth tutorials and expert insights. Whether you're a
                beginner or a seasoned professional. Our blogs offer valuable
                knowledge and practical tips to help you stay ahead in your
                field. Explore, learn and grow with our curated content designed
                to inspire and educate.{" "}
              </p>
            </div>

            {/*Blog Cards*/}
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="flex relative">
                  <img
                    alt="Calculator"
                    className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
                    src="https://www.shutterstock.com/image-photo/work-process-hands-office-workplace-260nw-568104433.jpg"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                      Simple Calculator
                    </h2>
                    <h1 className="text-2xl title-font font-black text-sky-400 mb-3">
                      Description:
                    </h1>
                    <p className="leading-relaxed">
                      It performs basic arithmetic operations.Perfect for
                      learning the basics of Javascript functions and user
                      interface.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
                    src="https://content.instructables.com/FGE/F6F0/K1NVATVK/FGEF6F0K1NVATVK.jpg?auto=webp"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900  opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                      Number guessing game
                    </h2>
                    <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                      Description:
                    </h1>
                    <p className="leading-relaxed">
                      It is a program where the user tries to guess a randomly
                      generated number within a specified range.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
                    src="https://www.firstnationalatm.com/wp-content/uploads/2018/09/ATM_keypad_fb.jpg"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                      ATM
                    </h2>
                    <h1 className="title-font text-lg font-black text-sky-400 mb-3">
                      Description:
                    </h1>
                    <p className="leading-relaxed">
                      A simulation of an ATM system that handles
                      deposits,withdrawals and balance inquiries.Useful for
                      understanding user input.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
                    src="https://fcsapi.com/blog/wp-content/uploads/2019/09/currency-converter-fcsapi.com_-750x410.jpg"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                      Currency Converter
                    </h2>
                    <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                      Description:
                    </h1>
                    <p className="leading-relaxed">
                      It allows users to convert between different currencies
                      using real-time exchange rates.Demonstrates API
                      integration & data handling.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
                    src="https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?height=474&width=711&fit=bounds"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                      ToDO-List
                    </h2>
                    <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                      Description:
                    </h1>
                    <p className="leading-relaxed">
                      It is a tool used for organizing tasks & managing time
                      efficiently.It allows users to add,edit,delete,update &
                      view tasks.It help individuals to stay organized.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
                    src="https://1.bp.blogspot.com/-hfloaFTiMk4/YUKL67v3snI/AAAAAAAAAVk/_bwKSApWA_wsJCqUVT4Y1OBDfEQelY_FgCLcBGAsYHQ/s1280/make%2Blanding%2Bpage%2Bin%2B5minutes%2B%25284%2529.png"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                      Word Counter
                    </h2>
                    <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                      Description:
                    </h1>
                    <p className="leading-relaxed">
                      It is a tool that can be used to count the number of words
                      in a given text.It is used by writers,professionals,etc to
                      ensure that their text meets specific word count
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
                    src="https://learningmanagementsystem.design.blog/wp-content/uploads/2018/09/student-management-system-software.jpg"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                      Student Management
                    </h2>
                    <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                      Description:
                    </h1>
                    <p className="leading-relaxed">
                      It is a software application designed to manage various
                      administrative tasks in educational institutions.It helps
                      in tracking student information,including
                      enrollment,marks,fees,etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
                    src="https://adoric.com/blog/wp-content/uploads/2020/07/creating-countdown-timer.jpg"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                      Count Down Timer
                    </h2>
                    <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                      Description:
                    </h1>
                    <p className="leading-relaxed">
                      It is a tool that can be used to set a timer & then
                      display the remaining time.It helps in time
                      management,keeping tasks on schedule & ensuring that
                      activities are completed within a set timeframe.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
                    src="https://partheniumprojects.com/wp-content/uploads/2019/01/Online-quiz-2.png"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                      Quiz System
                    </h2>
                    <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                      Description:
                    </h1>
                    <p className="leading-relaxed">
                      It is a game that allows players to answer questions &
                      earn points based on their answers.It is a fun & engaging
                      way to learn new skills.This helps the users to improve
                      their skills.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
                    src="https://i.pcmag.com/imagery/roundups/03nD1clhMyJ4dMJUQti3LA1-2.fit_lim.size_850x490.v1671052085.jpg"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                      Adventure Game
                    </h2>
                    <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                      Description:
                    </h1>
                    <p className="leading-relaxed">
                      A text-based adventure game where players make choices
                      that affect the outcome.Great for practicing control flow
                      and narrative development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_j0xl7vKyasRZRu6qlvjvBjHhLe8jjG9VA&s"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                      OOP
                    </h2>
                    <h1 className="title-font text-2xl font-black text-w mb-3">
                      Description:
                    </h1>
                    <p className="leading-relaxed">
                      An object-oriented programming (OOP) personality test
                      shows how your coding style might mirror your personal
                      traits.It is a great way to improve your coding skills.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
                    src="https://i.ytimg.com/vi/gQlbH3qr1l4/maxresdefault.jpg"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                      OOP-Bank
                    </h2>
                    <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                      Description:
                    </h1>
                    <p className="leading-relaxed">
                      It is designed to manage banking operations using the
                      principles of OOP.It models real-world entities like
                      accounts,transactions,etc with specific attributes &
                      behaviors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*Button*/}

            <a href="https://github.com/rubaharoon">
              <button className="flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-yellow-500 hover:bg-opacity-100 focus:outline-none bg-black">
                <img
                  src="https://i.pinimg.com/474x/48/e0/73/48e07378e01dd719c060c1f2f2b5cb00.jpg"
                  alt="logo"
                  className="w-15 h-10"
                />
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-white mb-1">Git Hub</span>
                  <span className="title-font font-bold text-white">
                    @RubaHaroon
                  </span>
                </span>
              </button>
            </a>
          </div>
        </section>

        {/*Feature Section*/}

        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-8 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-black text-center title-font text-yellow-500 mb-4">
                Projects Features & Commands
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Explore the essential features of each Typescript project and
                easily run them using the npx commands provided below:
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    npx run start : Calculator
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    npx run start : Number guessing game
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="text-sky-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    npx run start : ATM
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="text-sky-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    npx run start : Currency Converter
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    npx run start : To-Do List
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    npx run start : Word Counter
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="text-sky-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    npx run start : Student Management System
                  </span>
                </div>
              </div>

              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="text-sky-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    npx run start: Count down timer
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    npx run start : Adventure Game
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    npx run start : Quiz System
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="text-sky-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    npx run start : OOP
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="text-sky-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    npx run start : OOP-Bank
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons*/}

            <a href="https://www.npmjs.com/~rubaharoon">
              <button className="flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-sky-400 hover:bg-opacity-100 focus:outline-none bg-yellow-600">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNi7D1Khf5Z3bkU2TtWUV3lXrVTgYb-gbRNg&s"
                  alt="logo"
                  className="w-15 h-10"
                />
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-white mb-1">NPM</span>
                  <span className="title-font font-bold text-black">
                    @RubaHaroon
                  </span>
                </span>
              </button>
            </a>
          </div>
        </section>

        {/* Stats*/}

        <section className="text-gray-400 body-font bg-gray-900">
          <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-4xl text-2xl  font-medium title-font mb-2 text-indigo-800">
                  Unlocking My Skill Set's The Hidden Talents!
                </h1>
                <div className="h-1 w-20 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-sm text-white text-opacity-90">
                Highlights the range of skills and expertise, emphasizing the
                impact & value brought to my projects.
              </p>
            </div>

            {/*Typewiter Effect*/}
            <div className="flex flex-wrap w-full">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                <Typewiter
                  options={{
                    strings: ["Programming Skills"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>

              {/*Professional skills */}

              <section>
                <div className="container px-2 py-8 mx-auto flex flex-wrap justify-center items-center space-x-6 text-2xl">
                  {/*Icons*/}

                  <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 ">
                    <FaHtml5 className="text-blue-800 text-6xl" />
                    <span className="mt-2 text-lg text-black"> HTML</span>
                  </div>

                  <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 ">
                    <TbBrandJavascript className="text-orange-600 text-6xl" />
                    <span className="mt-2 text-lg text-black">
                      {" "}
                      Java Script
                    </span>
                  </div>

                  <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 ">
                    <FaCss3Alt className="text-sky-600 text-6xl" />
                    <span className="mt-2 text-lg text-black"> CSS</span>
                  </div>

                  <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 ">
                    <SiTypescript className="text-blue-900 text-6xl" />
                    <span className="mt-2 text-lg text-black"> Typescript</span>
                  </div>

                  <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 ">
                    <SiNextdotjs className="text-black text-6xl" />
                    <span className="mt-2 text-lg text-black"> Next JS</span>
                  </div>
                </div>
              </section>
            </div>

            {/*Development Tools and Framework Icons*/}

            <div className="container px-2 py-8 mx-auto flex flex-wrap justify-center items-center space-x-6 text-2xl">
              {/*Icons*/}

              <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
                <SiVisualstudiocode className="text-sky-600 text-6xl" />
                <span className="mt-2 text-lg text-black"> Visual Studio</span>
              </div>
              <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
                <FaGithub className="text-black text-6xl" />
                <span className="mt-2 text-lg text-black"> Git Hub</span>
              </div>

              {/*Typewiter Effect*/}
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                <Typewiter
                  options={{
                    strings: ["Development Tools And Frameworks"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
          </div>
        </section>

        {/*Testimonial Section*/}

        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-8 mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-yellow-500 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">
                {" "}
                Dear Miss Mehak Alamgir, your guidance has been the beacon that
                lights our path to success.Miss Mehak Alamgir is an exceptional
                individual whose passion for teaching is evident in every
                lesson.She has a unique ability to engage her students.Her
                teaching style is both enjoyful and helpful,making even the most
                difficult concepts easier to understand and interesting.Her
                commitment to student success is truly inspiring.I had the
                privilege of being a part of her class,and I can confidently say
                that she has made a lasting impact on my life.Learning from her
                has been an incredible experience.I love the way she listens to
                my concerns and helps me to overcome them.I am truly grateful
                for the positive impact she has had on my learning journey,and I
                feel fortunate to have been one of her students.Thankyou for
                your guidance and support.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-8 mb-6"></span>
              <h2 className="text-sky-400 font-medium title-font tracking-wider text-sm">
                <Typewiter
                  options={{
                    strings: ["Mehak Alamgir"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <p className="text-gray-500">Web Developer</p>
            </div>
          </div>
        </section>

        {/*Our Team*/}

        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-4 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-4xl font-black title-font mb-4 text-yellow-500 tracking-widest uppercase">
                Creative Cortex
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Creative Cortex is a visionary collective of
                designers,programmers,researchers and strategists united by a
                passion for turning ideas into powerful digital experiences.The
                team thrives on transforming complex concepts into elegant and
                functional designs that not only captivate but also engage our
                audiences.Our approach is to blend artistic vision and technical
                expertise, ensuring that each product is not only visually
                stunning but also highly intuitive and user-friendly. The team
                is committed to delivering cutting-edge solutions that captivate
                audiences and is the great choice for businesses looking to make
                a lasting impact in the digital world.Innovation is at the heart
                of Creative Cortex's mission.We are constantly exploring new
                trends,tools and technologies to stay ahead of the curve.
              </p>
            </div>

            {/*"peoples"*/}
            <div className="flex flex-wrap -m-2">
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg outline-double outline-2 outline-yellow-500">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100  object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://clipart-library.com/2023/graphic-designer-workplace_23-2148117173.jpg"
                  />
                  <div className="flex-grow">
                    <h2 className="text-rose-600 title-font font-extrabold">
                      Hafsa Kamali
                    </h2>
                    <p className="text-white">Designer</p>
                    <a href="https://www.linkedin.com/in/ruba-haroon-67636b180/">
                      <button className="text-sky-400 inline-flex items-center mt-4">
                        View Profile
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg outline-double outline-2 outline-yellow-500">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://static.vecteezy.com/system/resources/previews/029/771/918/non_2x/portrait-of-a-beautiful-businesswoman-in-modern-office-asian-manager-looking-at-camera-and-smiling-confident-female-ceo-planning-and-managing-company-free-photo.jpeg"
                  />
                  <div className="flex-grow">
                    <h2 className="text-pink-700 title-font font-extrabold">
                      Fiza Sagar
                    </h2>
                    <p className="text-white">CEO</p>
                    <a href="https://www.linkedin.com/in/fiza-sagar-bb3b652b9/">
                      <button className="text-sky-400 inline-flex items-center mt-4">
                        View profile
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg outline-double outline-2 outline-yellow-500">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://thumbs.dreamstime.com/b/young-man-programmer-working-computer-code-screen-student-programming-vector-concept-man-work-computer-programmer-102846347.jpg"
                  />
                  <div className="flex-grow">
                    <h2 className="text-red-600 title-font font-extrabold">
                      Abdullah Kashif
                    </h2>
                    <p className="text-white">Programmer</p>
                    <a href="https://www.linkedin.com/in/abdullah-kashif-6961a931b/">
                      <button className="text-sky-400 inline-flex items-center mt-4">
                        View Profile
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg outline-double outline-2 outline-sky-500">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://img.freepik.com/premium-vector/happy-female-cartoon-character-putting-pieces-puzzle-together-woman-with-new-idea-solving-problem-flat-vector-illustration-strategy-solution-success-concept-banner-landing-web-page_179970-6386.jpg?w=360"
                  />
                  <div className="flex-grow">
                    <h2 className="text-yellow-600 title-font font-extrabold">
                      Iqra Ikram
                    </h2>
                    <p className="text-white">Decision maker</p>
                    <a href="https://www.linkedin.com/in/iqra-ikram-9660732b4/">
                      <button className="text-sky-400 inline-flex items-center mt-4">
                        View Profile
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg outline-double outline-2 outline-sky-500">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://media.istockphoto.com/id/1470350238/vector/software-developer-working-with-computers.jpg?s=612x612&w=0&k=20&c=_NHyCVL47u6silIPxYoZJiq5XeqnzrtkKEcDaR-3C7Y="
                  />
                  <div className="flex-grow">
                    <h2 className="text-sky-600 title-font font-extrabold">
                      Muhammad Noman
                    </h2>
                    <p className="text-white">Software Engineer</p>
                    <a href="https://www.linkedin.com/in/muhammad-noman-330035270/">
                      <button className="text-sky-400 inline-flex items-center mt-4">
                        View Profile
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg outline-double outline-2 outline-sky-500">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://static.vecteezy.com/system/resources/previews/004/745/667/non_2x/female-scientist-looking-through-a-microscope-in-a-laboratory-doing-research-free-vector.jpg"
                  />
                  <div className="flex-grow">
                    <h2 className="text-purple-600 title-font font-extrabold">
                      Mrs Zia
                    </h2>
                    <p className="text-white">Researcher</p>
                    <a href="https://www.linkedin.com/in/pashmeen-zia-31884b2b5/">
                      <button className="text-sky-400 inline-flex items-center mt-4">
                        View Profile
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg outline-double outline-2 outline-orange-500">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://www.shutterstock.com/image-vector/cartoon-drawing-banker-600nw-2072854976.jpg"
                  />
                  <div className="flex-grow">
                    <h2 className="text-blue-700 title-font font-extrabold">
                      Muhammad Uzair
                    </h2>
                    <p className="text-white">Finance Manager</p>
                    <a href="https://www.linkedin.com/in/uzair0011/">
                      <button className="text-sky-400 inline-flex items-center mt-4">
                        View Profile
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg outline-double outline-2 outline-orange-500">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://cdni.iconscout.com/illustration/premium/thumb/marketing-manager-illustration-download-in-svg-png-gif-file-formats--social-media-influencer-digital-teams-pack-business-illustrations-5704669.png?f=webp"
                  />
                  <div className="flex-grow">
                    <h2 className="text-green-700 title-font font-extrabold">
                      Muhammad Abdullah
                    </h2>
                    <p className="text-white">Marketing Manager</p>
                    <a href="https://www.linkedin.com/in/m-abdullah-nadeem/">
                      <button className="text-sky-400 inline-flex items-center mt-4">
                        View Profile
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg outline-double outline-2 outline-orange-500">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://staging.herovired.com/wp-content/uploads/2023/02/office-management-concept-illustration_114360-8811-1.webp"
                  />
                  <div className="flex-grow">
                    <h2 className="text-orange-600 title-font font-extrabold">
                      Aisha
                    </h2>
                    <p className="text-white">Product Manager</p>
                    <a href="https://www.linkedin.com/in/aisha-khurram-12a6b22ba/">
                      <button className="text-sky-400 inline-flex items-center mt-4">
                        View Profile
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Contact Us Section*/}
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-4xl font-black title-font mb-4 text-yellow-500 tracking-widest uppercase">
                Contact Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Fill the form below for any queries.
              </p>
            </div>
          </div>
          <section className="container px-2 py-2 mx-auto text-gray-400 bg-gray-900 body-font relative">
            <div className="absolute inset-0 bg-gray-900">
              <iframe
                title="map"
                width="100%"
                height="100%"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              />
            </div>
            <div className="container px-5 py-24 mx-auto flex">
              <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                <h2 className="text-sky-400 text-lg mb-1 font-medium title-font">
                  Feedback
                </h2>
                <p className="leading-relaxed mb-5">
                  Please fill this form if you have any queries or complains or
                  if you have any message for us.
                </p>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-teal-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-600 focus:ring-2 focus:ring-red-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-emerald-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
                <p className="text-xs text-gray-400 text-opacity-90 mt-3">
                  Read our privacy policy for any issues.
                </p>
              </div>
            </div>
          </section>
        </section>

        {/*Footer Section*/}

        <footer className="text-gray-600 bg-gray-900 body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                src="https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg"
                width={50}
                height={50}
                alt="logo"
                className="w-20 h-20  text-white p-2 rounded-full"
              />
              <span className="ml-3 text-xl text-white">Ruba Haroon</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              {" "}
              Copyright© 2024 All Rights Reserved —
              <a
                href="https://github.com/rubaharoon"
                className="text-gray-600 hover:text-indigo-500 ml-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                @Ruba Haroon
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-blue-900">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-blue-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-pink-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-blue-800">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </header>
    </main>
  );
}
