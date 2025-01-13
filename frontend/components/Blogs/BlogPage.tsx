import LeftSideBlog from "./LeftSideBlogs";
import RightSideBlog from "./RightSideBlog";

const BlogPage = () => {
  return (
    <div className="container flex gap-12 mx-auto">
      <LeftSideBlog />
      <RightSideBlog />
    </div>
  );
};

export default BlogPage;
