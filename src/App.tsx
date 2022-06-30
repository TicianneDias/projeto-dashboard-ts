import BarChart from './components/BarCharts';
import NavBar from './components/NavBar';
import PieChart from './components/LineCharts';
import Global from './style/Global';
import { AppContainer } from './style/CommunsStyle';

function App() {
  return (
    <>
    <Global/>
    <NavBar/>
    <AppContainer>
      <BarChart />
      <PieChart />
    </AppContainer>
    </>
  );
}

export default App;
