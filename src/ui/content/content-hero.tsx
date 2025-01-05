import { HeroModel } from "@models/hero-model";
import { WrapperText } from "@ui/wrapper-text";

export default function ContentHero({
  title,
  subtitle,
  description,
}: HeroModel) {
  return (
    <section className="hero">
      <p className="content">
        {title.map((value, index) => (
          <WrapperText.Split
            key={index}
            isHead
            isLast={index == title.length - 1}
          >
            {value}
          </WrapperText.Split>
        ))}
        {subtitle.map((value, index) => (
          <WrapperText.Split key={index}>{value}</WrapperText.Split>
        ))}
      </p>
      <div className="image-container">
        <video src="/assets/run_video.mp4" autoPlay muted loop />
        {/* <img src="/assets/photo3.jpg" /> */}
      </div>
      <p className="desc">
        {description.map((value, index) => (
          <WrapperText.Split key={index}>{value}</WrapperText.Split>
        ))}
      </p>
    </section>
  );
}
