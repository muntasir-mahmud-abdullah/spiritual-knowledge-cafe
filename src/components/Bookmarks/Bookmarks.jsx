import PropTypes from "prop-types";
import Bookmark from "../Bookmark/bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 ml-4" style={{ background: "gray" }}>
      <h3 className="text-4xl text-[#333] mt-2 p-4 font-semibold">
        Reading Time : {readingTime} min
      </h3>
      <h4 className="text-4xl p-4 font-semibold">Bookmarked Blogs</h4>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};
export default Bookmarks;
