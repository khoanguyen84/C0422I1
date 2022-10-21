import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Post from './components/Post/Post';
import Gift from './components/Gift/Gift';
import ToDo from './components/ToDo/ToDo';

function App() {
  return (
    <>
      <Header />
      {/* <Main /> */}
      {/* <Login/> */}
      {/* <Post /> */}
      {/* <Gift /> */}
      <ToDo />
      <Footer />
    </>
  );
}

export default App;