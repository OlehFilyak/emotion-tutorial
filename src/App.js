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
import ObjectStyles1 from "./Components/ObjectStyles1";
import ChildSelectors from "./Components/ChildSelectors";
import Numbers from "./Components/Numbers";
import Array from "./Components/Array";
import Fallbacks from "./Components/Fallbacks";
import WithCss from "./Components/WithCss";
import NestedSelectors1 from "./Components/NestedSelectors1";
import NestedSelector2 from "./Components/NestedSelector2";
import MediaQueries2 from "./Components/MediaQueries2";
import MediaQueries3 from "./Components/MediaQueries3";
import Facepaint from "./Components/Facepaint";
import GlobalStyles from "./Components/GlobalStyles";

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
      <ObjectStyles1 />
      <ChildSelectors />
      <Numbers />
      <Array />
      <Fallbacks />
      <WithCss />
      <NestedSelectors1 />
      <NestedSelector2 />
      <MediaQueries2 />
      <MediaQueries3 />
      <Facepaint />
      <GlobalStyles />
    </div>
  );
}

export default App;
