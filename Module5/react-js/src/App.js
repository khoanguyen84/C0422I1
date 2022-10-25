import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route} from 'react-router-dom'; 
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Post from './components/Post/Post';
import Gift from './components/Gift/Gift';
import ToDo from './components/ToDo/ToDo';
import Student from './components/Student/Student';
import Content from './components/Content/Content';
import MenuLeft from './components/MenuLeft/MenuLeft';
import ClassItem from './components/Class/ClassItem';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          <MenuLeft />
          <Routes>
              <Route path='/student/:classid' element={<ClassItem/>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
