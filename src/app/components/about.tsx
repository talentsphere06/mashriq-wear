'use client';
import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Us" },
    { id: "story", label: "Our Story" },
    { id: "mission", label: "Mission" },
    { id: "vision", label: "Vision" },
    { id: "team", label: "Our Team" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="mb-4">
              Welcome to our garments brand — a collective vision brought to life by six determined individuals who share a common dream: to change the way Pakistan shops for fashion. Our company was born out of the need for a better, more trustworthy online shopping experience. We know that clothing is not just fabric stitched together; it’s about style, identity, confidence, and culture. Our purpose is to make sure that when you wear our garments, you feel comfortable, confident, and proud.
            </p>
            <p className="mb-4">
              Pakistan is a country with a rich heritage of textiles and craftsmanship, yet online shoppers often face disappointment when it comes to reliability. Many customers encounter issues such as late deliveries, lack of transparency, poor product quality, and complicated return processes. We wanted to create a solution that not only delivers products but also delivers peace of mind. That’s why our promise is built around three simple but powerful pillars: <strong>fast delivery within 48 hours</strong>, <strong>Cash on Delivery (COD) for trust</strong>, and a <strong>clear and easy return policy</strong>. These commitments define us and set us apart from the crowd.
            </p>
            <p className="mb-4">
              Our garments are carefully selected and designed to meet the diverse needs of people across Pakistan. Whether you are a student looking for casual wear, a professional who needs office-appropriate clothing, or someone preparing for a special event, our collections are built with you in mind. We believe fashion should not be restricted to a certain class or lifestyle; it should be accessible to everyone. That’s why we focus on affordability without ever compromising on quality. Each fabric, stitch, and design is inspected with precision before reaching your hands.
            </p>
            <p className="mb-4">
              What makes us truly unique is our team of six. Each member contributes a different strength: from innovative design ideas to strong logistics planning, from technology integration to customer care excellence. Together, we are more than just colleagues; we are a family driven by passion and teamwork. This synergy is what enables us to handle challenges quickly and deliver on our promises without fail.
            </p>
            <p className="mb-4">
              At the heart of our work lies a strong connection with Pakistan’s culture. We proudly incorporate local traditions into modern styles so that our clothing feels both contemporary and familiar. We work closely with local suppliers and artisans, supporting the economy while bringing the best of global fashion trends to our customers. By doing this, we create garments that resonate with both heritage and innovation.
            </p>
            <p className="mb-4">
              Our philosophy goes beyond selling. We want to create long-term relationships with our customers. Every interaction, from browsing our website to receiving your order, is designed to be smooth, transparent, and memorable. Our dedicated customer support ensures that if you ever face an issue, it will be resolved quickly and respectfully. Your trust is our most valuable asset, and we continuously strive to honor it with honesty and consistency.
            </p>
            <p className="mb-4">
              In addition, we recognize that fashion is constantly evolving. That’s why we keep our collections dynamic and refreshing. We regularly update our product lines, ensuring our customers always find something new and exciting. Whether it’s seasonal collections or timeless essentials, our goal is to provide clothing that fits seamlessly into your lifestyle.
            </p>
            <p className="mb-4">
              Looking towards the future, we see ourselves not just as a brand but as pioneers of reliable e-commerce in Pakistan. We envision a platform where online shopping is not a risk but a joy, where every customer feels valued, and where every product tells a story of care and quality. We aim to expand our reach, introduce innovative services, and continuously raise industry standards for trust, quality, and delivery.
            </p>
            <p className="mb-4">
              Our brand is more than a store; it is a community. A community where customers, designers, and innovators come together to celebrate fashion in its truest form. With each passing day, we aspire to inspire. Inspire confidence, inspire trust, and inspire change in how Pakistan shops. This is our story, this is our mission, and above all, this is who we are.
            </p>
          </div>
        );
      case "story":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p>
              Our journey began with six friends passionate about fashion and
              entrepreneurship. We noticed customers in Pakistan struggled with
              late deliveries, low trust, and poor quality products. We decided
              to solve these problems with speed, reliability, and style.
            </p>
          </div>
        );
      case "mission":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              Our mission is simple yet powerful: to redefine online garment shopping in Pakistan by providing
              high-quality fashion with trust, speed, and reliability. We believe that fashion should not be a
              stressful experience but a joyful one, where customers feel valued and taken care of from the moment
              they visit our website until the time they wear their selected outfits with confidence.
            </p>
            <p className="mb-4">
              We want every customer to feel confident when ordering from us. That’s why we focus on core principles
              that guide everything we do:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Delivering every order within 48 hours to ensure speed and reliability.</li>
              <li>Offering Cash on Delivery for secure and trustworthy payments.</li>
              <li>Providing a simple, hassle-free return and exchange policy to keep customers at ease.</li>
              <li>Bringing affordable, stylish, and comfortable clothing that caters to diverse tastes and lifestyles.</li>
            </ul>
            <p className="mb-4">
              Our mission goes beyond just delivering clothes; it’s about transforming the way people perceive
              e-commerce in Pakistan. We are determined to build trust in a market where customers often hesitate
              due to delayed deliveries or low-quality products. By combining professionalism, dedication, and a
              customer-first approach, we aim to set a new benchmark for online garment shopping in the country.
            </p>
            <p>
              Ultimately, our mission is to make online shopping easy, enjoyable, and trustworthy for everyone
              across Pakistan, ensuring that every order is a delightful experience from start to finish.
            </p>
          </div>
        );
      case "vision":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="mb-4">
              Our vision is to become Pakistan’s most trusted and loved online fashion brand. We don’t just see
              ourselves as a clothing provider, but as a platform that inspires confidence, empowers individuality,
              and connects people through the universal language of fashion. Fashion for us is more than fabric;
              it’s a lifestyle, an expression, and a form of identity.
            </p>
            <p className="mb-4">
              We dream of building a vibrant community where fashion is not limited to trends but becomes a
              representation of personal style, culture, and values. To achieve this, we aim to:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Expand our services across every city and town in Pakistan, making quality fashion accessible to all.</li>
              <li>Introduce innovative collections for men, women, and children that reflect both modern and traditional aesthetics.</li>
              <li>Set new standards of speed, trust, and customer satisfaction in Pakistan’s e-commerce industry.</li>
              <li>Empower local craftsmanship while keeping international fashion trends in mind.</li>
              <li>Create a seamless digital experience that merges technology with style.</li>
            </ul>
            <p className="mb-4">
              We envision ourselves growing into a leading fashion platform, known not only for clothing but also
              for our values, reliability, and commitment to customers. We want to be the brand that people recommend
              without hesitation, a household name synonymous with trust and elegance.
            </p>
            <p>
              In the long run, our vision is to transform the e-commerce landscape of Pakistan by proving that local
              brands can deliver international-level quality, speed, and professionalism while staying true to our
              roots and community.
            </p>
          </div>
        );

        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p>
              To become Pakistan’s most trusted and loved online fashion brand,
              expanding our services nationwide while setting new standards of
              quality and speed.
            </p>
          </div>
        );
      case "team":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p>
              We are six creative individuals combining skills from fashion
              design, logistics, technology, and customer care to deliver the
              best shopping experience.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-4 gap-6 p-6 min-h-screen">
      {/* Left Menu */}
      <div className="col-span-1 bg-gray-100 rounded-2xl shadow p-4">
        <ul className="space-y-3">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={`w-full text-left p-2 rounded-lg transition-colors duration-200 font-medium
                ${
                  activeTab === tab.id
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-800 hover:bg-green-100"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="col-span-3 bg-white rounded-2xl shadow p-6">
        {renderContent()}
      </div>
    </div>
  );
}
