import React from "react";

const PodecastDetails = ({ params }: { params: { podcastId: string } }) => {
  return <p className="text-white-1">PodecastDetails for {params.podcastId}</p>;
};

export default PodecastDetails;
