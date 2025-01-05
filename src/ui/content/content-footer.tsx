import { FooterModel } from "@models/footer-model";
import Link from "next/link";

export default function ContentFooter({ name, mission, links }: FooterModel) {
  return (
    <footer>
      <div className="name">
        <h1 className="strong">{name}</h1>
      </div>
      <div className="mission">
        <h6>{mission}</h6>
      </div>
      <div className="social">
        {links.slice(0, 3).map((link, index) => (
          <h6 key={index}>
            <Link href={link}>Video</Link>
          </h6>
        ))}
      </div>
      <div className="social-2">
        {links.slice(3).map((link, index) => (
          <h6 key={index}>
            <Link href={link}>Video</Link>
          </h6>
        ))}
      </div>
    </footer>
  );
}
