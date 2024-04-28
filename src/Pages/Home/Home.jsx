import RouteTitle from "../../utilities/RouteTitle";
import PopularClass from "./Component/PopularClass/PopularClass";
import Slider from "./Component/Slider";

const Home = () => {
  RouteTitle("Home");
  return (
    <div>
      <Slider />
      <PopularClass />
    </div>
  );
};

export default Home;
