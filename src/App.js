import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import WhyFiber from "./components/WhyFiber";
import Diversify from "./components/Diversify";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
// import SignIn from "./components/SignIn";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className="mains">
        <WhyFiber />
        <Diversify />
        <Portfolio />
      </div>
      <Footer />

      {/* <SignIn/> */}
    </>
  );
}

export default App;
