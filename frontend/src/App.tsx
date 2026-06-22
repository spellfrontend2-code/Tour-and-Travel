import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/User/Home";
import DestinationDetail from "./pages/User/DestinationDetail";
import DestinationList from "./pages/User/DestinationList";
import TourList from "./pages/User/TourList";
import TourDetail from "./pages/User/TourDetail";
import DealList from "./pages/User/DealList";
import DealDetail from "./pages/User/DealDetail";
import WishList from "./pages/User/WishList";
import Bookings from "./pages/User/Bookings";
import BlogList from "./pages/User/BlogList";
import BlogDetail from "./pages/User/BlogDetail";
import About from "./pages/User/About";
import Profile from "./pages/User/Profile";
import Login from "./pages/User/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Admin/Dashboard";




function App() {
  return (
    <>
      <Routes>
        {/*User*/}
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
           <Route path="/login" element={<Login/>}/>
        {/*Admin*/}
        <Route element={<ProtectedRoute/>}>
        <Route path="/admin" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
