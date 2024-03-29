import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalSetting = createGlobalStyle`
 ${reset};
 a{
     text-decoration: none;
     color: inherit;
 }
 *{
     box-sizing: border-box;
 }
 body{
     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
     font-size: 1.2rem;
     background-color: rgba(20, 20, 20, 1);
     color: white;
     padding-top: 50px;
 }
`
export default globalSetting;