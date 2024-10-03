import Typewiter from "typewriter-effect";
export default function About() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">

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
          rapidly evolving fields such as FreeLancing, Blogging and Accounting.
          As a FreeLancer, I specialize in video editing. As an Accountant, I
          bring precision and analytical thinking to manage financial tasks
          effectively. I also enjoy sharing insights & experiences through my
          blogs, where I write about different topics. I am always eager to take
          on new challenges that push me to grow.
        </p>
      </div>
      </div>
    </section>
  );
}
