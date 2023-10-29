
import { useState } from 'react'
import { ReactComponent as Moon } from '../assets/icon-moon.svg'
import { ReactComponent as Sol } from '../assets/icon-sun.svg'
const Header = () => {
  const [temaClaro, mudarTema] = useState(false)
  
  const changeTheme = () => {
    if (!temaClaro) {
      document.body.className = "lightTheme";
      mudarTema(true);
      console.log("claro"); console.log(document.body.className)
    } else {
      document.body.className = "darkTheme";
      mudarTema(false)
      console.log("escuro ");
    }
  };
  return (
    <div >
      <h1>TODOList</h1>
      <button style={{backgroundColor: 'black'}} onClick={changeTheme}>{temaClaro ? <Moon/> : <Sol/>}</button>
      
      
    </div>
  );
}

export default Header
