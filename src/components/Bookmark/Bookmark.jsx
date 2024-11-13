import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
//   console.log(bookmark);
const {title} = bookmark;
  return (
<div className="p-4 m-4 rounded-lg"style={{background:'lightGray'}}>
    <h3 className="text-3xl font-bold">{title}</h3>
    </div>
  )
  
};

Bookmark.propTypes = {
    bookmark:PropTypes.object
};

export default Bookmark;
