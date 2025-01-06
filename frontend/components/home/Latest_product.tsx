import React from "react";

interface LatestProductProps {
  navItems: string[];
}

const LatestProduct: React.FC<LatestProductProps> = ({ navItems }) => {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold text-center text-_darkblue mb-6">
        Latest Product
      </h1>
      <div className="flex justify-center">
        <ul className="flex gap-6 text-lg font-medium text-_subtext">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-_pink transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Example usage with predefined navigation items
const navItems = ["New Arrival", "Best Seller", "Featured", "Special Offer"];

const LatestProductComponent = () => {
  return <LatestProduct navItems={navItems} />;
};

export default LatestProductComponent;
