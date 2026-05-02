import footerData from "../mockData/footerData";

export const FooterCta = ({ cta }) => {
  return (
    <div className="footer-cta">
      <h2 className="footer-cta__title">{cta.header}</h2>
      <button className="footer-cta__btn">{cta.button.title}</button>
    </div>
  );
};

export const FooterBrand = ({ brand }) => {
  const { logoText, address, rights } = brand;
  return (
    <div className="footer-brand">
      <h3 className="footer-brand__logo">{logoText}</h3>
      <p className="footer-brand__text">{address}</p>
      <p className="footer-brand__rights">{rights}</p>
    </div>
  );
};

export const FooterColumn = ({ column }) => {
  const { title, links } = column;
  return (
    <div className="footer-col">
      <h4 className="footer-col__title">{title}</h4>
      <ul className="footer-col__list">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="footer-col__link">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const { cta, brand, columns, copyright } = footerData;
  return (
    <section className="footer section">
      <div className="site-footer">
        <FooterCta cta={cta} />
        <div className="footer-main">
          <div className="footer-row">
            <FooterBrand brand={brand} />
            {columns.map((column, index) => (
              <FooterColumn key={index} column={column} />
            ))}
          </div>
        </div>
        <div className="copyright-bar">
          <p>{copyright}</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
