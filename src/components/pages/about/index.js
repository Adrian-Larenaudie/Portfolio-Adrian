/* eslint-disable import/no-duplicates */
/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './styles.scss';
import './animations.scss';
import IMG from './CV.jpg';

// eslint-disable-next-line arrow-body-style
const About = () => {
  return (
    <div className="about" id="about">

      <Fade duration={1000} delay={700} top distance="30%">
        <h1 className="pageBackground">about</h1>
      </Fade>

      <div className="about__someWordsContainer">

        <Fade top duration={500} delay={200}>
          <h1 className="about__someWordsContainer__title">
            Quelques
            <span> mots</span>
          </h1>
        </Fade>

        <Fade bottom duration={500} delay={200} distance="20%">
          <p className="about__someWordsContainer__text">
            En juillet 2021, j'ai débuté une reconversion professionnelle dans le développement web en autodidacte avant d'intégrer l'école O'clock pour une formation intensive à partir de Janvier 2022.
            <br />
            <span>42</span>
            Ce qui à l'origine était un simple projet de reconversion est très vite devenu une passion
            <Link className="about__someWordsContainer__link" to="/Skills&Technos"> voici mes compétences.</Link>
            <br />
            <span>42</span>
            Depuis ma soif d'apprendre ne cesse de croître et l'univers
            du code m'accompagne au quotidien.
            <br />
            <span>42</span>
            Si vous souhaitez me contacter,
            <Link className="about__someWordsContainer__link" to="/contact"> c'est par ici.</Link>
          </p>
        </Fade>

      </div>

      <Fade right duration={500} delay={400} distance="20%">
        <div className="about__cvCardContainer">
          <div className="about__cvCardContainer__cvCard">
            <div className="about__cvCardContainer__cvCard__innerCard">
              <div className="about__cvCardContainer__cvCardFront">
                <p className="about__cvCardContainer__cvCard__text">Voir mon CV</p>
              </div>
              <div className="about__cvCardContainer__cvCardBack">
                <a href="/resume.pdf"><img src={IMG} alt="cv" /></a>
              </div>
            </div>
          </div>
        </div>
      </Fade>

    </div>
  );
};

export default About;
