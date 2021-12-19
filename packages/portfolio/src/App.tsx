import React from 'react'
import './App.scss'

import {
  Brightness,
  Codepen,
  Github,
  LinkedIn,
  Translate,
  Figma,
  Codewars,
  Email,
  images,
} from './assets'
import Link from './assets/icons/Link'

import {Button} from './components/Button'

function App() {
  return (
    <div className="App">
      <div className="hero">
        <div className="container">
          <header>
            <ul>
              <li>
                <a href="#">Sobre Mí</a>
              </li>
              <li>
                <a href="#">Proyectos</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <Translate />
              </li>
              <li>
                <Brightness />
              </li>
            </ul>
          </header>
          <div className="hero-content">
            <div className="content">
              <div className="presentation">
                <p>
                  ¡Hola!, Soy <b>Christian Amaya</b>, desarrollador web
                </p>
              </div>
              <div className="call-to-action">
                <Button text="CV" />
              </div>
              <div className="social-media">
                <LinkedIn />
                <Codepen />
                <Github />
                <Figma />
                <Codewars />
                <Email />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about-me">
        <div className="container">
          <div className="title">
            <h1>Sobre Mí</h1>
          </div>
          <div className="about-me-content">
            <p>
              Soy desarrollador web con 2 años de experiencia. Graduado de la
              licenciatura en Tecnologías de la Información y la Comunicación.
              en la Universidad Interámericana para el Desarrollo en México.
            </p>
            <p>
              Soy una persona autodidacta y busco constantemente afianzar mis
              conocimientos y aprender lo mas nuevo en tecnología. Actualmente
              me encuentro masterizando React, Jest y Docker con WSL y buscaré
              en el futuro hacer una maestría.
            </p>
            <p>
              A lo largo de mi preparación, he hecho mas de 30 pequeños
              proyectos y al menos 2 proyectos grandes.
            </p>
            <p>
              Mis conocimientos o stack, los defino de la siguiente manera:
              <br />
              <b>Avanzado:</b> HTML, CSS, JavaScript, Typescript, Vue, Node.
              <br />
              <b>Medio:</b> React, Angular, Linux, Docker, MongoDB, MySQL,
              TDD/Jest, Git, Socket.io <br />
              <b>Prior Experience:</b> Zoho, Genexus, D3.js, React Native.
            </p>
            <p>
              Mi nivel de inglés considero que es B2, lamentablemente aún no
              recibo mis resultados del Examén TOEIC el cual lo realicé el
              07/2021, aunque tengo un certificado online emitido departe de
              EFSET.
            </p>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="title">
          <h1>Proyectos</h1>
        </div>

        <div className="cards">
          <div className="card">
            <div className="container">
              <div className="card-content">
                <div className="card-text">
                  <div className="title">
                    <h2>Proyecto 1</h2>
                  </div>
                  <div className="card-info">
                    <p>
                      El juego clásico de la infancia, en él podrás jugar contra
                      la computadora o en linea y elegir entre la variante
                      clásica de "piedra, papel y tijeras" ó "piedra, papel,
                      tijeras, lagarto, spock".
                    </p>
                    <p>
                      Los Archivos del proyecto son ofrecidos por
                      frontendmentor.io
                    </p>
                    <div className="card-buttons">
                      <div>
                        <Button text="Ver" />
                        <Button>
                          <Link color="#1a3852" />
                        </Button>
                        <Button>
                          <Github color="#1a3852" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <figure className="card-img">
                  <img src={images.rock_paper_scissors} alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <div className="card-content">
                <div className="card-text">
                  <div className="title">
                    <h2>Proyecto 2</h2>
                  </div>
                  <div className="card-info">
                    <p>
                      El juego clásico de la infancia, en él podrás jugar contra
                      la computadora o en linea y elegir entre la variante
                      clásica de "piedra, papel y tijeras" ó "piedra, papel,
                      tijeras, lagarto, spock".
                    </p>
                    <p>
                      Los Archivos del proyecto son ofrecidos por
                      frontendmentor.io
                    </p>
                    <div className="card-buttons">
                      <div>
                        <Button text="Ver" />
                        <Button>
                          <Link />
                        </Button>
                        <Button>
                          <Github color="#fff" />
                        </Button>
                      </div>
                      <div className="github"></div>
                    </div>
                  </div>
                </div>
                <figure className="card-img">
                  <img src={images.camport} alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <div className="card-content">
                <div className="card-text">
                  <div className="title">
                    <h2>Proyecto 3</h2>
                  </div>
                  <div className="card-info">
                    <p>
                      El juego clásico de la infancia, en él podrás jugar contra
                      la computadora o en linea y elegir entre la variante
                      clásica de "piedra, papel y tijeras" ó "piedra, papel,
                      tijeras, lagarto, spock".
                    </p>
                    <p>
                      Los Archivos del proyecto son ofrecidos por
                      frontendmentor.io
                    </p>
                    <div className="card-buttons">
                      <div>
                        <Button text="Ver" />
                        <Button>
                          <Link color="#1a3852" />
                        </Button>
                        <Button>
                          <Github color="#1a3852" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <figure className="card-img">
                  <img src={images.mathFights} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
