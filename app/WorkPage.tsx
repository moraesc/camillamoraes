import React from "react";

export const WorkPage = ({
  company,
  role,
}: {
  company: string;
  role: string;
}) => {
  return (
    <>
      <h3>{company}</h3>
      <p>{role}</p>
    </>
  );
};
