import React from "react";
interface Props {
  count: number;
  text: string;
}

export const InfoItem: React.FC<Props> = ({ count, text }) => {
  return (
    <div className="profile__hero__info__item">
      <div className="profile__hero__info__item__count">{count}</div>
      <div className="profile__hero__info__item__text">{text}</div>
    </div>
  );
};
