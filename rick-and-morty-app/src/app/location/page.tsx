import Spinner from "@/components/Spinner";
import Locations from "@/components/location/Locations";
import React, { Suspense } from "react";

const LocationsPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Locations />
    </Suspense>
  );
};

export default LocationsPage;
