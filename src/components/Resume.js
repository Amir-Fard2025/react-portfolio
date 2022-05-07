import resume from "../images/lebenslauf.jpg";
import resumePdf from "../images/CV_AmirSaadatFard.pdf";
import resumeArchitekturPdf from "../images/CV_AmirSaadatFard.pdf";

function Resume() {
  return (
    // <div className="flex mx-auto flex-col md:flex-row grid grid-cols-2 md:grid-cols-2 h-screen pt-10 ">
    <div className="flex mx-auto flex-col md:flex-row md:space-x-10 py-20 px-20">
      {/* AboutMe Image */}
      <img
        className="flex justify-self-auto "
        // className="flex justify-self-auto pl-10 pb-10 w-screen h-screen object-cover object-top"
        src={resume}
        alt=""
      />

      {/* AboutMe description */}
      <div className="self-end flex bg-gray-100 p-10">
        <div className="mb-auto mt-auto max-w-lg">
          <h1 className="text-xl uppercase">Amir Fard</h1>
          <p className="text-xs font-semibold mb-5">
            Computational Designer and Web Developer
          </p>
          <p className="text-xs font-semibold mb-5">
            The vision of peaceful, green, and programmed built environmet is
            not far away, let us communicate!
          </p>
          <div className="flex">
            <a
              href={resumePdf}
              download="AmirSaadatFard_CV_WebDevelopment"
              className="bg-gray-400 flex:1 rounded-md py-2 px-5 mt-6 text-white hover:bg-gray-300 "
              id="download"
            >
              Download CV_AmirSaadatFard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
