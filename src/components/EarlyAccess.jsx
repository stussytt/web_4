import earlyAccessData from "../mockData/earlyAccessData";

export const EarlyAccessLeft = ({ subtitle, title }) => {
  return (
    <div className="early_access_sectionleft">
      <p className="sectionsubtitle">{subtitle}</p>
      <h2 className="sectiontitle">{title}</h2>
    </div>
  );
};

export const EarlyAccessRight = ({ button }) => {
  return (
    <div className="early_access_sectionright">
      <button className="early_access_btn">{button.title}</button>
    </div>
  );
};

const EarlyAccess = () => {
  const { subtitle, title, button } = earlyAccessData;
  return (
    <section className="early_access_section">
      <div className="early_access_sectioncontent">
        <EarlyAccessLeft subtitle={subtitle} title={title} />
        <EarlyAccessRight button={button} />
      </div>
    </section>
  );
};

export default EarlyAccess;
