import ContactForm from "@/components/contactform/ContactForm";
import Grid_default from "@/components/Grid_default";

const page = () => {
  return (
    <div>
      <Grid_default text={"Contact Us"} />
      <ContactForm />
    </div>
  );
};

export default page;
