import RouteTitle from "../../utilities/RouteTitle";
import PopularClass from "./Component/PopularClass/PopularClass";
import PopularInstructor from "./Component/PopularInstructor/PopularInstructor";
import PopularReviews from "./Component/PopularReviews/PopularReviews";
import Slider from "./Component/Slider";
import FeedBack from "./Component/feedback/FeedBack";

const Home = () => {
  RouteTitle("Home");
  return (
    <div className="">
      <Slider />
      <PopularClass />
      <PopularInstructor />
      <PopularReviews />
      <FeedBack />
    </div>
  );
};

export default Home;
