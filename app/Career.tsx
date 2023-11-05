"use client";

import React, { useState } from "react";
import { WorkItem } from "./WorkItem";
import SoundContent from "./SoundContent";
import AWSContent from "./AWSContent";

export const Career = () => {
  const [project, setProject] = useState<string | null>(null);

  return (
    <div>
      {!project && (
        <div className="flex gap-6 md:gap-8 mb-8">
          <div onClick={() => setProject("sound")}>
            <WorkItem
              company="Sound.xyz"
              description="Building a music NFT platform aimed to empower artists to own their music"
              timeline="Feb 2022 - Oct 2023"
            />
          </div>
          <div onClick={() => setProject("aws")}>
            <WorkItem
              company="Amazon Web Services"
              description="Frontend and infrastructure focused developer building for customers on AWS."
              timeline="July 2019 - Feb 2022"
            />
          </div>
        </div>
      )}
      {project === "sound" && (
        <SoundContent onBackClick={() => setProject(null)} />
      )}
      {project === "aws" && <AWSContent onBackClick={() => setProject(null)} />}
    </div>
  );
};
