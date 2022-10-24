import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Post from './components/Post/Post';
import Gift from './components/Gift/Gift';
import ToDo from './components/ToDo/ToDo';
import Student from './components/Student/Student';

function App() {
  return (
    <>
      <Header />
      {/* <Main /> */}
      {/* <Login/> */}
      {/* <Post /> */}
      {/* <Gift /> */}
      {/* <ToDo /> */}
      <Student/>
      <Footer />
    </>
  );
}

export default App;
