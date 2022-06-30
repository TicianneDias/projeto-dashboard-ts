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
    --color-primary: #5D405C;
    --color-secundary: #8CD574;
    --color-secundary-light: #a9f391;
    --color-blue: #26A0FC;
    --color-green: #26E7A6;
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
`;

