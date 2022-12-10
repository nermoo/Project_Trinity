import { useState } from 'react';
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
import Readerprofile from './components/reader/readerProfile';
import SavedItems from './components/reader/savedItems';
import Signup from './components/auth/signup';
import About from './components/blogger/aboutuser';
import { AppContext } from './context';



function App() {

  const [activeTab,setActiveTab] = useState('');

  const dispatchActiveTab = (tabName) => {
    // switch (actionType)
    setActiveTab(tabName);
  }

  return (
    <div className="App">
      <AppContext.Provider value={{ activeTab, dispatchActiveTab }}>
      <Router>
        <Nav/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>          
      <Route path='auth'>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Route>

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
          <Route path=':name' element={<Readerprofile/>}>
            <Route path='saved' element={<SavedItems/>}/>
            <Route path='following' element={<Followers/>}/>
          </Route>
        </Route>
      </Route>
      <Route path=':id/about' element={<About/>}/>
      </Routes>
      {/* <Footer/> */}
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
