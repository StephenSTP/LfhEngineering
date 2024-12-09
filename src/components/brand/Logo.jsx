import { Link } from 'react-router-dom';
import Image from '../ui/Image';

export default function Logo({ className }) {
  return (
    <Link to="/" className={className}>
      <Image
        src="./logo.png"
        alt="LFH Engineering Logo"
        className="h-8 w-auto"
      />
    </Link>
  );
}