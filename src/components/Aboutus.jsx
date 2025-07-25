import founderImage from "../assets/soumenda4.jpg"; // Update path if needed
import facebookIcon from "../assets/icons/facebook.png";
import instagramIcon from "../assets/icons/instagram.png";
import linkedinIcon from "../assets/icons/linkedin.png";

const Aboutus = () => {
  return (
    <div className="bg-[#f2efed] min-h-[80vh] py-10 px-4 sm:px-8 md:px-20 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div data-aos="fade-right">
          {/* Section Title */}
          <div className="inline-flex items-center mb-6">
            <span className="h-[36px] w-[10px] bg-black" />
            <span className="bg-[#e64a39] text-white font-bold text-lg sm:text-xl px-4 py-1 shadow-sm">
              About Us
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-800 font-medium text-[16px] sm:text-[17px] leading-7 tracking-normal text-justify">
            Soumen Karmakar, founder of Sai Interiors, brings over a decade of
            design expertise shaped by a deep understanding of aesthetics,
            fashion, and culture. He has consulted on more than 410 design
            projects and successfully executed over 50 pan-India interior
            transformations, with a strong base in Kolkata.
            <br />
            <br />
            {/* Academically, he is a certified interior designer from Srimati
            Techno Institute, holds a diploma in Multimedia & Graphic Design
            from APTEC, and has honed his artistic vision at the Indian
            Institute of Fine Arts.
            <br />
            <br /> */}
            His approach blends functionality with elegance, drawing from
            India’s rich cultural heritage while staying aligned with
            contemporary trends. Whether residential, commercial, or bespoke,
            his work reflects personality, purpose, and poise, turning every
            space into one that feels intuitively right.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-col items-center" data-aos="zoom-in">
          <img
            src={founderImage}
            alt="Soumen Karmakar"
            className="xl:relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] xl:top-13 object-cover rounded-full shadow-xl/30"
          />
          <div className="mt-6 relative xl:top-15 xl:left-3 flex space-x-4">
            <a
              href="https://www.facebook.com/spacesolutiton.soumen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#f2efed] rounded-full shadow hover:shadow-lg transition"
            >
              <img src={facebookIcon} alt="Facebook" className="w-12 h-12" />
            </a>
            <a
              href="https://www.instagram.com/saiinteriorkol?igsh=MWQ2anRsdHJ4aXExZA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#f2efed] rounded-full shadow hover:shadow-lg transition"
            >
              <img src={instagramIcon} alt="Instagram" className="w-12 h-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/soumen-karmakar-sm90/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#f2efed] rounded-full shadow hover:shadow-lg transition"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-12 h-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
