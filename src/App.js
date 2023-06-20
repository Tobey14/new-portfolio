import './styles/App.scss';
import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';
import Projects from './pages/Projects';
import AccessError from './pages/404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Layout />
        }>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='*' element={<AccessError />} />        
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
