import LevelingPage from "./pages/leveling";
import ProfessionsPage from "./pages/professions";
import NotFound from "./pages/NotFound";

export const routers = [
  {
    path: "/",
    name: "leveling",
    element: <LevelingPage />,
  },
  {
    path: "/professions",
    name: "professions",
    element: <ProfessionsPage />,
  },
  /* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */
  {
    path: "*",
    name: "404",
    element: <NotFound />,
  },
];

declare global {
  interface Window {
    __routers__: typeof routers;
  }
}

window.__routers__ = routers;