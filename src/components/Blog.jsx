import blogData from "../mockData/blogData";

export const BlogTitle = ({ blogTitleData }) => {
  const { title } = blogTitleData;
  return (
    <>
      <h2 className="blog_title">{title}</h2>;
    </>
  );
};

export const BlogCardLarge = ({ blogCardLargeData }) => {
  const { image, date, title, link } = blogCardLargeData;
  return (
    <div className="blog_card_large">
      <div className="blog_card_image">
        <img src={image.src} alt={image.alt} />
      </div>
      <div className="blog_card_content">
        <time className="blog_card_date">{date}</time>
        <h3 className="blog_card_title">{title}</h3>
        <a href={link.href} className="blog_card_link">
          {link.title}
        </a>
      </div>
    </div>
  );
};

export const BlogCardTop = ({ item }) => {
  const { image, date, title, link } = item;
  return (
    <div className="blog_card">
      <div className="blog_card_image">
        <img src={image.src} alt={image.alt} />
      </div>
      <div className="blog_card_content">
        <time className="blog_card_date">{date}</time>
        <h3 className="blog_card_title">{title}</h3>
        <a href={link.href} className="blog_card_link">
          {link.title}
        </a>
      </div>
    </div>
  );
};

export const BlogCardBottom = ({ item }) => {
  const { image, date, title, link } = item;
  return (
    <div className="blog_card">
      <div className="blog_card_image">
        <img src={image.src} alt={image.alt} />
      </div>
      <div className="blog_card_content">
        <time className="blog_card_date">{date}</time>
        <h3 className="blog_card_title">{title}</h3>
        <a href={link.href} className="blog_card_link">
          {link.title}
        </a>
      </div>
    </div>
  );
};

export const BlogCardsTop = ({ blogCardsTopData }) => {
  return blogCardsTopData.map((item, index) => (
    <BlogCardTop key={index} item={item} />
  ));
};

export const BlogCardsBottom = ({ blogCardsBottomData }) => {
  return blogCardsBottomData.map((item, index) => (
    <BlogCardBottom key={index} item={item} />
  ));
};

const Blog = () => {
  const {
    BlogTitleData,
    BlogCardLargeData,
    BlogCardsTopData,
    BlogCardsBottomData,
  } = blogData;

  return (
    <section className="section blog">
      <BlogTitle blogTitleData={BlogTitleData} />
      <div className="blog_cards">
        <div className="blog_cards_left">
          <BlogCardLarge blogCardLargeData={BlogCardLargeData} />
        </div>
        <div className="blog_cards_right">
          <div className="blog_cards_row">
            <BlogCardsTop blogCardsTopData={BlogCardsTopData} />
          </div>
          <div className="blog_cards_row">
            <BlogCardsBottom blogCardsBottomData={BlogCardsBottomData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
