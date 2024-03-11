

import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

import Headers from './components/Headers';
import Contact from './Contact';
import CheckoutPage from './components/Checkout';
import Login from './Login';
import Registration from "./Registration"
function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
<ThemeProvider theme={theme}  > 
<BrowserRouter>
<GlobalStyle/>
<Headers/>

  <Routes>
  
    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/checkout' element={<CheckoutPage/>}/>
    <Route path='/register' element={<Registration/>}/>

  </Routes>
</BrowserRouter>
</ThemeProvider> 
  );
}

export default App;