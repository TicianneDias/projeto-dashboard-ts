import BarChart from "../dashboards/BarCharts";
import { AppContainer } from "../style/CommunsStyle";
import AreaCharts from "../dashboards/AreaCharts";
import LineChart from "../dashboards/LineCharts";
import MixedContainer from "../dashboards/MixedContainer";
import Filter from "../components/Filter";
import PieChartsCountry from "../dashboards/PieChartsCountry";
import Title from "../components/Title";
import { useState } from "react";
import { LabelContainer } from "./style";

const Home = () => {
  const [filter, setFilter] = useState(false);
  const [showArea, setShowArea] = useState(true);
  const [showBar, setShowBar] = useState(true);
  const [showLine, setShowLine] = useState(true);
  const [showPie, setShowPie] = useState(true);
  const [showMixed, setShowMixed] = useState(true);

  const handleClick = () => {
    setFilter((visible) => !visible);
  };
  const handleClickArea = () => {
    setShowArea((visible) => !visible);
  };
  const handleClickBar = () => {
    setShowBar((visible) => !visible);
  };
  const handleClickLine = () => {
    setShowLine((visible) => !visible);
  };
  const handleClickPie = () => {
    setShowPie((visible) => !visible);
  };
  const handleClickMixed = () => {
    setShowMixed((visible) => !visible);
  };

  return (
    <>
      <Title />
      <Filter onClick={() => handleClick()} />
      {filter && (
        <LabelContainer>
          <label>
            <h6>Área</h6>
            <input
              type="checkbox"
              onClick={handleClickArea}
              checked={showArea}
            />
          </label>
          <label>
            <h6>Barras</h6>
            <input type="checkbox" onClick={handleClickBar} checked={showBar} />
          </label>
          <label>
            <h6>Linhas</h6>
            <input
              type="checkbox"
              onClick={handleClickLine}
              checked={showLine}
            />
          </label>
          <label>
            <h6>Locais</h6>
            <input type="checkbox" onClick={handleClickPie} checked={showPie} />
          </label>
          <label>
            <h6>Progresso</h6>
            <input
              type="checkbox"
              onClick={handleClickMixed}
              checked={showMixed}
            />
          </label>
        </LabelContainer>
      )}
      {showArea && <AreaCharts />}
      <AppContainer>
        {showBar && <BarChart />}
        {showLine && <LineChart />}
        {showPie && <PieChartsCountry />}
      </AppContainer>
      {showMixed && <MixedContainer />}
    </>
  );
};

export default Home;
