// import React from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import Nav from "./Nav";

// const Header = () => {
//   return (
//     <MainHeader>
//       <NavLink to="/">
//         <img className="logo" src="./images/your-store-high-resolution-logo.png" alt="my logo img" />
//       </NavLink>
//       <Nav />
//     </MainHeader>
//   );
// };

// const MainHeader = styled.header`
//   padding: 0 4.8rem;
//   height: 15rem;
//   background-color: ${({ theme }) => theme.colors.bg};
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;

//   .logo {
//     height: 15rem;

//   }
// `;
// export default Header;
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  // Get the current location using useLocation hook
  const location = useLocation();

  // Define an array of paths where you want to hide the header
  const hideHeaderPaths = ['/', '/register','/sellerregister','/sellerlogin'];

  // Check if the current location's path is included in hideHeaderPaths
  const hideHeader = hideHeaderPaths.includes(location.pathname);

  // If hideHeader is true, return null to hide the header
  if (hideHeader) {
    return null;
  }

  // Otherwise, render the header
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo" src="./images/your-store-high-resolution-logo.png" alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 15rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 15rem;
  }
`;

export default Header;
