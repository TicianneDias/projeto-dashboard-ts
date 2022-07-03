import { IoMdInformationCircleOutline } from 'react-icons/io';
import { TooltipCard, TooltipText } from '../../style/CommunsStyle';
import LittleLineChart from '../LittleLineChart';
import PieChart from '../PieCharts';
import RadarChart from '../RadarCharts';
import {
  GraphicsContainer,
  LittleGraphicContainer,
  MixedContainerDashboards,
  TitleContainer,
  TooltipBoxMixedContainer
} from './style';

const MixedContainer = () => {
  return (
    <MixedContainerDashboards>
      <TitleContainer>
        <h3>Progresso Individual</h3>
        <TooltipCard>
          <TooltipText>
            <IoMdInformationCircleOutline id="icon" />
          </TooltipText>
          <TooltipBoxMixedContainer>
            <h5>
              Dados sobre progresso individual acompanhando porcentagens de
              vendas
            </h5>
          </TooltipBoxMixedContainer>
        </TooltipCard>
      </TitleContainer>
      <LittleGraphicContainer>
        <h5>Progresso</h5>
        <LittleLineChart />
      </LittleGraphicContainer>
      <GraphicsContainer>
        <RadarChart />
        <PieChart />
      </GraphicsContainer>
    </MixedContainerDashboards>
  );
};

export default MixedContainer;
