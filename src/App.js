import logo from './logo.svg';
import './App.css';
import { Blogs } from './components/Blogs';
import { useContext, useEffect } from 'react';
import { Appcontext } from './context/appcontext';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
function App() {

  const {fetchblogpost}=useContext(Appcontext);
  useEffect(()=>{
    fetchblogpost();
  },[])
  return (
    <div className="App">
     <Header/>
     <hr></hr>
     <Blogs/>
     <hr></hr>
     <Footer/>
    </div>
  );
}

export default App;
