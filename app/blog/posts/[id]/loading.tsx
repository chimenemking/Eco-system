import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type LoadingPostProps = {};

const LoadingSinglePost: React.FC<LoadingPostProps> = () => {
  return (
    <div className="flex flex-col space-y-2 items-center mt-32">
      <Skeleton className="h-24 w-[700px]" />
    </div>
  );
};

export default LoadingSinglePost;
