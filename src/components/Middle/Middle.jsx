import Heading from "../Heading/Heading";
import NewsList from "../NewsList/NewsList";

const Middle = () => {
  return (
    <div className="lg:col-span-2">
      <Heading title="Dragon News Home" />
      <NewsList />
      
    </div>
  );
};

export default Middle;
