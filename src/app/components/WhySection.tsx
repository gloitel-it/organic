export default function WhySection() {
  return (
    <section className="bg-[#fef8f0] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1763856957026-a74ab4f05891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHBsYW50aW5nJTIwc2VlZGxpbmclMjBzb2lsfGVufDF8fHx8MTc2OTQ5NzQyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Planting" 
            className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-[#4caf50] text-sm mb-2 tracking-wider">THE DIFFERENCE</p>
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2d5f3f]">
            Why Ganeshadhari Agriculture?
          </h2>
          
          <p className="text-gray-700 mb-4 leading-relaxed">
            We don't just grow food; we nurture our land. We believe that a focus on healthy soil leads to thriving crops and, ultimately, nutritious produce. Our dedication to organic farming means that every vegetable and fruit is grown with love and care, free from harmful chemicals.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            What sets us apart is our commitment to organic principles. From seed to harvest, every step of our process is carefully managed to ensure the highest quality. We embrace crop rotation, composting, and natural pest control methods to keep our soil and crops healthy.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md flex-1 min-w-[140px]">
              <p className="text-3xl text-[#4caf50] mb-1">100%</p>
              <p className="text-sm text-gray-600">Organic Products</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md flex-1 min-w-[140px]">
              <p className="text-3xl text-[#4caf50] mb-1">500+</p>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md flex-1 min-w-[140px]">
              <p className="text-3xl text-[#4caf50] mb-1">15+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
