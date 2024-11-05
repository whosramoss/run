import Link from "next/link";
import "./Footer.css";


interface FooterProps {
  name: string;
  mission: string;
  links: string[];
}

export function Footer({ name, mission, links }: FooterProps) {
  return (
    <footer>
      <div className="name">
        <h1 className="strong">{name}</h1>
      </div>
      <div className="mission">
        <h6>{mission}</h6>
      </div>
      <div className="social">
        {links.slice(0, 3).map((link, index) => <h6 key={index}><Link href={link}>Video</Link></h6>)}
      </div>
      <div className="social-2">
        {links.slice(3).map((link, index) => <h6 key={index}><Link href={link}>Video</Link></h6>)}
      </div>
    </footer>
  );
};
