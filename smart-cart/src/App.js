import "./App.css";
import AllRoutes from "./Pages/AllRoutes/AllRoutes";
import { BodyFour } from "./Pages/HomePage/BodyFour";
import { BodyThree } from "./Pages/HomePage/BodyThree";
import Bodytwo from "./Pages/HomePage/Bodytwo";
import Carousel from "./Pages/HomePage/Carousel";
import Footer from "./Pages/HomePage/Footer";
import { HotDeals } from "./Pages/HomePage/HotDeals";
import { UpperNavbar } from "./Pages/HomePage/UpperNavbar";
import Mens from "./Pages/Mens Page/Mens";

function App() {
  return (
    <div className="App">
      {/* <Mens></Mens> */}
    
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
