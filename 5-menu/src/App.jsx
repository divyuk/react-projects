import { useState } from "react";
import Title from "../Tilte";
import menu from "./data";
import Menu from "./Menu";
const App = () => {
  const [menuitems, setMenuItems] = useState(menu);
  const handlerItem = ()=>{
    setMenuItems((mi)=>(console.log(mi)));
  };
  return (
    <section className="menu">
      <div className="title">
        <h2><Title/></h2>
        <div className="title-underline"></div>
        <div className="btn-container">
          <button className="btn">All</button>
          <button onClick={handlerItem} className="btn">Breakfast</button>
          <button className="btn">Lunch</button>
          <button className="btn">Dinner</button>
        </div>
      </div>
    
    <Menu menus={menuitems}/>
    </section>
  )
};
export default App;
