// import video1 from "/soumendaVideo5.mp4";
// import video2 from "/soumendaVideo2.mp4";
// import video3 from "/soumendaVideo4.mp4";

const video1 = "https://res.cloudinary.com/suvankar-adhikary/video/upload/f_auto,q_50/soumendaVideo5_lcx2um.mp4"
const video2 = "https://res.cloudinary.com/suvankar-adhikary/video/upload/f_auto,q_50/soumendaVideo2_hinaih.mp4"
const video3 = "https://res.cloudinary.com/suvankar-adhikary/video/upload/f_auto,q_50/soumendaVideo4_caqyhw.mp4"

const VideoGallery = () => {
  return (
    <div className="bg-white py-12 px-4 text-center">
      {/* Title */}
      <div
        className="flex justify-center items-center mb-10"
        data-aos="fade-up"
      >
        <div className="bg-black w-[10px] h-[32px] sm:h-[36px]"></div>
        <h2 className="bg-[#e64a39] text-white font-bold sm:text-lg px-5 py-1 ">
          Chic Heights: Discover our Signature
        </h2>
      </div>

      {/* Videos */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-6">
        {/* Video 1 */}
        <div
          className="w-full sm:w-[90%] md:w-[400px]"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <video
            src={video1}
            className="w-full h-auto rounded-md shadow-lg"
            muted
            controls
          />
        </div>

        {/* Video 2 */}
        <div
          className="w-full sm:w-[90%] md:w-[400px]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <video
            src={video2}
            className="w-full h-auto rounded-md shadow-lg"
            muted
            controls
          />
        </div>

        {/* Video 3 */}
        <div
          className="w-full sm:w-[90%] md:w-[400px]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <video
            src={video3}
            className="w-full h-auto rounded-md shadow-lg"
            muted
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
