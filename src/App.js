import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className='bg'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
