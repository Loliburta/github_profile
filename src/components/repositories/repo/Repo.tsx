import { Icon } from "@iconify/react";
import star from "@iconify-icons/ant-design/star-outlined";
import fork from "@iconify-icons/jam/fork";
interface Props {
  name: string;
  html_url?: string;
  description?: string;
  language: string | null;
  stargazers_count: number;
  forks_count?: number;
  size?: number;
  color: string;
}
export const Repo: React.FC<Props> = ({
  name,
  html_url,
  description,
  language,
  stargazers_count,
  forks_count,
  size,
  color,
}) => {
  return (
    <div className="profile__repos__cards__card">
      <a href={html_url} className="profile__repos__cards__card__title">
        {name}
      </a>
      <div className="profile__repos__cards__card__description">
        {description}
      </div>
      <div className="profile__repos__cards__card__footer">
        <div className="profile__repos__cards__card__footer__info">
          <div className="profile__repos__cards__card__footer__info__group">
            <div className="profile__repos__cards__card__footer__info__group__language">
              <div
                className="profile__repos__cards__card__footer__info__group__language__color"
                style={{
                  backgroundColor: color,
                }}
              ></div>
              <span className="profile__repos__cards__card__footer__info__group__language__text">
                {language ? language : "Unknown"}
              </span>
            </div>
            <div className="profile__repos__cards__card__footer__info__group__stars">
              <Icon
                icon={star}
                className="profile__repos__cards__card__footer__info__group__stars__icon"
              />
              {stargazers_count}
            </div>
            <div className="profile__repos__cards__card__footer__info__group__forks">
              <Icon
                icon={fork}
                className="profile__repos__cards__card__footer__info__group__forks__icon"
              />
              {forks_count}
            </div>
          </div>
          <div className="profile__repos__cards__card__footer__info__size">
            {size?.toLocaleString()} KB
          </div>
        </div>
      </div>
    </div>
  );
};
