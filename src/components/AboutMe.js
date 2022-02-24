import aboutMePhoto from "../images/07.jpg";

function AboutMe() {
  return (
    // <div className="flex mx-auto flex-col md:flex-row grid grid-cols-2 md:grid-cols-2 h-screen pt-10 ">
    <div className="flex mx-auto flex-col md:flex-row md:space-x-10 py-10 px-10">
      {/* AboutMe Image */}
      <div className="flex flex-col my-8 mx-8">
        <img
          // className="flex justify-self-auto pl-10 pb-10 w-screen h-screen object-cover object-top"
          className="flex justify-self-auto "
          src={aboutMePhoto}
          alt=""
        />
      </div>
      {/* AboutMe description */}
      <div className="flex bg-gray-100 p-10">
        <div className="mb-auto mt-auto max-w-lg">
          <h1 className="text-3xl uppercase">Amir Fard</h1>
          <p className="font-semibold mb-5">
            Computational Designer and Web Developer
          </p>
          <p>
            I am an Architect who is interested in computational methods. Using
            algorithmic design and Fabrication I aim to bridge between
            computation and experiment. Recently I started to practice coding
            and web development, It helps me to follow the systematic thinking.
            My goal is a peaceful and green built environment which is mainly
            based on living systems rather than system of non-living
            infrastructures. Confidently I believe that Coding and web
            development helps me to realize this goal.
          </p>
          <button className="bg-black rounded-md py-3 px-7 mt-6 text-white">
            Email Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
