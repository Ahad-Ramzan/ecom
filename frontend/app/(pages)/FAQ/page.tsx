import FaqLeftSection from "@/components/faq/FaqLeftSection";
import FaqRightSection from "@/components/faq/FaqRightSection";
import Grid_default from "@/components/Grid_default";

const page = () => {
  return (
    <div>
      <Grid_default text={"FAQ"} />
      <div className="container grid grid-cols-2 my-28">
        <FaqLeftSection />
        <FaqRightSection />
      </div>
    </div>
  );
};

export default page;
