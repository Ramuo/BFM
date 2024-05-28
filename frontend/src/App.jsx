import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



import HomePage from './pages/home/HomePage';
import ArticlePage from './pages/article/ArticlePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';



import Header from './components/header/Header';
import Footer from './components/footer/Footer';


const App = () => {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/article/:article' element={<ArticlePage/>}/>
    </Routes>
    <Footer/>
    <ToastContainer />
   </BrowserRouter>
  );
}

export default App;
