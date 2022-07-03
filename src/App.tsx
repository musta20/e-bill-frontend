import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createClient, Provider } from "urql";
import Home from "../src/pages/home";
import Login from "../src/pages/login";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile/Profile";
import { ChakraProvider, theme } from "@chakra-ui/react";

const client = createClient({
  url: `${process.env.REACT_APP_BACKEND_URL as string}/graphql`,
  fetchOptions: {
    credentials: "include",
  },
});

export const App = () => (
  <Provider value={client}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Registration" element={<Registration />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route
            path="/Profile"
            element={
              <Profile/>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);
