
import Login from './components/auth/login';
import Auth from './components/auth/authpage';
import Footer from './components/home/footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home/home';
import Nav from './components/home/navbar';
import Editor from './components/blog/blogedit';
import Bprofile from './components/blogger/bloggerprofile';
import Articles from './components/blog/articles';
import Followers from './components/blogger/followers';
import Blogcon from './components/blog/blogcontent';
import Rprofile from './components/reader/readerProfile';



function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>          
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/editor' element={<Editor/>}/>
      <Route path='followers' element={<Followers/>}/>
      <Route path='posts'>
          <Route path=':id' element={<Blogcon/>}/>
      </Route>
      <Route path="profile">
        <Route path='blogger'>
          <Route path=':name' element={<Bprofile/>}>
            <Route path="followers" element={<Followers/>}/>
            <Route path='articles' element={<Articles/>}/>
          </Route>
        </Route>
        <Route path='user'>
          <Route path=':name' element={<Rprofile/>}></Route>
        </Route>
      </Route>

      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
