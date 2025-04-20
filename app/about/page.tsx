
"use client";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-800 dark:from-blue-400 dark:via-white dark:to-purple-300">
            We build amazing websites <br /> at <Cover>lightning speed</Cover>
          </h1>
          <p className="text-lg md:text-xl text-center mt-6 text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Transforming visions into exceptional digital experiences since 2015. 
            We combine cutting-edge technology with creative design to deliver 
            websites that drive results.
          </p>
        </section>

        {/* Company Overview */}
        <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-blue-300">Our Story</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Founded with a passion for digital excellence, our agency has grown from a small team of 
              dedicated developers to a full-service digital powerhouse. We've helped over 200 businesses 
              transform their online presence and achieve their goals.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              Our approach combines technical expertise with creative innovation, ensuring that every 
              project we deliver not only looks stunning but performs exceptionally. We believe in 
              building long-term partnerships with our clients, becoming an extension of their team.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/30 to-transparent z-10 rounded-lg"></div>
            <div className="h-full w-full relative bg-neutral-200 dark:bg-neutral-800 rounded-lg">
              <Image
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our workspace"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20 py-16 px-4 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 rounded-xl">
          <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-blue-300">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
                icon: "🚀",
                gradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
              },
              {
                title: "Quality",
                description: "We never compromise on quality, ensuring every pixel and line of code meets our high standards.",
                icon: "✨",
                gradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
              },
              {
                title: "Partnership",
                description: "We view ourselves as an extension of your team, committed to your long-term success.",
                icon: "🤝",
                gradient: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br ${value.gradient}`}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-blue-300">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Custom websites built with the latest technologies for optimal performance and user experience.",
                gradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
              },
              {
                title: "UI/UX Design",
                description: "User-centered design that balances aesthetics with functionality to create engaging experiences.",
                gradient: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20"
              },
              {
                title: "E-commerce Solutions",
                description: "Scalable online stores that drive conversions and provide seamless shopping experiences.",
                gradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
              },
              {
                title: "Mobile Applications",
                description: "Native and cross-platform mobile apps that extend your digital presence to all devices.",
                gradient: "from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20"
              },
              {
                title: "Digital Marketing",
                description: "Strategic campaigns that increase visibility and drive qualified traffic to your digital properties.",
                gradient: "from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20"
              },
              {
                title: "Maintenance & Support",
                description: "Ongoing technical support and updates to keep your digital assets secure and performing optimally.",
                gradient: "from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20"
              }
            ].map((service, index) => (
              <div key={index} className={`p-6 rounded-lg bg-gradient-to-br ${service.gradient} hover:shadow-md transition-all duration-300`}>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20 py-16 px-4 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 rounded-xl">
          <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-blue-300">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Johnson", role: "Founder & CEO", img: "https://images.deepai.org/art-image/5dcca3a0355f43c2a47e6d69ea1c0e26/lego-style-assasin-creed.jpg" },
              { name: "Sarah Chen", role: "Creative Director", img: "https://images.deepai.org/art-image/c1ac7b6ee18a4e0aa6fe8a2b3aae7b01/lego-style-samurai.jpg" },
              { name: "Michael Rodriguez", role: "Lead Developer", img: "https://images.deepai.org/art-image/7701ccf89036414ba53b1eed2de49015/lego-style-spiderman.jpg" },
              { name: "Emma Wilson", role: "UX Strategist", img: "https://images.deepai.org/art-image/4b8745ead52a4f52b17783af8833b777/lego-style-cef05d-thumb.jpg" }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden shadow-md relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 px-6 rounded-xl bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-blue-300">Ready to transform your digital presence?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-neutral-700 dark:text-neutral-300">
            Let's discuss how we can help you achieve your business goals with a custom digital strategy.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-neutral-900 to-black dark:from-white dark:to-blue-300 text-white dark:text-black font-medium rounded-md hover:opacity-90 transition-all duration-300 hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}
