import BreakingNews from "../../components/BreakingNews/BreakingNews";
import Header from "../../components/Header/Header";
import Navbar from "../../components/NavBar/Navbar";
import HomePageLayout from "./HomePageLayout";

const Home = () => {
  document.title = "Home";
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <HomePageLayout />
    </div>
  );
};

export default Home;
