import React from "react";
import "./BookIcon.css";

type BookIconProps = {
  ownerImg: string;
};

const BookIcon: React.FC<BookIconProps> = ({ ownerImg }: BookIconProps) => {
  return (
    <div className="book-icon">
      <div className="lower-box"></div>
      <div className="circular-image">
        <img src={ownerImg} alt="Owner" />
      </div>
    </div>
  );
};

export default BookIcon;