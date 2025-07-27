import leftQuote from "../assets/left-quote.png";
import rightQuote from "../assets/right-quote.png";
// import review from "../assets/reviewVideo.mp4";

const review = "https://res.cloudinary.com/suvankar-adhikary/video/upload/f_auto,q_50/reviewVideo_kdq1oy.mp4"

const ReviewSection = () => {
  return (
    <div className="bg-[#f3f3f3] min-h-[44rem] lg:min-h-[34rem] flex items-center justify-center px-4 sm:px-6 md:px-12">
      <div className="w-full max-w-6xl flex flex-col justify-center items-center">
        {/* Title */}
        <div
          className="inline-flex relative xl:right-120 mb-20"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <span className="w-[10px] h-[36px] bg-black"></span>
          <span className="bg-[#e64a39] text-white font-bold text-lg px-7 py-1">
            Reviews
          </span>
        </div>

        {/* Review Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full">
          {/* YouTube Video */}
          <div
            className="w-full md:w-[477px] md:h-[270px] rounded-lg overflow-hidden shadow-md flex-shrink-0"
            data-aos="zoom-in"
          >
            <video
              className="w-full h-full"
              src={review}
              title="Review Video"
              controls
              muted
            ></video>
          </div>

          {/* Text with Quotation Images */}
          <div
            className="relative w-full max-w-xl text-center md:text-left"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <img
              src={leftQuote}
              alt="Left quote"
              className="absolute -top-10 -left-5 md:-left-8 w-10 h-10 md:w-10 md:h-10"
              data-aos="fade-in"
              data-aos-delay="400"
            />
            <span className="text-lg md:text-xl leading-relaxed text-gray-800 font-medium">
              The lounge is so aesthetically pleasing that I intentionally limit
              my visits just to preserve the sense of wonder and attachment I
              feel every time I walk in....
            </span>

            <img
              src={rightQuote}
              alt="Right quote"
              className="absolute top-27 -right-4 xl:right-75 xl:top-20 w-10 h-10 md:w-10 md:h-10"
              data-aos="fade-in"
              data-aos-delay="600"
            />
            <div className="font-500 relative top-10  text-gray-400">
              - Mr. Sourav Ghosh, Managing Partner, S.JALAN & Co.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
