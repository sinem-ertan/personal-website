import { ToastContainer } from "react-toastify";
import "./i18n";
import SettingsBar from "./components/SettingsBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Users from "./components/Users";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import DividerLine from "./components/DividerLine";

function App() {
  return (
    <>
      <div className="flex flex-col w-full items-center bg-white dark:bg-darkerpurple">
        <div className="flex flex-col max-w-6xl">
          <SettingsBar />
          <NavBar />
          <Hero />
          <Users />
          <Skills />
          <DividerLine />
          <Profile />
          <DividerLine />
          <Projects />
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
