import DefaultLayouts from "../../ui/Layouts/DefaultLayouts";

const Home = ({ isAuthticated }) => {
  return (
    <DefaultLayouts isAuthticated={isAuthticated}>
      <div>
        <h1>Home</h1>
      </div>
    </DefaultLayouts>
  );
};

export default Home;
