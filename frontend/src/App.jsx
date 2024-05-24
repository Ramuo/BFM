import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



import HomePage from './pages/HomePage';



import Header from './components/header/Header';


const App = () => {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
    <ToastContainer />
   </BrowserRouter>
  );
}

export default App;
