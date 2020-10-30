import NNavbar from './components/navbar/navbar'
import Home from './components/home/home'
import Features from './components/features/features'
import Blogs from './components/blogs/blogs'
import About from './components/about/about'
import Contacts from './components/contacts/contacts'
import './App.css'




function App() {
  return (
    <div className="App">
        <NNavbar id="navbar" />
        <Home id="home"/>
        <About id="about" />
        <Features id="features" />
        <Blogs id="blogs" />
        <Contacts id ="contacts"/>
      
    </div>
  );
}

export default App;
