import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



import HomePage from './pages/home/HomePage';
import ArticlePage from './pages/article/ArticlePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import SearchPage from './pages/SearchPage';


import DasboardPage from './pages/admin/DasboardPage';
import CreateNewsPage from './pages/admin/CreateNewsPage';
import NewsListPage from './pages/admin/NewsListPage';


import Footer from './components/footer/Footer';
import PrivateRoute from "./components/protect/PrivateRoute";
import AdminRoute from "./components/protect/AdminRoute";



const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      {/* Public Routes */}
      <Route path='/' element={<HomePage/>}/>
      <Route path='/search/:searchText' element={<SearchPage />}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/article/:article' element={<ArticlePage/>}/>

      {/* Private Routes */}
      <Route path='' element={<PrivateRoute/>}>

      </Route>

      {/* Admin Routes */}
      <Route path='' element={<AdminRoute/>}>
        <Route path='/admin/dashboard' element={<DasboardPage/>}/>
        <Route path='/admin/create-news' element={<CreateNewsPage/>}/>
        <Route path='/admin/newsList' element={<NewsListPage/>}/>
      </Route>
    </Routes>
    <Footer/>
    <ToastContainer />
   </BrowserRouter>
  );
}

export default App;
