"use client";

import { useState, useEffect } from "react";
import { gql, useQuery, ApolloProvider } from "@apollo/client";
import { client } from "@/lib/client";

const GET_LOCATIONS = gql`
  {
    locations {
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

const LocationsPage = () => {
  const [locations, setLocations] = useState<Location[] | null>([]);
  const { loading, error, data } = useQuery(GET_LOCATIONS, { client });

  useEffect(() => {
    if (data) {
      setLocations(data.locations.results as Location[]);
    }
  }, [data]);

  if (loading) return <p>Loading locations...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ApolloProvider client={client}>
      <section>
        <div className="container py-4">
          Locations page - it should include the list of all locations and this
          one should use GraphQL. The page should be identical to the Episodes
          page, you can use placeholder images here too.
        </div>
        <ul className="list-group">
          {locations?.map((location: Location) => (
            <li key={location.id} className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  {/* <h5>{location.}</h5>
                  <p>
                    <b>Type:</b> {location.type} - {location.dimension}
                  </p> */}
                </div>
                <img
                  src="https://via.placeholder.com/150" // Placeholder image
                  alt="Location"
                  width="150"
                  height="150"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </ApolloProvider>
  );
};

export default LocationsPage;
