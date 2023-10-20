import Home from "./pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";  
import SearchAppBar from "./components/SearchAppBar"
import Tour from "./pages/Tour";
function App() {


  return (
    // https://www.youtube.com/watch?v=o1chMISeTC0
    //https://www.youtube.com/watch?v=fzxEECHnsvU
    <BrowserRouter>
      <SearchAppBar></SearchAppBar>
     <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/:id" element={<Tour/>} />  
     </Routes>
    </BrowserRouter>

  )

}
export default App;
