import React from 'react';

interface PackageCardProps {
  name: string;
  image: string;
}

export function PackageCard({ name, image }: PackageCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-4">{name}</h3>
        <button className="bg-[#7FD3D2] text-white px-6 py-2 rounded-full w-full hover:bg-[#6BC4C3] transition-colors">
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
}