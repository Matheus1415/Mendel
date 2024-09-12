import { LayoutIntroduction } from "../../layout/LayoutIntroduction";
import ImportanceOfWomenInGenetics from "./ImportanceOfWomenInGenetics";
import HistoricPionners from "./HistoricPionners";
import ChallengesAndBarriersFaced from "./ChallengesAndBarriersFaced";
import FuturePerspectives from "./FuturePerspectives";
import { BlogCardSection } from "./BlogCardSection";
import WolmansPage from "../../data/WolmansPage.json"
import { PreviousNextPageNavigator } from "../../components/PreviousNextPageNavigator";

export function MulheresXX() {
  return (
    <>
      <LayoutIntroduction query="MULHERES">
        MULHERES da genética
      </LayoutIntroduction>
      <ImportanceOfWomenInGenetics />
      <HistoricPionners />
      <ChallengesAndBarriersFaced />
      <FuturePerspectives />
      <BlogCardSection objectJson={WolmansPage}/>
      <PreviousNextPageNavigator
        previousPageRoute={"/sistema-abo"}
      />
    </>
  );
}
