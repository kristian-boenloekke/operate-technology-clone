export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Better Readability */}
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        {/* Content on Top of Video */}
        <div className="absolute inset-0 flex flex-col lg:items-center justify-center text-white text-center px-6 z-10">
          <h1 className="text-[54px] lg:text-[63px] font-bold flex flex-col text-left lg:text-center">Behov først. <span>Dernæst teknik.</span></h1>
          <p className="text-[18px] mt-4 max-w-2xl text-left lg:text-center lg:text-[21.6px]">
            Seriøse og solide webløsninger, der understøtter jeres kommunikation
          </p>
        </div>
      </section>
    );
  }
  