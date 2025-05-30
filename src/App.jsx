import { useState } from 'react'
import './App.css'
import './modal.css'

function App() {
  const [openModalWindow, setOpenModalWindow] = useState(false);
  const [openWorkModal, setOpenWorkModal] = useState(false);

  const toggleModal = () => {
    setOpenModalWindow(!openModalWindow);
  }

  const workModal = () => {
    setOpenWorkModal(!openWorkModal);
  } 

  return (
    <div className="layout">
  <aside className="sidebar">
    <img src="public/personal_photo/IMG_20250530_125654_183.jpg" alt="Profile" className="profile-photo" />
    <h2 className="sidebar-name">Gevorg Gevorgyan <br /> 19 y/o</h2>
    <p className="sidebar-info">📍 Armenia, Erevan</p>
    <p className="sidebar-info">📧 gevorgyangev006@gmail.com</p>
    <p className="sidebar-info">📞 +374 95 444086</p>
  </aside>

  <main className="main-content">
      <header>
      <div className="logo">MY PERSONAL WEBSITE</div>

      <nav className="navigation-bar">
        <div className="nav-section">
          <div className="nav-btn">ABOUT ME</div>
          <div className="nav-btn">SKILLS</div>
          <div className="nav-btn">PORTFOLIO</div>
          <div className="nav-btn">CONTACTS</div>
        </div>
      </nav>

      <section className="title">
        <div className="general-text">
          Hi, I'm Gevorg <br />
          Gevorgyan <br />
          <img className="flag" src="/image copy.png" alt="flag" />
          <h3 className="txt">Frontend Developer</h3>
        </div>
        <div className='work-btn-container'>
        <button className="btn-my-work" onClick={workModal}>VIEW MY WORK</button>
        </div>
      </section>

      <section className="about-me">
        <div className="about">About Me</div>
        <div className="skills">
          Skills
          <div className="it-icons">
            <img src="/free-icon-java-script-1199124.png" alt="JS" />
            <img src="/free-icon-html-246185.png" alt="HTML" />
            <img src="/free-icon-css-1199113.png" alt="CSS" />
            <img src="/react.svg" alt="React" />
          </div>
        </div>
      </section>

      <section className="portfolio">
        <div className="portfolio-text">Portfolio</div>
      </section>

      <section className="contact">
        <div className="constact-text"></div>
        <div className='contact-container'>
        <button className="btn-message" onClick={toggleModal}>
          CONTACT ME
        </button>
        </div>
      </section>

      {openWorkModal && (
        <div className="work-modal-overlay" onClick={workModal}>
          <div className="work-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={workModal}>X</span>
            <h2 className='github-text'>htis is my GitHub </h2>
        <a 
        href="https://github.com/"
        target='_blank'
        rel="noopener noreferrer"
        >
          <img 
          src="public/icons/github-logo.png" 
          alt="GitHub" 
          className='github-icon'
          />

        </a>
          </div>
        </div>
      )}      

      {openModalWindow && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={toggleModal}>X</span>
            <h2>you can contact me 👇</h2> <br />
            <div>+374-95-444-086 📞</div>
        <a
          href="https://www.instagram.com/gev_.04?igsh=eDNjamw4bmluZ29s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="public/icons/instagram.png"
            alt="Instagram"
            className="contact-logo"
          />
        </a>

        <a
          href="https://t.me/aratta_04" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="public/icons/telegram.png"
            alt="Telegram"
            className="contact-logo"
          />
        </a>
          </div>
        </div>
      )}
    </header>

  </main>
</div>
    
  );
}

export default App;