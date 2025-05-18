import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => (
  <div className="border rounded-lg shadow-md p-4">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-2" />
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;
