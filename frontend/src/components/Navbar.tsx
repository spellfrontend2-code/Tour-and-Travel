import {
  Book,
  BookOpen,
  ChevronDown,
  Heart,
  House,
  LogIn,
  LogOut,
  Map,
  Mountain,
  Pyramid,
  Settings,
  User,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "../assets/hero.png";

const Languages = [
  { label: "en", value: "English" },
  { label: "es", value: "Spanish" },
  { label: "fr", value: "French" },
];
const Currencies = [
  { label: "USD", value: "USD" },
  { label: "EUR", value: "EUR" },
  { label: "GBP", value: "GBP" },
];
const user = {name:"John Doe",avatar:"https://i.pravatar.cc/150?img=3"};
// const user = null;
const navItems = [
  { label: "Home", icon: House, path: "/" },
  { label: "Destinations", icon: Map, path: "/destinations" },
  { label: "Tours", icon: Mountain, path: "/tours" },
  { label: "Deals", icon: Pyramid, path: "/deals" },
  {label:"Wishlist", icon: Heart, path:"/wishlist"},
  {label:"Bookings", icon: Book, path:"/bookings"},
  { label: "Blog", icon: BookOpen, path: "/blog" },
  { label: "About", icon: Users, path: "/about" },
];
function Navbar() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(Languages[0].value);
  const [selectedCurrency, setSelectedCurrency] = useState(Currencies[0].value);
  return (
    <nav className="flex flex-col p-4 bg-gray-900 text-gray-300 h-screen">
      <span className="flex items-center gap-2"><img src={Logo} alt="Logo" className="w-10 mb-6" />Tour & Travel</span>
            <hr className="my-4 border-t border-gray-300" />
      <section className="space-y-4 flex flex-col justify-between w-full">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="flex items-center gap-2 w-full"
          >
            <Button variant="navActive" className="w-full cursor-pointer">
              <item.icon size={20} />
              {item.label}
            </Button>
          </Link>
        ))}
      </section>
      <hr className="my-4 border-t border-gray-300" />
      <section className="space-y-4 flex-1 flex-col  justify-between">
        <h3>System</h3>
        Languages
        <DropdownMenu open={languageOpen} onOpenChange={setLanguageOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between text-black"
            >
              {selectedLanguage}

              <ChevronDown
                className={`transition-transform ${
                  languageOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {Languages.map((language) => (
              <DropdownMenuItem
                key={language.value}
                onClick={() => setSelectedLanguage(language.value)}
              >
                {language.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        Currency
        <DropdownMenu open={currencyOpen} onOpenChange={setCurrencyOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between text-black"
            >
              {selectedCurrency}

              <ChevronDown
                className={`transition-transform ${
                  currencyOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            {Currencies.map((currency) => (
              <DropdownMenuItem
                key={currency.value}
                onClick={() => setSelectedCurrency(currency.value)}
              >
                {currency.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link to="/settings" className="flex items-center gap-2">
        <Button variant="navActive" className="w-full cursor-pointer">
          <Settings />
          Settings
        </Button>
        </Link>
      </section>
      <hr className="my-4 border-t border-gray-300" />
      <section className="space-y-4">
        {user ? (
          <>
            <Link to="/profile" className="flex items-center gap-2">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <User />
              )}
              <span>{user?.name}</span>
            </Link>
            <Link to="/logout" className="flex items-center gap-2 text-red-500">
              <LogOut /> Logout
            </Link>
          </>
        ) : (
          <Link to="/login" className="flex items-center gap-2">
            <LogIn /> Login
          </Link>
        )}
      </section>
    </nav>
  );
}

export default Navbar;
