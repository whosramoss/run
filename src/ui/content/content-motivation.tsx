import { MotivationModel } from "@models/motivation-model";
import { WrapperText } from "@ui/wrapper-text";

export default function ContentMotivation({ title, lst }: MotivationModel) {
  return (
    <section className="motivation">
      <WrapperText.Split isHead>{title}</WrapperText.Split>
      {lst.map((value, index) => (
        <div key={index} className={`item-${index + 1}`}>
          <div className="max-w-full overflow-hidden ">
            <img src={value.src} className="h-auto w-full w-[125%] will-change-transform move link" alt="run_image" />
            <h3 className="uppercase text-2xl font-bold mt-2">{value.title}</h3>
            <p className="mt-2">{value.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
