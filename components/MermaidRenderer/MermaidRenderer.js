// components/MermaidRenderer.js
"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

const MermaidRenderer = ({ chart }) => {
  const [isClient, setIsClient] = useState(false);
  const mermaidRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && mermaidRef.current) {
      mermaid.initialize({ startOnLoad: true });
      mermaid.contentLoaded();
    }
  }, [isClient]);

  // Dynamically prepend the initialization configuration to the chart data
  const formattedChart = `%%{init: {'theme':'dark'}}%%\n${chart}`;

  return (
    <div className="mermaid" ref={mermaidRef}>
      {formattedChart}
    </div>
  );
};

export default MermaidRenderer;
