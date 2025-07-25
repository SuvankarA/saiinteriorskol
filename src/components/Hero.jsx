import heroImage from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section
      className="w-full h-[90vh] bg-cover bg-center relative mt-[80px]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute bottom-10 right-10 bg-white bg-opacity-90 p-6 rounded-lg w-[400px]">
        <h2 className="text-lg font-semibold mb-2 text-gray-900">
          Lorem Ipsum is simply dummy text of the asf
        </h2>
        <p className="text-gray-700 text-sm mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm hover:bg-orange-600">
          Button
        </button>
      </div>
    </section>
  );
};

export default Hero;
