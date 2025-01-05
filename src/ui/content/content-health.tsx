import { HealthModel } from "@models/health-model";
import { WrapperText } from "@ui/wrapper-text";

export default function ContentHealth({ content, title }: HealthModel) {
  return (
    <section className="health" id="health">
      <WrapperText.Split isHead>{title}</WrapperText.Split>
      {content.map((contentValue, contentindex) => (
        <p key={contentindex} className={`content content-${contentindex + 1}`}>
          {contentValue.map((value, index) => {
            return <WrapperText.Split key={index}>{value}</WrapperText.Split>;
          })}
        </p>
      ))}
    </section>
  );
}
