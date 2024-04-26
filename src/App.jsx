import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NavBar from "./components/NavBar";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Index />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <NavBar />
              <Box p={5}>About Page Placeholder</Box>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
