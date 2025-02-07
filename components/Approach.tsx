import React from "react";
import Image from "next/image"; // ✅ Import Next.js Image
import { Button } from "./ui/MovingBorders";

const approachData = [
  {
    id: 1,
    title: "Phase 1: Discovery & Strategy",
    desc: "Every great project starts with a vision. In this phase, I dive deep into understanding the goals, target audience, and core functionalities. Research and strategy shape the foundation for a seamless development journey.",
    thumbnail: "/p1.jpg", // Phase 1 image
  },
  {
    id: 2,
    title: "Phase 2: Design & Development",
    desc: "With a solid plan in place, I bring ideas to life through captivating UI/UX design and robust coding. This phase is all about crafting an engaging and high-performing web experience with attention to detail.",
    thumbnail: "/p12.jpg", // Phase 2 image
  },
  {
    id: 3,
    title: "Phase 3: Testing & Optimization",
    desc: "A project is never truly finished—it evolves. I rigorously test for performance, responsiveness, and security. With continuous optimization and feedback loops, I ensure the final product meets the highest standards.",
    thumbnail: "/p13.jpg", // Phase 3 image
  },
];

const Approach = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading text-center text-3xl md:text-4xl font-bold">
        My <span className="text-purple">Approach</span>
      </h1>

      <div className="w-full mt-12 flex flex-col md:flex-row justify-center gap-6 md:gap-10">
        {approachData.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
              width: "100%", // Full width for mobile
              maxWidth: "350px", // Limit max width on larger screens
              height: "450px", // Adjusted for better proportions
            }}
            className="flex flex-col items-center text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col items-center p-5 gap-4">
              {/* ✅ Next.js Optimized Image */}
              <Image
                src={card.thumbnail}
                alt={card.title}
                width={112} // 28rem * 4 (based on w-28 in Tailwind)
                height={112} // 28rem * 4
                className="object-cover rounded-xl shadow-md border-4 border-purple-500"
                priority={card.id === 1} // ✅ Prioritize first image for performance
              />
              <div>
                <h1 className="text-center text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-center text-gray-300 mt-3 font-medium">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Approach;
