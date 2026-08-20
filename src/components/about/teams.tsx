'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { GetTeam } from "@/api";

interface TeamMember {
  _id: string;
  name: string;
  position: string;
  email: string;
  number: string;
  img: string;
}

export default function Team() {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await GetTeam();
        const members = Array.isArray(res) ? res : res.data;
        setTeam(members || []);
      } catch (err) {
        console.error("Failed to load team members:", err);
        setTeam([]);
      }
    };
    fetchTeam();
  }, []);

  return (
    <div className="plr maxi space-y-9">
      <p className="heading3 text-center">Meet Our Team</p>
      
      <div className="grid lg:grid-cols-4 gap-4">
        {team.map((member, index) => (
          <div key={member._id || index} className="space-y-6 group">
            <div className="h-[405px] w-full bg-[#F6F6F6] rounded-2xl overflow-hidden">
              <Image
                src={member.img}
                alt={member.name}
                width={500}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top group-hover:scale-105 duration-150 ease-in-out transition-transform"
              />
            </div>
            <div className="space-y-2">
              <p className="heading">{member.name}</p>
              <p className="grey font-semibold">{member.position}</p>
              <p className="grey font-medium">{member.email}</p>
              <span>{member.number}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
