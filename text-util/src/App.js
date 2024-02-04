
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode,setMode] = useState("light")
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor="#021822"
      document.body.style.color='white'
    }else{
      setMode('light')
      document.body.style.backgroundColor="white"
      document.body.style.color='black'
    }
  }
  return (
    <>
      <Navbar title="TextUtil" aboutText = "About TextUtil" mode = {mode} toggleMode = {toggleMode}/>
      <Textform heading="Enter the Text to analyze"/>
      {/* <About/> */}
    </>
  );
}

export default App;
