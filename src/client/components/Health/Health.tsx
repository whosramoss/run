import SplitWrapper from "@components/SplitWrapper";
import './Health.css';

interface HealthProps {
  title: string;
  content: string[][]
}

export function Health({ content, title }: HealthProps) {
  return (
    <section className="health" id="health">
      <SplitWrapper text={title} isHead />
      {content.map((contentValue, contentindex) => (
        <p key={contentindex} className={`content content-${contentindex + 1}`}>
          {contentValue.map((textValue, textIndex) => <SplitWrapper key={textIndex} text={textValue} />)}
        </p>
      ))}
    </section>
  );
};
