import { Doughnut } from "react-chartjs-2";
import { LanguageColors } from "../../../utilities/LanguageColors";
interface Props {
  repositories: {
    stargazers_count: number;
    fork: boolean;
    name: string;
    language: string | null;
  }[];
}
export const DonutGraph: React.FC<Props> = ({ repositories }) => {
  const filtered = repositories.filter((repo) => !repo.fork);
  const languages = new Set(filtered.map((repo) => repo.language));
  const labels = Array.from(languages.values()).filter((l) => l);
  const data = labels.map((lang) => {
    const repos = filtered.filter((repo) => repo.language === lang);
    const stars = repos.map((repo) => repo.stargazers_count);
    const languageStars = stars.reduce((prev, val) => prev + val, 0);
    return languageStars;
  });
  let backgroundColor = null;
  if (data.length > 0 && data.reduce((prev, val) => prev + val) > 0) {
    backgroundColor = labels.map((label) => {
      if (label) {
        return LanguageColors[label];
      }
      return;
    });
  }
  return (
    <>
      {backgroundColor !== null ? (
        <Doughnut
          type="Doughnut"
          data={{
            labels: labels,
            redraw: true,
            datasets: [
              {
                label: "My First Dataset",
                data: data,
                backgroundColor: backgroundColor,
                hoverOffset: 4,
              },
            ],
          }}
        />
      ) : (
        <div className="profile__graphs__graph__message">No stars yet, Sadge</div>
      )}
    </>
  );
};
