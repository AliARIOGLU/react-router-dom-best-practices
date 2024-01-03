import { generatePath } from "react-router-dom";
import routes from "../routes";

export const url = (path, params = {}) => {
  let lastRoute, urlString;

  path.split(".").map((p) => {
    if (!lastRoute) {
      lastRoute = routes.find((r) => r.name === p);
      urlString = lastRoute.path;
    } else {
      lastRoute = lastRoute.children.find((r) => r.name === p);
      urlString += "/" + lastRoute.path;
    }
  });

  return generatePath(urlString.replace(/\/\//gi, "/"), params);
};
