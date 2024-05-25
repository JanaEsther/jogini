import { render } from '@czechitas/render';
import { Header } from '../components/Header/header';
import { Intro } from '../components/Intro/intro';
import { Pose } from '../components/Pose/pose';
import '../global.css';
import './index.css';
import joga from '../img/yoga-pose.jpg';

document.querySelector('#root').innerHTML = render(
  <div id="app" className="app container">
    <Header title="Jogini" />
    <nav>
        <a href="#">domů</a>
        <a href="#">lekce</a>
        <a href="#">náš tým</a>
        <a href="#">události</a>
        <a href="#">kontakt</a>
      </nav>
    <Intro
      nadpis="Vítejte mezi Jogíny"
      odstavec="Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu 
zkusit
 něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
 Postupně se seznámíte se základními principy jógy, jak přístupovat k
 sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
 svoje tělo, pocity a emoce."
    />

    <Pose src={joga} />
  </div>,
);
