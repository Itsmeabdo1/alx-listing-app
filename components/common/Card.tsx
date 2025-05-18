import { CardProps } from '../../interfaces';

const Card = ({ title, description }: CardProps) => (
  <div className="p-4 border rounded shadow">
    <h2 className="text-xl font-bold">{title}</h2>
    <p>{description}</p>
  </div>
);

export default Card;
