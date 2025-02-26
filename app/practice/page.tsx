const page = () => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-full w-full h-full bg-red-500">
          01
        </div>
        <div className="col-span-2  w-full h-full bg-red-500">02</div>
        <div className="col-end-7 col-span-2  w-full h-full bg-red-500">03</div>
        <div className="col-start-1 col-end-7  w-full h-full bg-red-500">
          04
        </div>
      </div>
    </div>
  );
};

export default page;
