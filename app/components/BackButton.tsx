import React from "react";
import Image from "next/image";

export const BackButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="hover:cursor-pointer">
      <Image
        src="/static/images/left.png"
        alt="back"
        width={16}
        height={16}
        onClick={onClick}
      />
    </div>
  );
};
