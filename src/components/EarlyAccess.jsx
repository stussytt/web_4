import earlyAccessData from "../mockData/earlyAccessData";

export const EarlyAccessButton = ({ ctaButtonData }) => {
  const { title } = ctaButtonData;
  return (
    <div className="early_access_section__right">
      <button className="early_access_btn">{title}</button>
    </div>
  );
};

export const EarlyAccessContent = ({ earlyAccessContentData }) => {
  const { subtitle, title } = earlyAccessContentData;
  return (
    <div className="early_access_sectionleft">
      <h3 className="sectionsubtitle">{subtitle}</h3>
      <h2 className="sectiontitle">{title}</h2>
    </div>
  );
};

export const EarlyAccess = () => {
  const { ctaButtonData, earlyAccessContentData } = earlyAccessData;

  return (
    <>
      <section className="section early_access_section">
        <div className="early_access_sectioncontent">
          <EarlyAccessContent earlyAccessContentData={earlyAccessContentData} />
          <EarlyAccessButton ctaButtonData={ctaButtonData} />
        </div>
      </section>
    </>
  );
};

export default EarlyAccess;
