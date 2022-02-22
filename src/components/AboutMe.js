import aboutMePhoto from "../images/07.jpg";

function AboutMe() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-2 h-screen">
        <div className="max-h-40 md:h-40">
          <img
            className="w-screen h-screen/2 object-cover object-top"
            src={aboutMePhoto}
            alt=""
          />
        </div>
        <div className="flex bg-gray-100 p-10">
          <div className="mb-auto mt-auto max-w-lg">
            <h1 className="text-3xl uppercase">Amir Fard</h1>
            <p className="font-semibold mb-5">
              Computational Designer and Web Developer
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.
            </p>
            <button className="bg-black rounded-md py-3 px-7 mt-6 text-white">
              Email Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
