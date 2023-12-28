import Home from "./screens/home";
import Login from "./screens/login"
// import Books from "./baseComponents/books"
import BookDetail from "./screens/bookdetails";
import Account from "./screens/account"
// import Register from "./baseComponents/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Inter as FontSans } from "next/font"
// import ThemeProvider from "./components/layout/ThemeProvider";
import { useSelector } from "react-redux";
const App = () => {
  const user = useSelector((state) => state?.user);
  // const fontSans = ({
  //     subsets: ["latin"],
  //     variable: "--font-sans",
  // })
  // // Font files can be colocated inside of `pages`
  // const fontHeading = ({
  //     src: "./assets/fonts/CalSans-SemiBold.woff2",
  //     variable: "--font-heading",
  // })

  return (
    <main className="">
      <Router>
        <Routes>
          <Route element={<Home />} path="/books" />
          <Route element={<Login />} path="/login" />
          {/* <Route element={<Register />} path="/register" /> */}
          {/* <Route element={<Books />} path="/books" /> */}
          <Route element={<BookDetail />} path="/books/:id" />
          <Route element={<Account />} path="/account" />
        </Routes>
      </Router>
    </main>
  );
};
export default App;
