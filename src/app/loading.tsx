import LoadingSpinner from "@/components/loading-spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <LoadingSpinner className="size-12" />
    </div>
  );
};

export default Loading;
