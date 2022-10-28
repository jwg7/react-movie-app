import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import NavLayout from "./Layouts/NavLayout";
import HomePage from "./Pages/HomePage";
import MovieListPage from "./Pages/MovieListPage";
import MovieLayout from "./Layouts/MovieLayout"

const App = () => {

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: '/movies',
        element: <MovieLayout/>,
        children: [
          {
            index: true,
            element: <MovieListPage/>
          }
        ]
      }
    ]
  }
])

	return (
		<div className="App-header">
<RouterProvider router={router} />
		</div>
	);
}

export default App;
