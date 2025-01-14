import { BrowserRouter } from "react-router-dom"; 
import MainPage from "./pages/main";

function App() { 
  return ( 
    <BrowserRouter> 
      <MainPage/>
    </BrowserRouter> 
  ); 
} 

export default App;