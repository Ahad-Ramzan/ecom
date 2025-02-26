const FaqLeftSection = () => {
  const faqItems = [
    {
      question: "Eu dictumst cum at sed euismod condimentum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      question: "Magna bibendum est fermentum eros.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      question: "Odio muskana hak eris conseekin sceleron?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      question: "Elit id blandit sabara boi velit gua mara?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
  ];

  return (
    <div className="p-6 bg-white">
      {/* Title Section */}
      <div className="mb-8">
        <h2 className="text-[30px] leading-8 font-bold text-[#1D3178]">
          General Information
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div key={index}>
            <h3 className="text-[17px] font-semibold leading-8 text-[#1D3178]">
              {item.question}
            </h3>
            <p className="text-[16px] leading-[30px] text-[#A1ABCC] mt-2">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqLeftSection;
