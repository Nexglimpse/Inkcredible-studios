import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import actual from "../assets/images/actual-image.jpeg";
import medium from "../assets/images/medium-image.png";
import complex from "../assets/images/complex-image.png";

export default function Complexity() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Complexity items array
  const complexityItems = [
    {
      image: actual,
      alt: "Original",
      title: "Original",
    },
    {
      image: medium,
      alt: "Standard",
      title: "Standard",
    },
    {
      image: complex,
      alt: "Complex",
      title: "Complex",
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
      prevIndex === 0 ? complexityItems.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === complexityItems.length - 1 ? 0 : prevIndex + 1,
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
    <section id="complexity" aria-labelledby="complexity-heading">
      <div className="px-4.5 md:px-10 xl:px-15 mt-15 md:mt-20 lg:mt-30">
        {/* Header */}
        <header className="text-center mb-8">
          <p className="text-center text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] gilroy-sb leading-snug text-orange-500">
            WHY COMPLEXITY MATTERS
          </p>
          <h2
            id="complexity-heading"
            className="text-center text-[26px] md:text-[34px] lg:text-[38px] xl:text-[40px] mt-3 gilroy-b leading-snug"
          >
            Exploring Standard and Complex Design Work
          </h2>
          <p className="text-black text-md max-w-3xl mx-auto md:text-[18px] lg:text-lg xl:text-xl gilroy-m mt-2 text-center">
            Discover how added detail, creativity, and refinement can elevate
            your visuals and bring your ideas to life with greater impact.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Original */}
          <div
            className="bg-gray-300 rounded-lg h-80 md:h-96 flex items-center justify-center cursor-pointer overflow-hidden group relative"
            onClick={() => openLightbox(0)}
          >
            <img
              src={actual}
              className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Original"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-[23px] gilroy-sb">Original</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Standard */}
          <div
            className="bg-gray-300 rounded-lg h-80 md:h-96 flex items-center justify-center cursor-pointer overflow-hidden group relative"
            onClick={() => openLightbox(1)}
          >
            <img
              src={medium}
              className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Standard"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-[23px] gilroy-sb">Standard</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Complex */}
          <div
            className="bg-gray-300 rounded-lg h-80 md:h-96 flex items-center justify-center cursor-pointer overflow-hidden group relative"
            onClick={() => openLightbox(2)}
          >
            <img
              src={complex}
              className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Complex"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-[23px] gilroy-sb">Complex</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm bg-opacity-95 z-50 flex items-center justify-center"
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
            className="flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-7xl max-h-[85vh] mx-4">
              <img
                src={complexityItems[currentIndex].image}
                alt={complexityItems[currentIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            </div>

            {/* Title and Counter */}
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-white text-xl md:text-2xl gilroy-sb">
                {complexityItems[currentIndex].title}
              </h2>
              <div className="bg-white md:bg-black bg-opacity-50 text-black md:text-white px-4 py-2 rounded-full text-sm">
                {currentIndex + 1} / {complexityItems.length}
              </div>
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
}
