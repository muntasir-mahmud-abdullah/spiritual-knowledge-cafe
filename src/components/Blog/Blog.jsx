import { PiBookmarkSimple } from "react-icons/pi";
import PropTypes from "prop-types";
const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
  const {id,
    title,
    cover_img,
    author_name,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="md:mb-20 md:space-y-4">
      <img
        className="w-full rounded-lg"
        src={cover_img}
        alt={`cover pic of title:${title}`}
      />
      <h2 className="text-4xl font-bold my-4">{title}</h2>
      {hashtags.map((hash, idx) => (
        <span key={idx}>
          {" "}
          <a href="">{hash}</a>
        </span>
      ))}
      <div className="flex justify-between m-4 items-center ">
        <div className="flex gap-4">
          <img className="w-28 rounded-full" src={author_img} alt="" />
          <div className="flex flex-col justify-center">
            <h4 className="text-2xl font-semibold"> {author_name}</h4>
            <p className="text-xl"> {posted_date}</p>
          </div>
        </div>
        <div className="flex">
          <h6 className="text-2xl">{reading_time} min read</h6>
          <button
            onClick={() => handleBookmarks(blog)}
            className="text-3xl ml-4 text-red-500"
          >
            <PiBookmarkSimple></PiBookmarkSimple>
          </button>
        </div>
      </div>
      <button
        className="text-purple-500 text-lg underline"
        onClick={() => handleMarkAsRead(id,reading_time)}
      >
        Mark as Read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
