import LeftSideBlog from "./LeftSideBlogs";
import RightSideBlog from "./RightSideBlog";

const BlogPage = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12">
      <LeftSideBlog />
      <RightSideBlog />
    </div>
  );
};

export default BlogPage;
