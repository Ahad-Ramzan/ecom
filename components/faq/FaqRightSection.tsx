import Button from "../Button";

const FaqRightSection = () => {
  return (
    <div className="p-10 bg-[#F8F8FD] ">
      {/* Title */}
      <h2 className="text-[24px] font-semibold text-[#1d3178] mb-20">
        Ask a Question
      </h2>

      {/* Form */}
      <form className="space-y-7">
        {/* Name Field */}

        <input
          type="text"
          id="name"
          placeholder="Your Name*"
          className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Subject Field */}

        <input
          type="text"
          id="subject"
          placeholder="Subject*"
          className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Message Field */}

        <textarea
          id="message"
          rows={5}
          placeholder="Type Your Message*"
          className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        {/* Submit Button */}
        <Button>Send Mail</Button>
      </form>
    </div>
  );
};

export default FaqRightSection;
