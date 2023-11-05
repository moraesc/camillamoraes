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
              role="Creator"
              description="A digital art gallery showcasing art created by MidJourney and DALL•E"
              timeline="Feb 2023 - Present"
              isSelected={project === "aiArt"}
            />
          </div>
          <div onClick={() => setProject("waves")}>
            <WorkItem
              company="Waves NFT Collection"
              role="Developer and NFT Artist"
              description="A collection of 5000 randomly generated sound waves with AI generated song titles"
              timeline="Sept 2021"
              isSelected={project === "waves"}
            />
          </div>
          <div onClick={() => setProject("spline")}>
            <WorkItem
              company="Spline Explorations"
              role="Contributor"
              description="3D Art created by the Spline Tool"
              timeline="July 2023 - Present"
              isSelected={project === "spline"}
            />
          </div>
          <div>
            <WorkItem
              company="MIM Art Gallery"
              role="Developer"
              description="An apartment art gallery in NYC that curates art from a variety of artists."
              timeline="COMING SOON"
              isSelected={project === "mimArt"}
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
