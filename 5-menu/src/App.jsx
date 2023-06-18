import { useState } from "react";
import Title from "../Tilte";
import menu from "./data";
import Menu from "./Menu";
const App = () => {
  const [menuitems, setMenuItems] = useState(menu);
  return (
    <section className="menu">
      <div className="title">
        <h2><Title/></h2>
        <div className="title-underline"></div>
        <div className="btn-container"></div>
      </div>
    
    <Menu menus={menuitems}/>
    </section>
  )
};
export default App;
