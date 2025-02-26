import Grid_default from "@/components/Grid_default";
import Signup from "@/components/signup/Signup";

const page = () => {
  return (
    <div>
      <Grid_default text="My Account" />

      <Signup />
    </div>
  );
};

export default page;
