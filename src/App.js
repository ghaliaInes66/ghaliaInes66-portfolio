import image from './images/github.jpg';
import flutter from './images/flutter.png';
import web from './images/web.svg';
import desktop from './images/desktop.svg';
import c from './images/c.svg';
import html from './images/html.svg';
import css from './images/css.svg';
import js from './images/js.svg';
import NodeJs from './images/nodejs.svg';
import react from './images/react.svg';
import githubtool from './images/githubtool.svg';
import git from './images/git.svg';
import frontendmentor from './images/frontendmentor.png'
import github  from './images/gh.png';
import facebook  from './images/fb.png';
import instagram  from './images/insta.png';
import './App.css';
import React from 'react';


function App() {

  return (
    <div className="App">
        <nav className='desktopNav'>
          <h3 className='logo' >Ghalia <span>Ines</span></h3>
          <a href='#Home' className='active'>Home</a>
          <a href='#services'>Services</a>
          <a href='#progects'>My Projects</a>
          <a href='#footer'>Contact</a>
        </nav>

        <nav className='mobileNav'>
        <h3 className='logo' >Ghalia <span>Ines</span></h3>
        <ion-icon name="menu-outline"></ion-icon>
        </nav>

       <div className='menu'> 
        <ul>
          <li><a href='#Home' className='active'>Home</a></li>
          <li><a href='#services' className='active'>Services</a></li>
          <li> <a href='#progects'className='active'>My Projects</a></li>
          <li><a href='#footer'className='active'>Contact</a></li>
        </ul>
        </div>


    <header>
      <section className='section Home' id='Home'>
        <div className=' content'>
          <h1>Hi,I'm Benghalia Ines Yassamine</h1>
          <p>I'm a computer science student, I have a medium background in web ,mobile app and desktop app development </p>
          <button>Download CV</button>
        </div>
        <img className='portfolioImage' src={image}/>
      </section>
    </header>

      <section className='servises' id='services'>
        <h2>My services</h2>
        <div className='Myservices'>
        <div className='service webSites'>
        <img src={web} />
        <p>A good webSites using html css js React and NodeJs and Express</p>
        </div>
        <div className='service flutterApps'>
          <img src={flutter} />
          <p>simple mobile applications with flutter</p>
        </div>
        <div className='service desktopApps'>
        <img src={desktop} />
        <p>desktop applications using C#</p>
        </div>
        </div>
      </section>
      <section className='section projects' id='progects'>
      <div className=' content'>
          <h2>My progects</h2>
          <p>I made this portfolio website using react. And I have other projects in <a className='active' href='https://github.com/ghaliaInes66'>my github</a>. </p>
        </div>
        <div className='seeProgects'>
          <a href='https://github.com/ghaliaInes66'>
            <div className='link github'>
              <img src={github} />
              <p>My github profile</p>
          </div></a>
          <a href='https://www.frontendmentor.io/profile/ghaliaInes66'>
            <div className='link frontendmentor'>
              <img src={frontendmentor} />
              <p>My frontendmentor profile</p>
          </div></a>
        </div>
      </section>
      <section className='tools'>
        <h2>Languages and tools</h2>
        <div className='list'>
          <div className='tool'> <img src={c} /></div>
          <div className='tool'> <img src={html} /></div>
          <div className='tool'> <img src={css} /></div>
          <div className='tool'> <img src={js} /></div>
          <div className='tool'> <img src={react} /></div>
          <div className='tool'> <img src={NodeJs} /></div>
          <div className='tool'> <img src={githubtool} /></div>
          <div className='tool'> <img src={git} /></div>
          <div className='tool'> <img className='flutter' src={flutter} /></div>
        </div>
      </section>
      <footer id='footer'>
          <div className='contact'>
            <a href='https://github.com/ghaliaInes66'><img src={github} /></a>
            <a href='https://www.facebook.com/profile.php?id=100069822784711'><img src={facebook} /></a>
            <a href='https://www.instagram.com/ghalia_ines66/'><img src={instagram} /></a>
          </div>
      </footer>
    </div>
  );
}

export default App;
