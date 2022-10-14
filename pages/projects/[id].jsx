import React from "react";
import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Project {id}</div>;
};

export default Project;
