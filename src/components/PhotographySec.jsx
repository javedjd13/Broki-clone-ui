import React from "react";

function PhotographySec({
  titleParts,
  description,
  buttonText,
  imageSrc,
  imageAlt,
}) {
  return (
    <section className=" mx-auto px-20 max-lg:px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 bg-[#181a20]">
      {/* Left Side Content */}
      <div className="container ">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6 text-[white]">
          {titleParts.map((part, id) =>
            part.highlight ? (
              <>
                <br />
                <span key={id} className="text-[#2bb89a]">
                  {part.text}
                </span>
              </>
            ) : (
              <React.Fragment key={id}>{part.text}</React.Fragment>
            )
          )}
        </h1>
        <p className="text-base sm:text-lg font-normal text-white/90 mb-8 leading-relaxed">
          {description}
        </p>
        <button
          type="button"
          className="bg-[#2bb89a] font-semibold text-white rounded-lg px-6 py-3 hover:bg-[#27a386] transition-colors duration-300 cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
      <div className="flex-shrink-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-[400px] max-w-full"
          loading="lazy"
          width="400"
          height="500"
        />
      </div>
    </section>
  );
}

export default PhotographySec;
