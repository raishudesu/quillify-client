import Cards from "./Cards";

const Features = () => {
  const featureList = [
    {
      icon: "🧑‍💻",
      characteristic: "Developer-Centric",
      description:
        "Caters exclusively to the needs and interests of developers and tech enthusiasts.",
    },
    {
      icon: "✒️",
      characteristic: "Blogging Platform",
      description:
        "A dynamic platform for creating and sharing coding and tech-related articles and tutorials.",
    },
    {
      icon: "🏬",
      characteristic: "Community Building",
      description:
        "Fosters a strong sense of community among developers, encouraging collaboration and knowledge-sharing.",
    },
    {
      icon: "📒",
      characteristic: "Educational",
      description:
        "Provides valuable educational resources, including tutorials and best practices, to help developers continuously improve their skills.",
    },
    {
      icon: "✨",
      characteristic: "Inspiration",
      description:
        "Offers inspiration and insights on innovative coding approaches and industry trends.",
    },
    {
      icon: "💻",
      characteristic: "Engagement",
      description:
        "Encourages active engagement through comments, discussions, and feedback on blog posts, fostering a lively developer community.",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center text-blue-gray-900 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2">
        {featureList.map(({ icon, characteristic, description }, index) => (
          <Cards
            icon={icon}
            characteristic={characteristic}
            description={description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
