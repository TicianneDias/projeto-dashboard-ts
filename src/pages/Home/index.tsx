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
import Loading from '../../components/Loading';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [first, setFirst] = useState(true);
  const [show, setShow] = useState({
    filter: false,
    area: true,
    bar: true,
    line: true,
    pie: true,
    mixed: true
  });

  const handleClick = () => {
    setFirst(false);
    setShow(prev => ({
      ...prev,
      filter: !show.filter
    }));
  };
  const handleClickArea = () => {
    setFirst(false);
    setShow(prev => ({
      ...prev,
      area: !show.area
    }));
  };
  const handleClickBar = async () => {
    setFirst(false);
    setShow(prev => ({
      ...prev,
      bar: !show.bar
    }));
  };
  const handleClickLine = () => {
    setFirst(false);
    setShow(prev => ({
      ...prev,
      line: !show.line
    }));
  };
  const handleClickPie = () => {
    setFirst(false);
    setShow(prev => ({
      ...prev,
      pie: !show.pie
    }));
  };
  const handleClickMixed = async () => {
    setFirst(false);
    setShow(prev => ({
      ...prev,
      mixed: !show.mixed
    }));
  };
  
  const intervalLoad = () => {
    setInterval(() => setIsLoading(false), 1050)
  }

  useEffect(() => {
    if (!first) {
      localStorage.setItem('dashboard', JSON.stringify(show));
      intervalLoad()
    }
  }, [show]);

  useEffect(() => {
    intervalLoad()
    if (localStorage.getItem('dashboard')) {
      setShow(JSON.parse(localStorage.getItem('dashboard') || '{}'));
    }
  }, []);

  return (
    <>
      <Title />
      <Filter onClick={() => handleClick()} disabled={isLoading} />
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
            <input
              type="checkbox"
              onClick={handleClickBar}
              checked={show.bar}
            />
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
            <input
              type="checkbox"
              onClick={handleClickPie}
              checked={show.pie}
            />
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
      {!isLoading ? (
        <>
          {show.area && <AreaCharts />}
          <AppContainer>
            {show.bar && <BarChart />}
            {show.line && <LineChart />}
            {show.pie && <PieChartsCountry />}
          </AppContainer>
          {show.mixed && <MixedContainer />}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
