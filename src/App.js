import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services"
import Home from './pages/Home';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      
      <main className='pages'>
      <Routes>
     
      <Route path='/'
      element={<Home />}>
      
      </Route>
      
      <Route path='/services'
      element={<Services />}>
      </Route>

      </Routes>
      
      </main>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;


//fix main
