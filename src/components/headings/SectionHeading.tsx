import React from "react";

interface SectionHeadingProps {
  title: string;
  align: "center" | "left" | "right";
}
const SectionHeading: React.FC<SectionHeadingProps> = ({ title, align }) => {
  return (
    <div className={`py-8 text-${align}`}>
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 tracking-wide">
        {title}
      </h2>
      <div
        className={`mx-${
          align === "center" ? "auto" : "0"
        } mt-2 h-1 w-24 bg-gradient-to-r from-gray-700 via-yellow-500 to-gray-900`}
      ></div>
    </div>
  );
};

export default SectionHeading;
