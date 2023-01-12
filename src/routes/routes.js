import FirstExercise from "../pages/FirstExercise";
import Animation from "../pages/Animation";

const routes = [
  {
    path: "/",
    name: "First Exercise",
    element: <FirstExercise />,
  },
  {
    path: "/animation",
    name: "Animation",
    element: <Animation />,
  },
];

export default routes;
