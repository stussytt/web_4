import footerData from "../mockData/footerData";

export const FooterTop = ({ footerTopData }) => {
  const { title, cta } = footerTopData;
  return (
    <div className="footer-cta">
      <h2 className="footer-cta__title">{title}</h2>
      <button className="footer-cta__btn">{cta.title}</button>
    </div>
  );
};

export const FooterBrand = ({ footerBrandData }) => {
  const { title, address, rights } = footerBrandData;
  return (
    <div className="footer-brand">
      <div className="footer-brand__logo">{title}</div>
      <p className="footer-brand__text">{address}</p>
      <p className="footer-brand__rights">{rights}</p>
    </div>
  );
};

export const FooterListItem = ({ item }) => {
  const { title, href } = item;
  return (
    <li>
      <a href={href}>{title}</a>
    </li>
  );
};

export const FooterColList = ({ list }) => {
  const listItems = list.map((item, index) => (
    <FooterListItem key={index} item={item} />
  ));
  return <ul className="footer-col__list">{listItems}</ul>;
};

export const FooterCol = ({ colData }) => {
  const { title, list } = colData;
  return (
    <div className="footer-col">
      <h4 className="footer-col__title">{title}</h4>
      <FooterColList list={list} />
    </div>
  );
};

export const FooterMiddle = ({ footerMiddleData }) => {
  return footerMiddleData.map((col, index) => (
    <FooterCol key={index} colData={col} />
  ));
};

export const FooterBottom = ({ footerBottomData }) => {
  const { title } = footerBottomData;
  return (
    <div className="copyright-bar">
      <p>{title}</p>
    </div>
  );
};

const Footer = () => {
  const { footerTopData, footerBrandData, footerMiddleData, footerBottomData } =
    footerData;
  return (
    <footer className="site-footer">
      <FooterTop footerTopData={footerTopData} />
      <div className="footer-main">
        <div className="footer-row">
          <FooterBrand footerBrandData={footerBrandData} />
          <FooterMiddle footerMiddleData={footerMiddleData} />
        </div>
      </div>
      <FooterBottom footerBottomData={footerBottomData} />
    </footer>
  );
};

export default Footer;
