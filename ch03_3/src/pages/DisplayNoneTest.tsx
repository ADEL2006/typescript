import { Title } from "../components";

export default function CopyMe() {
  return (
    <section className="mt-4">
      <Title>DisplayNoneTest</Title>
      <div className="mt-4">
        <p className="visible">visibility: visible text</p>
        <p className="invisible">visibility: hidden text</p>
        <p className="hidden">visibility: none text</p>
      </div>
    </section>
  );
}
