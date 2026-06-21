import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TourDetail from "./pages/TourDetail";
import DestinationDetail from "./pages/DestinationDetail";
import DestinationList from "./pages/DestinationList";
import MainLayout from "./layouts/MainLayout";
import TourList from "./pages/TourList";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import DealList from "./pages/DealList";
import WishList from "./pages/WishList";
import Bookings from "./pages/Bookings";
import About from "./pages/About";
import DealDetail from "./pages/DealDetail";
import Profile from "./pages/Profile";


function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="/destinations" element={<DestinationList />} />
          <Route path="/tours" element={<TourList />} />
          <Route path="/tours/:id" element={<TourDetail />} />
          <Route path="/deals" element={<DealList/>}/>
          <Route path="/deals/:id" element={<DealDetail/>}/>
          <Route path="/wishlist" element={<WishList/>}/>
          <Route path="/bookings" element={<Bookings/>} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/about" element={<About/>}/>
           <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
