import resume from "../images/lebenslauf.jpg";

function Resume() {
  return (
    // <div className="flex mx-auto flex-col md:flex-row grid grid-cols-2 md:grid-cols-2 h-screen pt-10 ">
    <div className="flex mx-auto flex-col md:flex-row md:space-x-10 py-10 px-10">
      {/* AboutMe Image */}
      <div className="flex flex-col my-8 mx-8">
        <img
          // className="flex justify-self-auto pl-10 pb-10 w-screen h-screen object-cover object-top"
          className="flex justify-self-auto "
          src={resume}
          alt=""
        />
      </div>
      {/* AboutMe description */}
      <div className="self-end flex bg-gray-100 p-10">
        <div className="mb-auto mt-auto max-w-lg">
          <h1 className="text-xl uppercase">Amir Fard</h1>
          <p className="text-xs font-semibold mb-5">
            Computational Designer and Web Developer
          </p>
          <p className="text-xs font-semibold mb-5">
            The vision of peaceful and green built environmet is not far away,
            lets communicate
          </p>
          <a
            href={resume}
            download="AmirFardLebenslauf"
            className="bg-gray-500 rounded-md py-2 px-5 mt-6 text-white hover:bg-gray-300 "
            id="download"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
