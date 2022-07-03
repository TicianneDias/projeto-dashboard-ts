import BarChart from './components/BarCharts';
import NavBar from './components/NavBar';
import PieCharts from './components/PieCharts';
import Global from './style/Global';
import { AppContainer } from './style/CommunsStyle';
import AreaCharts from './components/AreaCharts';
import LineChart from './components/LineCharts';
import LittleLineChart from './components/LittleLineChart';
import RadarChart from './components/RadarCharts';
import MixedContainer from './components/MixedContainer';

function App() {
  return (
    <>
      <Global />
      <NavBar />
      <AreaCharts />
      <AppContainer>
        <BarChart />
        <LineChart />
      <MixedContainer />
      </AppContainer>
    </>
  );
}

export default App;
