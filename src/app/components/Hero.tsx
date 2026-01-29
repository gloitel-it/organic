
export default function Hero() {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-32 px-6 md:px-16"
    >
      <div className="absolute inset-0 bg-[#2d5f3f]/60"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-sm mb-4 tracking-wider">OUR JOURNEY</p>
        <h1 className="text-5xl md:text-6xl mb-6">
          Rooted in <span className="text-[#ffd54f]">Nature</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          Get to know the passion, the people, and the sustainable farming practices behind Ganeshadhari Agriculture. We are cultivating a legacy of organic growth.
        </p>
      </div>
    </section>
  );
}
