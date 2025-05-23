import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Certifications} from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
        <About/>
        <Tech/>
        <Experience/>
        <Works/>
        <Certifications/>
        {/*
        <Feedbacks/>*/}
        <div className='relative z-0'>
          <Contact></Contact>
          <StarsCanvas></StarsCanvas>
        </div> 
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
