import Card from "./Card";
import carbonDown from "../images/carbon-down.jpg";
import universalDirectory from "../images/universal-directory.jpg";
import textEditor from "../images/text-editor.jpg";
const carbonDownLink = "https://jitasek.github.io/carbon-down/";
const universalDirectoryLink = "https://radiant-savannah-34967.herokuapp.com/";
const textEditorLink = "https://radiant-savannah-34967.herokuapp.com/";

function Portfolio() {
  return (
    <div className="flex space-x-10 py-10 px-10">
      <Card
        projectName="CARBON DOWN"
        desc="Simple and userfriendly application which makes the people aware of their impacts on environment and their carbon foot prints"
        href={carbonDownLink}
        actualImage={carbonDown}
      />
      <Card
        projectName="UNIVERSAL DIRECTORY"
        desc="Very Powerful directory of security experts which makes the costumer's simple find them and offer their requirements"
        href={universalDirectoryLink}
        actualImage={universalDirectory}
      />
      <Card
        projectName="Text Editor"
        desc="Simple app for both online and offline usages. To add and edit texts"
        href={textEditorLink}
        actualImage={textEditor}
      />
    </div>
  );
}

export default Portfolio;
