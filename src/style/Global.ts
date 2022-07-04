import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800&display=swap');

:root {
    --color-white: #fff;
    --color-bg: #F6F6F6;
    --color-dark: #101010f2;
    --color-dark-secundary: #071b1d,
    --color-gray: #CEC6CE;
    --color-gray-secundary: #828282;
    --color-primary: #9F040C;
    --color-secundary: #10244F;
    --color-secundary-light: #3D5BB9;
    --color-blue: #26A0FC;
    --color-green: #6B9E12;
    --color-yellow: #FEBC3B;
}
    
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inconsolata', monospace;
    }
    
    body{ 
        background-color: var(--color-bg);

    }

    ::-webkit-scrollbar {
  width: 8px;

  &:hover {
    width: 11px;
  }
}

::-webkit-scrollbar-track {
  background: var(--color-dark);

  &:hover {
    background: var(--color-secundary-light); 
  }
}
 
::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 100px;
}

`;

