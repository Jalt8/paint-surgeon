import React from "react";
import ProjectCard from "./ProjectCard";

const PaintingShowcase = () => {
  const projects = [
    {
      title: "Modern Estate Home Refresh",
      description:
        "Transformed this contemporary two-story home with a sophisticated neutral palette.",
      images: ["/img/dimitriospainting_109-1.jpg",],
    },
    {
      title: "Contemporary Luxury Home Transformation",
      description: "Witness the stunning transformation of this modern luxury home, from construction to completion. The project showcases our ability to work with complex architectural features and high-end finishes.",    
      images: [
        "/img/283673989_1398177120646355_3557193164782156199_n.jpg",
        "/img/283297973_3236363650020379_5758649658623751598_n.jpg",
        "/img/283722833_1002462487310226_7798786757021204196_n.jpg",
        "/img/283728291_5023712701080211_6273924163779124166_n.jpg",
      ],
    },
    {
      title: "Exterior Refresh: Modern Home Makeover",
      description: "This project showcases our expertise in transforming modern homes with a fresh coat of paint. We updated the exterior of this contemporary two-story house, enhancing its sleek lines and architectural features.",
      images: [
        "/img/20180306_112448_HDR-2-scaled.webp",
      ],
    },
    {
      title: "Elegant Interior Transformation",
      description: "Experience the remarkable transformation of this contemporary home's interior. Our expert team meticulously painted every surface, from walls to trim, creating a bright and inviting atmosphere.",
      images: [
        "/img/239334229_427328115287114_4316197464432155090_n.jpg",
        "/img/239867987_1044423099701521_2212020178210262453_n.jpg",
        "/img/239146703_333894095100762_692864824062671292_n.jpg",
        "/img/238842755_321319826456068_2302261296511095334_n.jpg",
        "/img/239170473_189553103104139_6873532206553733935_n.jpg",
        "/img/239137568_174189968115279_3371453030295013459_n.jpg",
        "/img/239892049_237802171587928_173819636336671742_n.jpg",
      ],
    },
    {
      title: "Roof and Trim Transformation",
      description: "This before-and-after project demonstrates our skill in refreshing both roof tiles and exterior trim. We updated the dated yellow trim to a clean white, creating a crisp contrast against the newly painted roof tiles.",
      images: ["/img/db736473-03d9-46b1-94db-71dca57503871.jpg",],
    },
    {
      title: "Estate Home Exterior Revitalization",
      description: "We updated the exterior from a dated beige to a modern grey, dramatically improving the home's curb appeal. The refresh included painting the walls, trim, and balcony.",
      images: ["/img/before-and-after-11.jpg",],
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Painting Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              images={project.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaintingShowcase;
