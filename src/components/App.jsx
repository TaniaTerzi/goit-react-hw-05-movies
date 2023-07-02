// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import React from 'react';
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";

const Home = lazy(() => import("../Pages/Home"));
const Movies = lazy(() => import("../Pages/Movies"));
const MovieDetails = lazy(() => import("../Pages/MovieDetails"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));


// import Home from "../Pages/Home";
// import Movies from "../Pages/Movies";
// import MovieDetails from "Pages/MovieDetails";
// import Cast from "./Cast";
// import Reviews from "./Reviews";

 function App() {
  return (
   
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />        
          <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="revievs" element={<Reviews />} />
        </Route>
          <Route path="*" index element={<Home />} />
        </Route>
      </Routes>
  
  );
}

export default App;