import Grid_default from "@/components/Grid_default";
import OrderComplete from "@/components/order_complete/OrderComplete";

const page = () => {
  return (
    <div>
      <Grid_default text="Order Completed" />
      <OrderComplete />
    </div>
  );
};

export default page;
