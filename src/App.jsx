import { useState, useEffect } from 'react'
import './App.css' 


function App() {

  
  return (
    <header>
            <div className='logo'>Gevorg Gevorgyan</div>
      <nav className='navigation-bar'>
          <div className='nav-section'>
            <div className='nav-btn'>ABOUT ME</div>
            <div className='nav-btn'>SKILLS</div>
            <div className='nav-btn'>PORTFOLIO</div>
            <div className='nav-btn'>CONTACTS</div>
          </div>
      </nav>
           <section className='title'>
              <div className='general-text'>
                Hi, i'm Gevorg <br />
                Gevorgyan <br />
                <img className='flag' src="public/image copy.png" alt="public/image copy.png" />
                <h3 className='txt'> Frontend Developer </h3>
              </div>
              <button className='btn-my-work'>VEW MY MORK</button>
           </section>

          <section className='about-me'>
          <div className='about'>
            About Me
          </div>
          <div className='skills'> 
            Skills
            <div className='it-icons'>
            <img src="public/free-icon-java-script-1199124.png" alt="public/free-icon-java-script-1199124.png" />
            <img src="public/free-icon-html-246185.png" alt="public/free-icon-html-246185.png" />
            <img src="public/free-icon-css-1199113.png" alt="public/free-icon-css-1199113.png" />
            <img src="public/react.svg" alt="public/react.svg" />
            </div>
          </div>
          </section>


          <section className='portfolio'>
            <div className='portfolio-text'>
              Portfolio
            </div>
          </section>

          <section className='contact'>
            <div className='constact-text'> 
                Contact
            </div>
            <button className='btn-message'>
              SEND MESSAGE
            </button>
          </section>
    </header>       
  )
}

export default App;
