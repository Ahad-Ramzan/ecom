import AboutCard from "@/components/aboutus/AboutCard";
import OurFeatures from "@/components/aboutus/OurFeature";
import Grid_default from "@/components/Grid_default";

const page = () => {
  return (
    <div>
      <Grid_default text={"Blog Page"} />
      <AboutCard />
      <OurFeatures />
    </div>
  );
};

export default page;
