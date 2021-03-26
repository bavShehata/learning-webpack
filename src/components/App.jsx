import '../styles/index.css';
import Recipes from './Recipes';
import sword from '../images/swc-sword.png';
import swordSVG from '../images/sword.svg';
const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>HELLO THERE REACT</h1>
        </section>
        <img src={sword} alt="sword" />
        <img src={swordSVG} alt="swordSvg" />
        <Recipes />
      </main>
    </>
  );
};

export default App;
