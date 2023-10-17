/* eslint-disable */

import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { url } from "./utils";

function App() {
  // console.log(
  //   url("home.blog.post", {
  //     id: 3,
  //   })
  // );

  return useRoutes(routes);
}

export default App;
