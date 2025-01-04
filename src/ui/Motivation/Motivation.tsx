import SplitWrapper from "@ui/SplitWrapper";
import "./Motivation.css";
interface MotivationProps {
  title: string;
  lst: {
    src: string;
    title: string;
    subtitle: string;
  }[]
}

export function Motivation({ title, lst }: MotivationProps) {
  return (
    <section className="motivation">
      <SplitWrapper text={title} isHead />
      {lst.map((value, index) => (
        <div key={index} className={`item-${index + 1}`}>
          <div className="image-container">
            <img src={value.src} className="move link" alt="run_image" />
            <h3>{value.title}</h3>
            <p>{value.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
