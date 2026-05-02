import blogData from "../mockData/blogData";

export const BlogCardLarge = ({ post }) => {
  const { image, date, title, link } = post;
  return (
    <div className="blog_card_large">
      <div className="blog_card_image">
        <img src={image.src} alt={image.alt} />
      </div>
      <div className="blog_card_content">
        <span className="blog_card_date">{date}</span>
        <h4 className="blog_card_title">{title}</h4>
        <a href={link.href} className="blog_card_link">
          {link.title}
        </a>
      </div>
    </div>
  );
};

export const BlogCard = ({ post }) => {
  const { image, date, title, link } = post;
  return (
    <div className="blog_card">
      <div className="blog_card_image">
        <img src={image.src} alt={image.alt} />
      </div>
      <div className="blog_card_content">
        <span className="blog_card_date">{date}</span>
        <h4 className="blog_card_title">{title}</h4>
        <a href={link.href} className="blog_card_link">
          {link.title}
        </a>
      </div>
    </div>
  );
};

const Blog = () => {
  const { header, posts } = blogData;
  const [largePost, post2, post3, post4, post5] = posts;

  return (
    <section className="blog">
      <h2 className="blog_title">{header}</h2>
      <div className="blog_cards">
        <div className="blog_cards_left">
          <BlogCardLarge post={largePost} />
        </div>
        <div className="blog_cards_right">
          <div className="blog_cards_row">
            <BlogCard post={post2} />
            <BlogCard post={post3} />
          </div>
          <div className="blog_cards_row">
            <BlogCard post={post4} />
            <BlogCard post={post5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
