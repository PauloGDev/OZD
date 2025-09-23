"use client"

import React from "react"
import Image from "next/image"
import { clientsData } from "@/lib/siteData"

const Clients = () => {
  return (
    <div className="relative w-full overflow-hidden bg-transparent py-12">
      <div className="flex items-center">
        {/* Faixa infinita */}
        <div className="animate-marquee flex gap-16 min-w-max">
          {clientsData.clients.concat(clientsData.clients).map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 opacity-65 hover:opacity-100 transition duration-300"
            >
              <Image
                src={client.logo}
                alt={`Logo ${client.name || "Client"}`}
                width={180}
                height={80}
                className="object-contain w-auto h-16"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}

export default Clients
