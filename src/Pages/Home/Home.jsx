import RouteTitle from "../../utilities/RouteTitle";
import PopularClass from "./Component/PopularClass/PopularClass";
import PopularInstructor from "./Component/PopularInstructor/PopularInstructor";
import Slider from "./Component/Slider";

const Home = () => {
  RouteTitle("Home");
  return (
    <div>
      <Slider />
      <PopularClass />
      <PopularInstructor />
    </div>
  );
};

export default Home;
