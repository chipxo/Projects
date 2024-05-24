"use client";

import { useState, useEffect, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { gql, useQuery, ApolloProvider } from "@apollo/client";
import { client } from "@/lib/client";
import Spinner from "@/components/Spinner";
import LocationItem from "@/components/location/LocationItem";
import PaginationItem from "@/components/PaginationItem";

const LocationsPage = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const GET_LOCATIONS = gql`
    query GetLocations($page: Int) {
      locations(page: $page) {
        info {
          count
        }
        results {
          id
          name
          type
          dimension
        }
      }
    }
  `;

  const [locations, setLocations] = useState<LocationType[] | null>([]);

  const { loading, data, error } = useQuery(GET_LOCATIONS, {
    client,
    variables: { page: Number(page) },
  });

  useEffect(() => {
    if (data) setLocations(data.locations.results);
  }, [data]);

  return (
    <Suspense fallback={<Spinner />}>
      <ApolloProvider client={client}>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-[85vh]"
        >
          <div className="container py-4">
            <h2 className="text-center text-xl font-semibold lg:text-2xl">
              Locations
            </h2>

            <AnimatePresence>
              {loading ? (
                <Spinner />
              ) : (
                locations?.map((location) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={location.id}
                  >
                    <LocationItem {...location} />
                  </motion.div>
                ))
              )}
            </AnimatePresence>

            {error && <p>Error: {error.message}</p>}

            {!loading && (
              <PaginationItem paginationLength={7} href={"location"} />
            )}
          </div>
        </motion.section>
      </ApolloProvider>
    </Suspense>
  );
};

export default LocationsPage;
