import './style.css';
import { renderHome } from './home';
import { splitLetters } from './splitLetters';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('#app não encontrado');
}

app.innerHTML = renderHome();
splitLetters('.shake-text');
