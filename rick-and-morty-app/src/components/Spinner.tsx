import React from "react";

const Spinner = () => {
  return (
    <div className="flex h-[50vh] items-center justify-center">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-b-8 border-t-8 border-accent" />
        <div className="absolute left-0 top-0 h-24 w-24 animate-spin rounded-full border-b-8 border-t-8 border-primary" />
      </div>
    </div>
  );
};

export default Spinner;
