"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [canvasWidth, setCanvasWidth] = useState<number>(1440);
  const [canvasHeight, setCanvasHeight] = useState<number>(700);

  useEffect(() => {
    const UnicornStudio = require("./assets/unicornStudio.umd.js");
    UnicornStudio.init();

    function handleWindowResize() {
      setCanvasWidth(window.innerWidth);
      setCanvasHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      className="unicorn-embed w-693px h-693px"
      // style={{ width: "1440px", height: "680px" }}
      style={{ width: `${canvasWidth}px`, height: `${canvasHeight}px` }}
      data-us-project="DqAz5E9Ms36uDxhxAOCl"
      // data-us-project-src="path/to/your/PROJECT_ID.json"
      data-us-scale="1"
      data-us-dpi="1.5"
      // data-us-disableMobile="true"
      // data-us-altText="Welcome to Unicorn Studio"
      // data-us-ariaLabel="This is a canvas scene"
    ></div>
  );
}
