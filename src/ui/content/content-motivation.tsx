import { MotivationModel } from "@models/motivation-model";
import { WrapperText } from "@ui/wrapper-text";

export default function ContentMotivation({ title, lst }: MotivationModel) {
  return (
    <section className="motivation">
      <WrapperText.Split isHead>{title}</WrapperText.Split>
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
}
