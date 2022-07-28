import BarChart from '../../dashboards/BarCharts';
import { AppContainer } from '../../style/CommunsStyle';
import AreaCharts from '../../dashboards/AreaCharts';
import LineChart from '../../dashboards/LineCharts';
import MixedContainer from '../../dashboards/MixedContainer';
import Filter from '../../components/Filter';
import PieChartsCountry from '../../dashboards/PieChartsCountry';
import Title from '../../components/Title';
import { useEffect, useState } from 'react';
import { LabelContainer } from './style';

const Home = () => {
  const [show, setShow] = useState({
    filter: false,
    area: true,
    bar: true,
    line: true,
    pie: true,
    mixed: true
  });
  const [filter, setFilter] = useState(false);
  const [showArea, setShowArea] = useState(true);
  const [showBar, setShowBar] = useState(true);
  const [showLine, setShowLine] = useState(true);
  const [showPie, setShowPie] = useState(true);
  const [showMixed, setShowMixed] = useState(true);

  let dashboard = [];

  if (localStorage) {
    let dashboard = localStorage.getItem('dashboard');
  }

  const handleClick = () => {
    setFilter(visible => !visible);
  };
  const handleClickArea = () => {
    setShowArea(visible => !visible);
    setShow(prev => ({
      ...prev,
      area: !showArea
    }));
    localStorage.setItem('dashboard', JSON.stringify(show));
  };
  const handleClickBar = () => {
    setShowBar(visible => !visible);
    setShow(prev => ({
      ...prev,
      bar: !showBar
    }));
    localStorage.setItem('dashboard', JSON.stringify(show));
  };
  const handleClickLine = () => {
    setShowLine(visible => !visible);
    setShow(prev => ({
      ...prev,
      line: !showLine
    }));
    localStorage.setItem('dashboard', JSON.stringify(show));
  };
  const handleClickPie = () => {
    setShowPie(visible => !visible);
    setShow(prev => ({
      ...prev,
      pie: !showPie
    }));
    localStorage.setItem('dashboard', JSON.stringify(show));
  };
  const handleClickMixed = () => {
    setShowMixed(visible => !visible);
    setShow(prev => ({
      ...prev,
      mixed: !showMixed
    }));
    localStorage.setItem('dashboard', JSON.stringify(show));
  };

  type newShow = {
    show: object;
    area: boolean;
    bar: boolean;
    line: boolean;
    pie: boolean;
    mixed: boolean;
    filter: boolean;
  };

  useEffect(() => {
    const show: newShow = JSON.parse(localStorage.getItem('dashboard') || '{}');
    setShowArea(show.area);
    setShowBar(show.bar);
    setShowLine(show.line);
    setShowPie(show.pie);
    setShowMixed(show.mixed);
    console.log(show);
  }, []);

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
