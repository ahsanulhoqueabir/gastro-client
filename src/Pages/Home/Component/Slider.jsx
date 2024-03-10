import { useEffect, useState } from "react";

const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      title: "Unleash Your Culinary Creativity",
      des: "Explore culinary artistry in hands-on courses. From basics to advanced techniques, master the craft and ignite your passion.",
      img: "https://i.ibb.co/2kGP9pN/Gourment-Cooking-Techniques.jpg",
    },
    {
      title: "Elevate Your Culinary Skills",
      des: "Refine your skills with expert-led classes. From classic to contemporary, elevate your cooking prowess and culinary confidence.",
      img: "https://i.ibb.co/P9dTWbW/culinary-academy-2.jpg",
    },
    {
      title: "Savor the Flavor of Success",
      des: "Delve into gourmet cuisine with immersive programs. Discover new tastes, sharpen techniques, and savor the journey to culinary success.",
      img: "https://i.ibb.co/Zdc5vWk/culinary-academy-1.jpg",
    },
    {
      title: "Craft Your Culinary Future",
      des: "Forge your path in the culinary world. Explore diverse cuisines, hone skills, and craft a delicious future.",
      img: "https://i.ibb.co/10PnpmZ/gastronomix-culinary-academy-banner-containing-food-chef-master-without-any-text.jpg",
    },
    {
      title: "Taste the Difference",
      des: "Transform your passion into a culinary career. Dive into farm-to-table principles, refine techniques, and taste success.",
      img: "https://i.ibb.co/RcbwZ6X/culinary-academy.jpg",
    },
    {
      title: "Culinary Excellence Awaits",
      des: "Embark on a journey to gourmet greatness. From farm-to-table to haute cuisine, discover excellence in every bite.",
      img: "https://i.ibb.co/FD9BfPS/Resturant-operations-and-Managements.jpg",
    },
    {
      title: "Culinary Adventure Begins Here",
      des: "Start your culinary journey today. Explore knife skills, plating techniques, and create culinary masterpieces.",
      img: "https://i.ibb.co/CtBJZz4/Healthy-Cooking-and-Nutrition.jpg",
    },
    {
      title: "Ignite Your Passion for Food",
      des: "Fuel your culinary dreams. Explore innovative programs, ignite your love for cooking, and unleash your inner chef.",
      img: "https://i.ibb.co/8ND3VLR/internation-cuisine-doing-workshop-in-university.jpg",
    },
    {
      title: "Master the Art of Cooking",
      des: "Unlock culinary mastery. From basics to advanced techniques, discover the art of cooking in expert-led courses.",
      img: "https://i.ibb.co/7bRDx7K/course-based-on-Baking-and-Pastry-Arts.jpg",
    },
    {
      title: "Discover Your Culinary Calling",
      des: "Find your culinary voice. Explore fundamentals, flavor pairings, and unleash your creativity in hands-on classes.",
      img: "https://i.ibb.co/wQGYbDZ/a-mentor-taking-bootcamp-on-cuisine-fundamental-around-15-students-background-color-will-be-aestheti.jpg",
    },
  ];
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        ),
      10000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <div className="flex flex-row-reverse justify-between">
      <div
        className={`bg-fixed w-full h-72 sm:h-96 md:h-[600px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear  overflow-hidden`}
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
      >
        {/* text container here */}
        <div className="drop-shadow-lg text-primary text-center px-5 bg-blue-100 lg:py-6 lg:rounded-lg ">
          <h1 className="text-xl lg:text-3xl font-semibold mb-3 ">
            {sliders[currentSlider].title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
            {sliders[currentSlider].des}
          </p>
        </div>
      </div>
      {/* slider container */}
      <div className="flex flex-col justify-center items-center gap-3 p-2">
        {/* sliders */}
        {sliders.map((slide, inx) => (
          <img
            onClick={() => setCurrentSlider(inx)}
            key={inx}
            src={slide.img}
            className={`w-10  md:w-20 h-4 sm:h-4 md:h-12 bg-black/20 ${
              currentSlider === inx ? "border-[1px] border-black p-px" : ""
            } rounded-md md:rounded-lg  box-content cursor-pointer`}
            alt={slide.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
