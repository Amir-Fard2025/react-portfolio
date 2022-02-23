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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
            pede.
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
