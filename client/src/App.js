
import Login from './components/login';
import Auth from './components/authpage';
import Followers from './components/followers';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Nav from './components/navbar';
import Editor from './components/blogedit';



function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
          
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/editor' element={<Editor/>}/>

      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
