import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";
const App = lazy(() => import("./App"));
import "./index.css";
import { HashLoader } from "react-spinners";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
   <Suspense
      fallback={
         <HashLoader
            style={{
               position: "absolute",
               transform: "translate(-50%, -50%)",
               left: "50%",
               top: "50%",
            }}
            color="orange"
            size={100}
         />
      }
   >
      <App />
   </Suspense>,
);
