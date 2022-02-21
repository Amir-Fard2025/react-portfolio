import Card from "./Card";

function Portfolio() {
  return (
    <div className="flex space-x-10 py-10 px-10">
      <Card projectName="Project 1" desc="Description 1" />
      <Card projectName="Project 2" desc="Description 2" />
      <Card projectName="Project 3" desc="Description 3" />
    </div>
  );
}

export default Portfolio;
