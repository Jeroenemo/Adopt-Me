import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { SearchParams } from "./SearchParams";
import { WrappedDetails } from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("#F06D06")
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<WrappedDetails />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "brand" }, "About Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Attila",
//       animal: "Cat",
//       breed: "Dumpster cat",
//     }),
//     React.createElement(Pet, {
//       name: "Moraine",
//       animal: "Chicken",
//       breed: "Saphire Blue",
//     }),
//   ]);
// };

render(<App />, document.getElementById("root"));
