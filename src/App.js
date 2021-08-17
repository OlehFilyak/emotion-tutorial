import Button from "./Components/Button";
import Text from "./Components/StylePassed";
import { P, ArticleText, SmallArticleText } from "./Components/StylePrecedence";
import ChangingBasedOnProps from "./Components/ChangingBasedOnProps";
import ChangeRenderedTagUsingWithComponent from "./Components/ChangeRenderedTagUsingWithComponent";
// import TargetingAnotherEmotionComponent from "./Components/TargetingAnotherEmotinComponent";
import ObjectStyles from "./Components/ObjectStyles";
import CustomizingPropForwarding from "./Components/CustomizingPropForwarding";
import CosmposingDynamicStyles from "./Components/CosmposingDynamicStyles";
import AsProp from "./Components/AsProp";
import NestingComponents from "./Components/NestingComponents";
import Composition1 from "./Components/Composition/Composition1";
import Composition2 from "./Components/Composition/Composition2";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button />
      <Text />
      <P text="Це звичайний параграф" />
      <ArticleText text="Це параграф з вперше переопреділиними стилями" />
      <SmallArticleText text="Це параграф з вдруге переопреділиними стилями" />
      <ChangingBasedOnProps />
      <ChangeRenderedTagUsingWithComponent />
      {/* <TargetingAnotherEmotionComponent /> */}
      <CustomizingPropForwarding />
      <ObjectStyles />
      <CosmposingDynamicStyles />
      <AsProp />
      <NestingComponents />
      <Composition1 />
      <Composition2 />
    </div>
  );
}

export default App;
