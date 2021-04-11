import './App.css';
//import AddToHomescreen from 'react-add-to-homescreen';
import Home from './pages/Home';
import {
  Switch,
  Route,
} from "react-router-dom";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Disclaimer from './pages/Disclaimer';
import PressPackage from './pages/PressPackage';
import Success from './pages/Success';

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);

function App() {

  /* const handleAddToHomescreenClick = () => {
    alert(`
      1. Open Share menu
      2. Tap on "Add to Home Screen" button`
    );
  }; */

  return (
    <div>
      {/* <AddToHomescreen onAddToHomescreenClick={handleAddToHomescreenClick} /> */}
      <Switch>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/terms-of-use">
            <TermsOfUse />
          </Route>
          <Route path="/disclaimer">
            <Disclaimer />
          </Route>
          <Route path="/press-package">
            <PressPackage />
          </Route>
          <Route path="/about">
            <Home scrollToId="aboutSection" />
          </Route>
          <Route path="/blogs">
            <Home scrollToId="blogsSection" />
          </Route>
          <Route path="/how-we-do-it">
            <Home scrollToId="tableSectionHeading" />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
