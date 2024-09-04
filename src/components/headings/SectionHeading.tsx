import React from "react";

interface SectionHeadingProps {
  title: string;
  align: "center" | "left" | "right";
}
const SectionHeading: React.FC<SectionHeadingProps> = ({ title, align }) => {
  return (
    <div className={`py-4 text-${align} uppercase`}>
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
    </div>
  );
};

export default SectionHeading;
