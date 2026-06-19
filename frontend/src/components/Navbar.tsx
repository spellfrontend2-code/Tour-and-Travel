import {
  Book,
  BookOpen,
  ChevronDown,
  CircleChevronRight,
  DollarSign,
  Euro,
  Globe,
  Heart,
  House,
  LogIn,
  LogOut,
  Map,
  Menu,
  Mountain,
  PoundSterling,
  Pyramid,
  Settings,
  User,
  Users,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
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
  { label: "USD", value: "USD", symbol: DollarSign },
  { label: "EUR", value: "EUR", symbol: Euro },
  { label: "GBP", value: "GBP", symbol: PoundSterling },
];
const user = { name: "John Doe", avatar: "https://i.pravatar.cc/150?img=3" };
// const user = null;
const navItems = [
  { label: "Home", icon: House, path: "/" },
  { label: "Destinations", icon: Map, path: "/destinations" },
  { label: "Tours", icon: Mountain, path: "/tours" },
  { label: "Deals", icon: Pyramid, path: "/deals" },

  { label: "Wishlist", icon: Heart, path: "/wishlist" },
  { label: "Bookings", icon: Book, path: "/bookings" },
  { label: "Blog", icon: BookOpen, path: "/blogs" },
  { label: "About", icon: Users, path: "/about" },
];

interface NavbarProps {
  navbarCollapse: boolean;
  setNavbarCollapse: React.Dispatch<React.SetStateAction<boolean>>;
  isSmallScreen: boolean;
}
function Navbar({
  navbarCollapse,
  setNavbarCollapse,
  isSmallScreen,
}: NavbarProps) {
  const location = useLocation();
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(Languages[0].value);
  const [selectedCurrency, setSelectedCurrency] = useState(Currencies[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const CurrencyIcon = selectedCurrency.symbol;
  return (
    <div
      className={`relative h-screen ${isSmallScreen ? "w-0" : navbarCollapse ? "w-20" : "w-64"} transition-all duration-300 `}
    >
      {isSmallScreen && menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
      {(!isSmallScreen || menuOpen) && (
        <nav
          className={`relative flex flex-col p-4 bg-gray-900 text-gray-300 overflow-y-auto scrollbar-none transition-all duration-300 ${isSmallScreen ? `fixed left-0 top-0 z-50 h-screen w-64 shadow-xl` : "w-full h-screen"}`}
        >
          <div className="flex items-center gap-2">
            <img src={Logo} className="w-10" />

            <span
              className={`text-2xl font-bold whitespace-nowrap overflow-hidden transition-all duration-300 ${navbarCollapse ? "w-0 opacity-0" : "w-auto opacity-100"} `}
            >
              Tour & Travel
            </span>
          </div>
          <hr className="my-4 border-t border-gray-300" />
          <section className="space-y-1.5 flex flex-col w-full">
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (item.path !== "/" && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className="w-full focus:outline-none"
                >
                  <Button
                    variant="none"
                    className={`w-full flex items-center justify-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${isActive ? "bg-[var(--primary-color)]/10 text-[var(--primary-color)] font-bold" : "hover:bg-slate-900 text-slate-400 hover:text-white font-medium"}`}
                    title={item.label}
                  >
                    <item.icon
                      size={20}
                      strokeWidth={isActive ? 2.5 : 2}
                      className={`shrink-0 transition-colors ${isActive ? "text-[var(--primary-color)]" : "text-slate-400 group-hover:text-white"}`}
                    />

                    <span
                      className={`whitespace-nowrap transition-all duration-300 ${navbarCollapse ? "hidden" : "block"}`}
                    >
                      {item.label}
                    </span>
                  </Button>
                </Link>
              );
            })}
          </section>

          <hr className="my-4 border-t border-gray-300" />

          <section className="space-y-4 flex-1 flex-col justify-between text-sm font-medium">
            {!navbarCollapse && "Languages"}
            <DropdownMenu open={languageOpen} onOpenChange={setLanguageOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="greyButton"
                  className={`w-full justify-between mt-2 p-1`}
                >
                  <div className="flex items-center gap-1">
                    <Globe className="size-4" />
                    {!navbarCollapse && selectedLanguage}
                  </div>
                  <ChevronDown
                    className={`transition-transform size-4 ${languageOpen ? "rotate-180" : ""}`}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="!p-0 bg-gray-600">
                {Languages.map((language, index) => (
                  <DropdownMenuItem
                    key={language.value}
                    onClick={() => setSelectedLanguage(language.value)}
                    className={`rounded-none !text-white text-sm font-medium cursor-pointer ${
                      index === 0 ? "border-none" : "border-t border-gray-300"
                    } ${language.value === selectedLanguage ? "bg-gray-500" : "bg-gray-900/50"} hover:!bg-gray-400 hover:!text-gray-800 hover:!font-bold`}
                  >
                    {language.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {!navbarCollapse && "Currency"}
            <DropdownMenu open={currencyOpen} onOpenChange={setCurrencyOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="greyButton"
                  className="w-full justify-between mt-2 p-1"
                >
                  <div className="flex items-center gap-1">
                    <CurrencyIcon />
                    {!navbarCollapse && selectedCurrency.label}
                  </div>

                  <ChevronDown
                    className={`transition-transform ${
                      currencyOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="!p-0 bg-gray-600 border-1 border-gray-700"
              >
                {Currencies.map((currency, index) => (
                  <DropdownMenuItem
                    key={currency.value}
                    onClick={() => setSelectedCurrency(currency)}
                    className={`rounded-none !text-white text-sm font-medium cursor-pointer ${
                      index === 0 ? "border-none" : "border-t border-gray-300"
                    } ${
                      currency.value === selectedCurrency.value
                        ? "bg-gray-500"
                        : "bg-gray-900/50"
                    } hover:!bg-gray-400 hover:!text-gray-800 hover:!font-bold`}
                  >
                    {currency.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/settings" className="w-full focus:outline-none">
              <Button
                variant="none"
                className={`w-full flex items-center ${navbarCollapse ? "justify-center" : "justify-start"} gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white transition-all`}
              >
                <Settings size={20} className="shrink-0" />
                <span className={`${navbarCollapse ? "hidden" : "block"}`}>
                  Settings
                </span>
              </Button>
            </Link>
          </section>
          <hr className="my-4 border-t border-gray-300" />
          <section className="space-y-4">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2"
                >
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <User size={20} />
                  )}

                  <span className={`${navbarCollapse ? "hidden" : "block"}`}>
                    {user?.name}
                  </span>
                </Link>
                <Link
                  to="/logout"
                  className="flex items-center gap-2 text-red-500"
                >
                  <LogOut size={20} />{" "}
                  <p className={`${navbarCollapse ? "hidden" : "block"}`}>
                    Log Out
                  </p>
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2"
              >
                <LogIn size={20} />{" "}
                <p className={`${navbarCollapse ? "hidden" : "block"}`}>
                  Login
                </p>
              </Link>
            )}
          </section>
        </nav>
      )}
      {!isSmallScreen ? (
        <div
          className="absolute top-4 -right-3 bg-gray-800 rounded-full p-1 cursor-pointer shadow "
          onClick={() => setNavbarCollapse(!navbarCollapse)}
        >
          <CircleChevronRight
            className={`transition-transform duration-300 text-white hover:text-[var(--primary-color)] ${navbarCollapse ? "" : "rotate-180"}`}
            size={20}
          />
        </div>
      ) : (
        <div
          className={`fixed cursor-pointer ${menuOpen ? "left-[220px] top-6" : "left-4 top-4"} z-50 cursor-pointer`}
        >
          {!menuOpen ? (
            <Menu
              color={"black"}
              onClick={() => {
                setMenuOpen(true);
                setNavbarCollapse(false);
              }}
              className="w-full h-full bg-[rgb(var(--primary-rgb)/0.3)] rounded-full p-2"
            />
          ) : (
            <X color={"white"} onClick={() => setMenuOpen(false)} />
          )}
        </div>
      )}
    </div>
  );
}
export default Navbar;
