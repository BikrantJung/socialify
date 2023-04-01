import React from "react";

interface TextSkeletonProps {
  width?: string;
  height?: string;
}

function TextSkeleton({
  width = "7rem",
  height = "0.75rem",
}: TextSkeletonProps) {
  return <div className="rounded bg-gray-200" style={{ width, height }} />;
}

export default TextSkeleton;
