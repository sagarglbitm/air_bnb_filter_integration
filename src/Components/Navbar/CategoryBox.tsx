import React from "react";


interface CategoryBoxProps {
  //   icon: IconType;
  src: string;
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const CategoryBox = ({
  src: Icon,
  label,
  selected,
  onClick,
}: CategoryBoxProps) => {
  return (
    <div
      className={`images-box-styling ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
    {/* // <div
    //   className="images-box-styling"
    //   onClick={onClick} // Add onClick here
    // > */}
      
      
      <img src={Icon} className="links-img" />
      <div className="label-text-styling">{label}</div>
    </div>
  );
};

export default CategoryBox;
