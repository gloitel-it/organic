import { Leaf, Users, Lightbulb, Heart } from "lucide-react";

export default function Values() {
  const values = [
    {
      icon: Leaf,
      title: "Integrity",
      description: "We are committed to honest and transparent practices in everything we do."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in building strong relationships with our customers and local community."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new methods and technologies to improve sustainable farming."
    },
    {
      icon: Heart,
      title: "Care",
      description: "We care deeply about the health of our customers and the planet."
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#4caf50] text-sm mb-2 tracking-wider">OUR PRINCIPLES</p>
          <h2 className="text-4xl md:text-5xl text-[#2d5f3f]">Core Values</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#ffd54f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-[#2d5f3f]" />
                </div>
                <h3 className="text-xl mb-3 text-[#2d5f3f]">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
