import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/User/Home";
import DestinationDetail from "./pages/User/destination/DestinationDetail";
import DestinationList from "./pages/User/destination/DestinationList";
import TourList from "./pages/User/tour/TourList";
import TourDetail from "./pages/User/tour/TourDetail";
import DealList from "./pages/User/deal/DealList";
import DealDetail from "./pages/User/deal/DealDetail";
import WishList from "./pages/User/wishlist/WishList";
import Bookings from "./pages/User/booking/Bookings";
import BlogList from "./pages/User/blog/BlogList";
import BlogDetail from "./pages/User/blog/BlogDetail";
import About from "./pages/User/about/About";
import Profile from "./pages/User/profile/Profile";
import Login from "./pages/User/auth/Login";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AdminLayout from "./layouts/AdminLayout";
import AdminDestination from "./pages/Admin/AdminDestination/AdminDestination";
import AdminTourPackage from "./pages/Admin/AdminTourPackage/AdminTourPackage";
import AdminBlog from "./pages/Admin/AdminBlog/AdminBlog"
import Signup from "./pages/User/auth/Signup";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminCountry from "./pages/Admin/AdminCountry/AdminCountry";
import AdminCity from "./pages/Admin/AdminCity/AdminCity";
function App() {
  return (
    <>
      <Routes>
        {/*User*/}
        <Route element={<ProtectedRoute role={["customer","admin"]} navigateRoute="/" />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="/destinations" element={<DestinationList />} />
          <Route path="/tours" element={<TourList />} />
          <Route path="/tours/:id" element={<TourDetail />} />
          <Route path="/deals" element={<DealList />} />
          <Route path="/deals/:id" element={<DealDetail />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        {/*Admin*/}
        <Route element={<ProtectedRoute role={["admin"]} navigateRoute="/adminlogin" />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="countries" element={<AdminCountry />} />

            <Route path="destinations" element={<AdminDestination />} />
             <Route path="tours" element={<AdminTourPackage />} />
             <Route path="blogs" element={<AdminBlog />} />
            <Route path="cities" element={<AdminCity />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
