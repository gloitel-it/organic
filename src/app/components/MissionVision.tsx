import { Leaf, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-[#2d5f3f] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="text-white">
          <div className="w-16 h-16 bg-[#ffd54f] rounded-full flex items-center justify-center mb-6">
            <Leaf className="w-8 h-8 text-[#2d5f3f]" />
          </div>
          <h3 className="text-3xl mb-4">Our Mission</h3>
          <p className="text-gray-200 leading-relaxed">
            To promote urban sustainability by producing 100% fresh food and changing the food chain to offer healthier, more wholesome produce. We are committed to educating the community about organic farming and promoting sustainable living.
          </p>
        </div>

        <div className="text-white">
          <div className="w-16 h-16 bg-[#4caf50] rounded-full flex items-center justify-center mb-6">
            <Eye className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl mb-4">Our Vision</h3>
          <p className="text-gray-200 leading-relaxed">
            A world where all food is 100% Organically grown, fresh, ethical, and nutritious. We envision a future where sustainable agriculture is the norm, fostering a healthier planet and population. We strive towards a future where everyone has access to healthy and organic foods.
          </p>
        </div>
      </div>
    </section>
  );
}
