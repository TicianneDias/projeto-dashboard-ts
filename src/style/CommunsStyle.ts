import styled from 'styled-components';

export const DashboardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    width: 570px;
    height: auto;
    padding: 15px;
    background-color: var(--color-white);
    box-shadow: 2px 2px 2px var(--color-gray-secundary);
    border-radius: 20px;
    border: 0.3px solid var(--color-dark);
    /* position: absolute; */
`;

export const IconContainer = styled.div`
    position: relative;
    top: 29px;
    right: 190px;
    
    #icon {
        color: var(--color-secundary);
        font-size: 20px;

        &:hover {
            color: var(--color-dark);
        }
    }
`;

export const AppContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;