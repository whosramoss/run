import SplitWrapper from "@ui/SplitWrapper";
import "./Hero.css";

interface HeroProps {
  title: string[],
  subtitle: string[],
  description: string[]
}

export function Hero({ title, subtitle, description }: HeroProps) {
  return (
    <main>
      <section className="hero">
        <p className="content">
          {title.map((value, index) => <SplitWrapper key={index} isHead isLast={index == (title.length - 1)} text={value} />)}
          {subtitle.map((value, index) => <SplitWrapper key={index} text={value} />)}
        </p>
        <div className="image-container">
          <video src="/assets/run_video.mp4" autoPlay muted loop />
          {/* <img src="/assets/photo3.jpg" /> */}
        </div>
        <p className="desc">
          {description.map((value, index) => <SplitWrapper key={index} text={value} />)}
        </p>
      </section>
    </main>
  );
};
