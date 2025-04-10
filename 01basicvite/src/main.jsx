import { StrictMode ,React} from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const element = (
    <a href="http://google.com" target="_black">click me to visit google</a>
)

//  const createElement = {
//   type:'a',
//   props:{
//     href:"http://google.com",
//     target:'_blank'
//   },
//   children:"clck me to visit google"
// }

 const acreateElement = React.createElement(
    'a',
    {href:'http://google.com',type:'_blank'},
    "vipin"
    
 )
createRoot(document.getElementById("root")).render(
<acreateElement/>
);
