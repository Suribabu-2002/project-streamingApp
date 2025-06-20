import React from "react";

interface ProductionHouse {
  id: number;
  image: string;
  video: string;
}

const ProductionHouse: React.FC = () => {
  const productionHouseList: ProductionHouse[] = [
    {
      id: 1,
      image: "/Images/disney.png",
      video: "/Videos/disney.mp4",
    },
    {
      id: 2,
      image: "/Images/pixar.png",
      video: "/Videos/pixar.mp4",
    },
    {
      id: 3,
      image: "/Images/marvel.png",
      video: "/Videos/marvel.mp4",
    },
    {
      id: 4,
      image: "/Images/starwar.png",
      video: "/Videos/star-wars.mp4",
    },
    {
      id: 5,
      image: "/Images/nationalG.png",
      video: "/Videos/national-geographic.mp4",
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-2 md:px-16 ">
      {productionHouseList.map((item) => (
        <div
          key={item.id}
          className="border-[2px] border-gray-600
        rounded-lg hover:scale-110 transition-all duration-300
        ease-in-out cursor-pointer relative shadow-xl
        shadow-gray-800
        "
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0 w-full top-0 rounded-md
        opacity-0 hover:opacity-50"
          />
          <img src={item.image} className="w-full z-[1] opacity-100" alt="" />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
