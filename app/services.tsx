import { CardSpotlight } from "@/components/ui/card-spotlight";

const services = [
  { title: "Web Design", desc: "Modern and responsive designs." },
  { title: "Development", desc: "Full-stack scalable web solutions." },
  { title: "Branding", desc: "Identity, visuals, and voice." },
  { title: "Client Satisfaction", desc: "Client satisfaction is our priority." },
];

export default function Services() {
  return (
    <section className="py-20  cursor-pointer ">
      <h2 className="text-3xl font-bold text-center  text-zinc-500">What We Do?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10 max-w-full mx-auto px-4">
        {services.map((s, i) => (
          <CardSpotlight key={i}>
            <div className="z-10 relative">
              <h3 className="text-xl font-bold mb-2 text-white">{s.title}</h3>
              <p className=" text-gray-300">{s.desc}</p>
            </div>
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
}
