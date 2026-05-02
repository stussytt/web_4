import expectationsData from "../mockData/expectationsData";

export const ExpectationsLeft = ({ expectationsImage: { src, alt } }) => {
  return (
    <div className="expectations__left">
      <img src={src} alt={alt} />
    </div>
  );
};

export const ExpectationsRight = ({
  expectationsContent: { label, header, text, cta },
}) => {
  return (
    <div className="expectations__right">
      <a href={cta.href} className="label__cta">
        {label}
      </a>
      <h2 className="expectations_header">{header}</h2>
      <p className="expectations_content">{text}</p>
      <a href={cta.href} className="right__cta">
        {cta.title}
      </a>
    </div>
  );
};

const Expectations = () => {
  const { expectationsImage, expectationsContent } = expectationsData;

  return (
    <section className="expectations">
      <ExpectationsLeft expectationsImage={expectationsImage} />
      <ExpectationsRight expectationsContent={expectationsContent} />
    </section>
  );
};

export default Expectations;
