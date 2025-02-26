import BlogPage from "@/components/Blogs/BlogPage";
import Grid_default from "@/components/Grid_default";

const page = () => {
  return (
    <div>
      <Grid_default text={"Blog Page"} />
      <BlogPage />
    </div>
  );
};

export default page;
