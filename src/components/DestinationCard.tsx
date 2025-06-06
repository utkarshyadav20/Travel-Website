import React from 'react';

interface DestinationCardProps {
  name: string;
  price: string;
  image: string;
}

export function DestinationCard({ name, price, image }: DestinationCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="flex justify-between items-center p-4">
        <h3 className="font-bold text-lg text-cyan-600">{name}</h3>
        <div className="flex items-center"> 
          <p className="text-gray-700 mr-1">Starting from ₹</p> 
          <p className="font-bold text-lg text-cyan-600">{price}</p>
        </div>
      </div>
    </div>
  );
}