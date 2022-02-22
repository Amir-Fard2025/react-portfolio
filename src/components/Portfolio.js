import Card from "./Card";
import carbonDown from "../images/carbon-down.jpg";
const carbonDownLink = "https://jitasek.github.io/carbon-down/";

function Portfolio() {
  return (
    <div className="flex space-x-10 py-10 px-10">
      <Card
        projectName="CARBON DOWN"
        desc="Simple and userfriendly application which makes the people aware of their impacts on environment and their carbon foot prints"
        href={carbonDownLink}
        actualImage={carbonDown}
      />
      <Card projectName="Project 2" desc="Description 2" />
      <Card projectName="Project 3" desc="Description 3" />
    </div>
  );
}

export default Portfolio;
