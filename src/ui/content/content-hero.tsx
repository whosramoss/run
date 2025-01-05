import FadeIn from "@ui/fade-in";
import { HeroModel } from "@models/hero-model";
import { WrapperText } from "@ui/wrapper-text";
import { isVideoFile } from "@utils/utils";

export default function ContentHero({
  title,
  subtitle,
  description,
  src,
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
      <FadeIn className="source z-0 mt-[10%] max-w-full overflow-hidden">
        <Source src={src} />
      </FadeIn>
      <p className="desc">
        {description.map((value, index) => (
          <WrapperText.Split key={index}>{value}</WrapperText.Split>
        ))}
      </p>
    </section>
  );
}

function Source({ src }: { src: string }) {
  const values = { className: "h-auto w-full mt-[-10%]", src };
  return isVideoFile(src) ? (
    <video {...values} autoPlay muted loop />
  ) : (
    <img {...values} />
  );
}
