import { createGlobalStyle } from "styled-components"

import prboeot from '../../assets/fonts/ProximaNova-Bold.eot';
import prbowoff from '../../assets/fonts/ProximaNova-Bold.woff';
import prbowoff2 from '../../assets/fonts/ProximaNova-Bold.woff2';

import proregeot from '../../assets/fonts/ProximaNova-Regular.eot';
import proregwoff from '../../assets/fonts/ProximaNova-Regular.woff';
import proregwoff2 from '../../assets/fonts/ProximaNova-Regular.woff2';

import iowboleot from '../../assets/fonts/IowanOldStyleBTW03-Bd.eot';
import iowbolwoff from '../../assets/fonts/IowanOldStyleBTW03-Bd.woff';
import iowbolwoff2 from '../../assets/fonts/IowanOldStyleBTW03-Bd.woff2';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Proxima Nova Bold';
    src: url('${prboeot}');
    src: url('${prboeot}?#iefix') format('embedded-opentype'),
        url('${prbowoff2}') format('woff2'),
        url('${prbowoff}') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Proxima Nova Regular';
    src: url('${proregeot}');
    src: url('${proregeot}?#iefix') format('embedded-opentype'),
        url('${proregwoff2}') format('woff2'),
        url('${proregwoff}') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Iowan Old Style Bold';
    src: url('${iowboleot}');
    src: url('${iowboleot}?#iefix') format('embedded-opentype'),
        url('${iowbolwoff2}') format('woff2'),
        url('${iowbolwoff}') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

:root {
    --reg: 'Proxima Nova Regular', sans-serif;
    --bold: 'Proxima Nova Bold', sans-serif;
    --serif: 'Iowan Old Style Bold', serif;
    --headline-1: 3.75rem;
    --headline-2: 2.18rem;
    --headline-3: 1.875rem;
    --paragraph: 1rem;
    --yellow: #F5BD16;
    --black: #000000;
    --blue: #0047BA;
    --red: #FF4438;
    --green: #3DAE2B;
    --purple: #5C0F8B;
    --white: #FFFFFF;
    overflow-wrap: break-word;
}

    html {
      scroll-behavior: smooth;
    }
    body {
        background-color: var(--white);
        font-family: var(--serif);
        color: var(--black);
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        font-feature-settings: 'salt' on;
    }
    main {
      background: var(--white) !important;
    }
    * {
      box-sizing: border-box;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }
    ::selection {
      background: black;
      color: white;
    }
    button {
      -webkit-appearance: none;
      background: transparent;
      box-shadow: none;
      border: none;
      cursor: pointer;
    }
    button:focus {
      outline: 0;
    }


a {
    color: var(--black);
}

h1 {
    font-size: var(--jumbo);
    font-family: var(--xl-black);
    font-weight: normal;
}
h2 {
    font-size: var(--headline-2);
    font-weight: normal;
}
h3 {
    font-size: var(--headline-3);
    font-weight: normal;
}
p, a, li, .paragraph {
  font-size: var(--paragraph);
  line-height: 132%;
}

`