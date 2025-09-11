import React from "react";

const Portfolio = () => {
  return (
    <section className="mt-15 md:mt-20 lg:mt-30 px-4.5 md:px-10 xl:px-15">
      <div>
        <h1 className="text-center text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] gilroy-sb leading-snug text-orange-500">
          PORFOLIO
        </h1>
        <h2 className="text-center text-[26px] md:text-[34px] lg:text-[38px] xl:text-[40px] mt-3 gilroy-b leading-snug max-w-2xl mx-auto">
          Our Inkcredible Works, Done for Growing Brands
        </h2>
        <p className="text-black text-md max-w-3xl mx-auto md:text-[18px] lg:text-lg xl:text-xl gilroy-m mt-2 text-center ">
          Every design tells a story. Explore our curated work where creativity
          meets strategy across branding, vector art, web, and more.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-11 md:grid-rows-2 gap-2 h-auto md:h-[100vh] lg:h-[130vh] container mx-auto mt-10">
        {/* Top Left - Split into two sections */}
        <div className="md:col-span-4 md:row-span-1 flex flex-col gap-2">
          <div className="bg-gray-300 rounded-lg h-54 md:h-[calc(55%-0.25rem)] flex items-center justify-center">
            <span className="text-gray-600 font-medium">Portfolio Item 1</span>
          </div>
          <div className="bg-gray-300 rounded-lg h-54 md:h-[calc(45%-0.25rem)] flex items-center justify-center">
            <span className="text-gray-600 font-medium">Portfolio Item 2</span>
          </div>
        </div>

        {/* Top Middle - Split into two sections */}
        <div className="md:col-span-3 md:row-span-1 flex flex-col gap-2">
          <div className="bg-gray-300 rounded-lg h-32 md:h-[calc(45%-0.25rem)] flex items-center justify-center">
            <span className="text-gray-600 font-medium">Portfolio Item 3</span>
          </div>
          <div className="bg-gray-300 rounded-lg h-32 md:h-[calc(55%-0.25rem)] flex items-center justify-center">
            <span className="text-gray-600 font-medium">Portfolio Item 4</span>
          </div>
        </div>

        {/* Top Right - Large Rectangle */}
        <div className="md:col-span-4 md:row-span-1">
          <div className="bg-gray-300 rounded-lg h-32 md:h-full flex items-center justify-center">
            <span className="text-gray-600 font-medium">Portfolio Item 5</span>
          </div>
        </div>

        {/* Bottom Left */}
        <div className="md:col-span-4 md:row-span-1 bg-gray-300 rounded-lg h-32 md:h-full flex items-center justify-center">
          <span className="text-gray-600 font-medium">Portfolio Item 6</span>
        </div>

        {/* Bottom Middle */}
        <div className="md:col-span-4 md:row-span-1 flex flex-col gap-2">
          <div className="bg-gray-300 rounded-lg h-32 md:h-[calc(55%-0.25rem)] flex items-center justify-center">
            <span className="text-gray-600 font-medium">Portfolio Item 7</span>
          </div>
          <div className="bg-gray-300 rounded-lg h-32 md:h-[calc(45%-0.25rem)] flex items-center justify-center">
            <span className="text-gray-600 font-medium">Portfolio Item 8</span>
          </div>
        </div>

        {/* Bottom Right */}
        <div className="md:col-span-3  md:row-span-1 flex flex-col gap-2">
          <div className="bg-gray-300 rounded-lg h-32 md:h-[calc(45%-0.25rem)] flex items-center justify-center">
            <span className="text-gray-600 font-medium">Portfolio Item 9</span>
          </div>
          <div className="bg-gray-300 rounded-lg h-32 md:h-[calc(55%-0.25rem)] flex items-center justify-center">
            <span className="text-gray-600 font-medium">Portfolio Item 10</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
