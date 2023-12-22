import './App.css';
import { ContextProvider } from './Context';
import Header from './components/Header'
import Introduction from './components/Introduction'
import Services from './components/Services'
import About_Me from './components/AboutMe'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <Introduction />
        <Services />
        <About_Me />
        <Work />
        <Footer />
        <span className='tothetop'>
          <a href="#header">
            <i className="fa-regular fa-circle-up"></i>
          </a>
        </span>
      </ContextProvider>
    </div>
  )
}

export default App
