import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Import thumbnail images
import T1 from "../assets/images/portfolio/t1.jpg";
import T2 from "../assets/images/portfolio/t2.jpg";
import T3 from "../assets/images/portfolio/t3.png";
import T4 from "../assets/images/portfolio/t4.jpg";
import T5 from "../assets/images/portfolio/t5.png";
import T6 from "../assets/images/portfolio/t6.png";
import T7 from "../assets/images/portfolio/t7.jpg";
import T8 from "../assets/images/portfolio/t8.png";
import T9 from "../assets/images/portfolio/t9.jpg";
import T10 from "../assets/images/portfolio/t10.jpg";

// Import full-size images
import P1 from "../assets/images/portfolio/p1.jpg";
import P2 from "../assets/images/portfolio/p2.jpg";
import P3 from "../assets/images/portfolio/p3.jpg";
import P4 from "../assets/images/portfolio/p4.jpg";
import P5 from "../assets/images/portfolio/p5.jpg";
import P6 from "../assets/images/portfolio/p6.jpg";
import P7 from "../assets/images/portfolio/p7.jpg";
import P8 from "../assets/images/portfolio/p8.jpg";
import P9 from "../assets/images/portfolio/p9.jpg";
import P10 from "../assets/images/portfolio/p10.jpg";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Portfolio items array mapping thumbnails to full images
  const portfolioItems = [
    {
      thumbnail: T1,
      fullImage: P1,
      alt: "Portfolio Item 1",
      title: "Vector to Production Ready",
    },
    {
      thumbnail: T2,
      fullImage: P2,
      alt: "Portfolio Item 2",
      title: "Vector to Production Ready",
    },
    {
      thumbnail: T5,
      fullImage: P5,
      alt: "Portfolio Item 5",
      title: "Vector Conversion",
    },
    {
      thumbnail: T6,
      fullImage: P6,
      alt: "Portfolio Item 6",
      title: "Vector to Production Ready",
    },
    {
      thumbnail: T4,
      fullImage: P4,
      alt: "Portfolio Item 4",
      title: "Vector Conversion",
    },
    {
      thumbnail: T7,
      fullImage: P7,
      alt: "Portfolio Item 7",
      title: "Template Placement",
    },
    {
      thumbnail: T8,
      fullImage: P8,
      alt: "Portfolio Item 8",
      title: "Vector to Production Ready",
    },
    {
      thumbnail: T9,
      fullImage: P9,
      alt: "Portfolio Item 9",
      title: "Vector Lineart Conversion",
    },
    {
      thumbnail: T3,
      fullImage: P3,
      alt: "Portfolio Item 3",
      title: "Template Placement",
    },
    {
      thumbnail: T10,
      fullImage: P10,
      alt: "Portfolio Item 10",
      title: "Vector Lineart Conversion",
    },
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <section
      className="mt-15 md:mt-20 lg:mt-30 px-4.5 md:px-10 xl:px-15"
      id="portfolio"
    >
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
          <div
            className="bg-gray-300 rounded-lg h-54 md:h-[calc(55%-0.25rem)] flex items-center justify-center cursor-pointer overflow-hidden group relative"
            onClick={() => openLightbox(0)}
          >
            <img
              src={T1}
              className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Portfolio thumbnail 1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-[23px] gilroy-sb">
                    {portfolioItems[0].title}
                  </h3>
                  <ArrowRight size={30} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-gray-300 rounded-lg h-54 md:h-[calc(45%-0.25rem)] flex items-center justify-center cursor-pointer overflow-hidden group relative"
            onClick={() => openLightbox(1)}
          >
            <img
              src={T2}
              className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Portfolio thumbnail 2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-[23px] gilroy-sb">
                    {portfolioItems[1].title}
                  </h3>
                  <ArrowRight size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Middle - Split into two sections */}
        <div className="md:col-span-3 md:row-span-1 flex flex-col gap-2">
          <div
            className="bg-gray-300 rounded-lg h-54 md:h-[calc(45%-0.25rem)] flex items-center justify-center cursor-pointer overflow-hidden group relative"
            onClick={() => openLightbox(2)}
          >
            <img
              src={T5}
              className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Portfolio thumbnail 5"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-[23px] gilroy-sb">
                    {portfolioItems[2].title}
                  </h3>
                  <ArrowRight size={30} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-gray-300 rounded-lg h-54 md:h-[calc(55%-0.25rem)] flex items-center justify-center cursor-pointer overflow-hidden group relative"
            onClick={() => openLightbox(3)}
          >
            <img
              src={T6}
              className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Portfolio thumbnail 6"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-[23px] gilroy-sb">
                    {portfolioItems[3].title}
                  </h3>
                  <ArrowRight size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Right - Large Rectangle */}
        <div className="md:col-span-4 md:row-span-1">
          <div
            className="bg-gray-300 rounded-lg h-54 md:h-full flex items-center justify-center cursor-pointer overflow-hidden group relative"
            onClick={() => openLightbox(4)}
          >
            <img
              src={T4}
              className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Portfolio thumbnail 4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-[23px] gilroy-sb">
                    {portfolioItems[4].title}
                  </h3>
                  <ArrowRight size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left */}
        <div
          className="md:col-span-4 md:row-span-1 bg-gray-300 rounded-lg h-54 md:h-full flex items-center justify-center cursor-pointer overflow-hidden group relative"
          onClick={() => openLightbox(5)}
        >
          <img
            src={T7}
            className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
            alt="Portfolio thumbnail 7"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-[23px] gilroy-sb">
                  {portfolioItems[5].title}
                </h3>
                <ArrowRight size={30} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Middle */}
        <div className="md:col-span-4 md:row-span-1 flex flex-col gap-2">
          <div
            className="bg-gray-300 rounded-lg h-54 md:h-[calc(55%-0.25rem)] flex items-center justify-center cursor-pointer overflow-hidden group relative"
            onClick={() => openLightbox(6)}
          >
            <img
              src={T8}
              className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Portfolio thumbnail 8"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-[23px] gilroy-sb">
                    {portfolioItems[6].title}
                  </h3>
                  <ArrowRight size={30} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-gray-300 rounded-lg h-54 md:h-[calc(45%-0.25rem)] flex items-center justify-center cursor-pointer overflow-hidden group relative"
            onClick={() => openLightbox(7)}
          >
            <img
              src={T9}
              className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Portfolio thumbnail 9"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-[23px] gilroy-sb">
                    {portfolioItems[7].title}
                  </h3>
                  <ArrowRight size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right */}
        <div className="md:col-span-3 md:row-span-1 flex flex-col gap-2">
          <div
            className="bg-gray-300 rounded-lg h-54 md:h-[calc(45%-0.25rem)] flex items-center justify-center cursor-pointer overflow-hidden group relative"
            onClick={() => openLightbox(8)}
          >
            <img
              src={T3}
              className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Portfolio thumbnail 3"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-[23px] gilroy-sb">
                    {portfolioItems[8].title}
                  </h3>
                  <ArrowRight size={30} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-gray-300 rounded-lg h-54 md:h-[calc(55%-0.25rem)] flex items-center justify-center cursor-pointer overflow-hidden group relative"
            onClick={() => openLightbox(9)}
          >
            <img
              src={T10}
              className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Portfolio thumbnail 10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-[23px] gilroy-sb">
                    {portfolioItems[9].title}
                  </h3>
                  <ArrowRight size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50 p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-7xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={portfolioItems[currentIndex].fullImage}
              alt={portfolioItems[currentIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />

            {/* Image Counter */}
            <div className="absolute -bottom-12 md:bottom-4 left-1/2 transform -translate-x-1/2 bg-white md:bg-black bg-opacity-50 text-black md:text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {portfolioItems.length}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50 p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
