import React, { useState } from "react";
import { WorkItem } from "./WorkItem";
import AIArtGalleryContent from "./AIArtGalleryContent";
import WavesContent from "./WavesContent";
import SplineContent from "./SplineContent";

export const Projects = () => {
  const [project, setProject] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-8">
      {!project && (
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          <div onClick={() => setProject("aiArt")}>
            <WorkItem
              company="AI Art Gallery"
              description="A digital gallery with art generated by MidJourney and DALL•E"
              timeline="Feb 2023 - Present"
            />
          </div>
          <div onClick={() => setProject("waves")}>
            <WorkItem
              company="Waves NFT Collection"
              description="5000 randomly generated sound waves with AI generated song titles"
              timeline="Sept 2021"
            />
          </div>
          <div onClick={() => setProject("spline")}>
            <WorkItem
              company="Spline Explorations"
              description="3D animations created in Spline"
              timeline="July 2023 - Present"
            />
          </div>
          <div>
            <WorkItem
              company="MIM Art Gallery"
              description="An apartment art gallery in NYC showcasing various diverse art styles"
              timeline="COMING SOON"
            />
          </div>
        </div>
      )}
      {project === "aiArt" && (
        <AIArtGalleryContent onBackClick={() => setProject(null)} />
      )}
      {project === "waves" && (
        <WavesContent onBackClick={() => setProject(null)} />
      )}
      {project === "spline" && (
        <SplineContent onBackClick={() => setProject(null)} />
      )}
    </div>
  );
};
