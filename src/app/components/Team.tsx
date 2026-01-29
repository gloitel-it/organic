export default function Team() {
  const teamMembers = [
    {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1628492058844-589eb5dc6a35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBmYXJtZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njk0OTc0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "bg-[#7cb342]"
    },
    {
      name: "Priya Sharma",
      role: "Co-Founder",
      image: "https://images.unsplash.com/photo-1660081509826-a727cb918397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhcm1lciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2OTQ5NzQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "bg-[#f9e4bc]"
    },
    {
      name: "Arjun Singh",
      role: "Farm Manager",
      image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTQ4MTI2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "bg-[#c8e6c9]"
    },
    {
      name: "Kavita Desai",
      role: "Quality Control",
      image: "https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5NDkwNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "bg-[#ffd699]"
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#4caf50] text-sm mb-2 tracking-wider">OUR PEOPLE</p>
          <h2 className="text-4xl md:text-5xl text-[#2d5f3f] mb-4">Meet the Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know the passionate people behind Ganeshadhari who work tirelessly to bring you the freshest organic produce.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className={`${member.bgColor} rounded-3xl p-6 mb-4 overflow-hidden`}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl text-[#2d5f3f] mb-1">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
