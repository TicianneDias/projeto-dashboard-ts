import BarChart from './dashboards/BarCharts';
import NavBar from './components/NavBar';
import Global from './style/Global';
import { AppContainer } from './style/CommunsStyle';
import AreaCharts from './dashboards/AreaCharts';
import LineChart from './dashboards/LineCharts';
import MixedContainer from './dashboards/MixedContainer';
import Filter from './components/Filter';
import PieChartsCountry from './dashboards/PieChartsCountry'
import Title from './components/Title';

function App() {
  return (
    <>
      <Global />
      <NavBar />
      <Title/>
      <Filter />
      <AreaCharts />
      <AppContainer>
        <BarChart />
        <LineChart />
        <PieChartsCountry/>
      </AppContainer>
      <MixedContainer />
    </>
  );
}

export default App;
