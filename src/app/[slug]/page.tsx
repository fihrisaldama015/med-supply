import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return <div>page {slug}</div>;
};

export default page;
