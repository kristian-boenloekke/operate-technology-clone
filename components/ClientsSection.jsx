'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

const clientLogos = [
  "/clients/1.svg",
  "/clients/2.svg",
  "/clients/3.png",
  "/clients/4.png",
  "/clients/5.png",
  "/clients/6.png",
  "/clients/7.png",
  "/clients/8.png",
  "/clients/9.png",
  "/clients/10.png",
  "/clients/11.png",
  "/clients/12.png",
  "/clients/13.png",
  // "/clients/14.png",
];

export default function ClientsSection() {
  // Initialize with first 10 logos
  const [visibleLogos, setVisibleLogos] = useState(clientLogos.slice(0, 10));
  const [fadeIndex, setFadeIndex] = useState(null);
  const [isChanging, setIsChanging] = useState(false);
  const [imageStatuses, setImageStatuses] = useState({});

  // Function to handle image load success
  const handleImageLoad = (logoPath) => {
    setImageStatuses(prev => ({
      ...prev,
      [logoPath]: 'loaded'
    }));
  };

  // Function to handle image load error
  const handleImageError = (logoPath) => {
    setImageStatuses(prev => ({
      ...prev,
      [logoPath]: 'error'
    }));
    console.error(`Failed to load image: ${logoPath}`);
  };

  // Function to rotate logos with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (isChanging) return; // Skip if transition is already in progress
      
      // Choose a random index for replacement (0-9)
      const indexToReplace = Math.floor(Math.random() * 10);
      
      // Start the fade-out process
      setFadeIndex(indexToReplace);
      setIsChanging(true);
      
      // After 500ms (matching fade-out duration), swap the logo
      setTimeout(() => {
        setVisibleLogos(prev => {
          const newLogos = [...prev];
          
          // Current visible logos
          const currentSet = new Set(newLogos);
          
          // Find logos that aren't currently visible
          const remainingLogos = clientLogos.filter(logo => 
            !currentSet.has(logo) && imageStatuses[logo] !== 'error'
          );
          
          // If we have remaining logos, use one of them
          if (remainingLogos.length > 0) {
            // Choose a random logo from the remaining ones
            const randomIndex = Math.floor(Math.random() * remainingLogos.length);
            newLogos[indexToReplace] = remainingLogos[randomIndex];
          }
          
          return newLogos;
        });
        
        // After another 50ms, start the fade-in effect
        setTimeout(() => {
          setFadeIndex(null);
          setIsChanging(false);
        }, 50);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [isChanging, imageStatuses]);

  return (
    <div className="px-10 py-[70px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {visibleLogos.map((logo, index) => {
          const logoIndex = clientLogos.indexOf(logo) + 1;
          return (
            <div
              key={`${logo}-${index}`}
              className="relative flex items-center justify-center bg-white rounded-md h-24 w-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-125"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {imageStatuses[logo] === 'error' ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
                    {`Client ${logoIndex}`}
                  </div>
                ) : (
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                    fadeIndex === index ? "opacity-0" : "opacity-100"
                  }`}>
                    <Image
                      src={logo}
                      alt={`Client Logo ${logoIndex}`}
                      className="max-w-full max-h-full object-contain p-2"
                      fill
                      sizes="(max-width: 768px) 20vw, 150px"
                      onLoad={() => handleImageLoad(logo)}
                      onError={() => handleImageError(logo)}
                      priority={index < 5}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}