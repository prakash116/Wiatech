import React from "react";
import { motion } from "framer-motion";
import { UserCircleIcon } from "@heroicons/react/24/outline";

function AboutTeam() {
  const teamMembers = [
    { name: "John Doe", profession: "CEO & Founder", img: "" },
    { name: "Jane Smith", profession: "CTO", img: "" },
    { name: "Mike Johnson", profession: "Lead Developer", img: "" },
    { name: "Sarah Wilson", profession: "Design Head", img: "" },
    { name: "David Brown", profession: "Marketing Head", img: "" },
    { name: "Emily Davis", profession: "Project Manager", img: "" },
  ];

  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-blue-600 font-semibold"
        >
          Meet Our Team
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mt-2"
        >
          We've Exclusive Team member <br /> Meet our Professionals
        </motion.h1>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex space-x-4 py-4"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }
          }}
        >
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-80 bg-gray-200 rounded-lg p-4 shadow-md border border-gray-300"
            >
              <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                {member.img ? (
                  <img src={member.img} alt={member.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <UserCircleIcon className="w-20 h-20 text-gray-400" />
                )}
              </div>
              <h1 className="text-xl font-bold text-gray-900 text-center">{member.name}</h1>
              <p className="text-zinc-900 text-center">{member.profession}</p>
              <div className="text-center p-2">
                <button className="py-2 px-4 rounded-md bg-zinc-600 text-white font-semibold shadow shadow-white">Social Icon</button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default React.memo(AboutTeam);