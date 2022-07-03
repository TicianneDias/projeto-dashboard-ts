import BarChart from './components/BarCharts';
import NavBar from './components/NavBar';
import PieCharts from './components/PieCharts';
import Global from './style/Global';
import { AppContainer } from './style/CommunsStyle';
import AreaCharts from './components/AreaCharts';
import LineChart from './components/LineCharts';
import LittleLineChart from './components/LittleLineChart';
import RadarChart from './components/RadarCharts';

function App() {
  return (
    <>
      <Global />
      <NavBar />
        <AreaCharts />
      <AppContainer>
        <BarChart />
        <LineChart />
        <PieCharts />
        <RadarChart/>
      </AppContainer>
      <LittleLineChart />
    </>
  );
}

export default App;
