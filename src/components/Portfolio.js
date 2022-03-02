import Card from "./Card";
import carbonDown from "../images/carbon-down.jpg";
import universalDirectory from "../images/universal-directory.jpg";
import textEditor from "../images/text-editor.jpg";
const carbonDownLink = "https://jitasek.github.io/carbon-down/";
const universalDirectoryLink = "https://radiant-savannah-34967.herokuapp.com/";
const textEditorLink = "https://secure-scrubland-80892.herokuapp.com/";

const cardInfo = [
  {
    projectName: "CARBON DOWN",
    desc: "User-friendly application which makes the people aware of their impacts on environment and their carbon footprints",
    href: carbonDownLink,
    actualImage: carbonDown,
  },
  {
    projectName: "UNIVERSAL DIRECTORY",
    desc: "Very Powerful directory of security experts which gives the users the ability to find the experts easily and offer their requirements",
    href: universalDirectoryLink,
    actualImage: universalDirectory,
  },
  {
    projectName: "TEXT EDITOR",
    desc: "Simple Application for both online and offline usages. To add and edit texts",
    href: textEditorLink,
    actualImage: textEditor,
  },
];
function Portfolio() {
  return (
    <div className="flex mx-auto flex-col md:flex-row md:space-x-10 py-10 px-10">
      {cardInfo.map((c) => (
        <Card {...c} />
      ))}
    </div>
  );
}

export default Portfolio;
