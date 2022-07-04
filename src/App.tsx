import BarChart from './dashboards/BarCharts';
import NavBar from './components/NavBar';
import Global from './style/Global';
import { AppContainer } from './style/CommunsStyle';
import AreaCharts from './dashboards/AreaCharts';
import LineChart from './dashboards/LineCharts';
import MixedContainer from './dashboards/MixedContainer';
import Filter from './components/Filter';

function App() {
  return (
    <>
      <Global />
      <NavBar />
      <Filter />
      <AreaCharts />
      <AppContainer>
        <BarChart />
        <LineChart />
      </AppContainer>
      <MixedContainer />
    </>
  );
}

export default App;
