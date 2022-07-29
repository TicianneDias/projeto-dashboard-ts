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

  const handleClick = () => {
    setShow(prev => ({
      ...prev,
      filter: !show.filter
    }));
    
  };
  const handleClickArea = () => {
    setShow(prev => ({
      ...prev,
      area: !show.area
    }));
    localStorage.setItem('dashboard', JSON.stringify(show));
  };
  const handleClickBar = () => {
    setShow(prev => ({
      ...prev,
      bar: !show.bar
    }));
    localStorage.setItem('dashboard', JSON.stringify(show));
  };
  const handleClickLine = () => {
    setShow(prev => ({
      ...prev,
      line: !show.line
    }));
    localStorage.setItem('dashboard', JSON.stringify(show));
  };
  const handleClickPie = () => {
    setShow(prev => ({
      ...prev,
      pie: !show.pie
    }));
    localStorage.setItem('dashboard', JSON.stringify(show));
  };
  const handleClickMixed = () => {
    setShow(prev => ({
      ...prev,
      mixed: !show.mixed
    }));
    localStorage.setItem('dashboard', JSON.stringify(show));
  };

  
  const currentValue = JSON.stringify(show)
  useEffect(() => {
    localStorage.setItem('dashboard', currentValue)
  }, [show])

  useEffect(() => {
    setShow(JSON.parse(localStorage.getItem('dashboard')||'{}'))
    console.log(JSON.parse(localStorage.getItem('dashboard')||'{}'))
  }, [])

  return (
    <>
      <Title />
      <Filter onClick={() => handleClick()} />
      {show.filter && (
        <LabelContainer>
          <label>
            <h6>Área</h6>
            <input
              type="checkbox"
              onClick={handleClickArea}
              checked={show.area}
            />
          </label>
          <label>
            <h6>Barras</h6>
            <input type="checkbox" onClick={handleClickBar} checked={show.bar} />
          </label>
          <label>
            <h6>Linhas</h6>
            <input
              type="checkbox"
              onClick={handleClickLine}
              checked={show.line}
            />
          </label>
          <label>
            <h6>Locais</h6>
            <input type="checkbox" onClick={handleClickPie} checked={show.pie} />
          </label>
          <label>
            <h6>Progresso</h6>
            <input
              type="checkbox"
              onClick={handleClickMixed}
              checked={show.mixed}
            />
          </label>
        </LabelContainer>
      )}
      {show.area && <AreaCharts />}
      <AppContainer>
        {show.bar && <BarChart />}
        {show.line && <LineChart />}
        {show.pie && <PieChartsCountry />}
      </AppContainer>
      {show.mixed && <MixedContainer />}
    </>
  );
};

export default Home;
