// import logo from "./logo.svg";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Copyright from './components/Copyright';
import Bike from './components/Bike';
import Bike2 from './components/Bike2';
import Sidebar from './components/Sidebar';
import Features from './components/Features';
import Form from './components/Form';
import Specs from './components/Specs';
import Gallery from './components/Gallery';
import More from './components/More';
import Error from './components/Error';
import Footer from './components/Footer';

function App() {
  return (
    <section className='main-grid'>
      <Navbar />
      {/* main  component */}

      <main className='bg-black text-dimWhite flex relative overflow-y-auto '>
        {/* sidebar component */}
        <Sidebar />
        {/* <div className="content "> */}
        <Routes>
          {/* <Route path="/" element={<Bike />} /> */}
          <Route path='/' element={<Bike2 />} />
          <Route path='features' element={<Features />} />
          <Route path='form' element={<Form />} />
          <Route path='specs' element={<Specs />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='more' element={<More />} />
          <Route path='*' element={<Error />} />
        </Routes>
        {/* </div> */}
      </main>
      <Footer />
      <Copyright />
    </section>
  );
}
export default App;
