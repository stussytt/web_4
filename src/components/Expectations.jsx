import expectationsData from "../mockData/expectationsData";

export const FeatureImage = ({ featureImageData }) => {
  const { src, alt } = featureImageData;
  return (
    <div className="expectations_left">
      <img src={src} alt={alt} />
    </div>
  );
};

export const ExpectationsContentRight = ({ expectationsContentRightData }) => {
  const { label, header, content, cta } = expectationsContentRightData;
  return (
    <div className="expectations_right">
      <a href={cta.href} className="label_cta">
        {label}
      </a>
      <h2 className="right_header">{header}</h2>
      <p className="expectations_content">{content}</p>
      <a href={cta.href} className="right_cta">
        {cta.title}
      </a>
    </div>
  );
};

const Expectations = () => {
  const { FeatureImageData, expectationsContentRightData } = expectationsData;

  return (
    <section className="section expectations">
      <FeatureImage featureImageData={FeatureImageData} />
      <ExpectationsContentRight
        expectationsContentRightData={expectationsContentRightData}
      />
    </section>
  );
};

export default Expectations;
