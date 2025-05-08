import './css/App.css'
import Favorites from './pages/Favorites';
import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { MovieProvider } from './contexts/MovieContext';
import Signin from './pages/Signin';
import Devis from './pages/devis';


function App() {
const movieNumber = 1;


return (

  <MovieProvider >
    <NavBar/>
  <main className='main-content'>
    <Routes>
      
      <Route path="/" element={<Home/>}  />
      <Route path="/favorites" element={<Favorites/>}  />
      <Route path="/signin" element={<Signin/>}  />
      <Route path="/devis" element={<Devis/>}  />
     


    </Routes>
  </main>
  </MovieProvider>
);

}



export default App
