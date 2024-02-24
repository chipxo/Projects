import { ThemeToggle } from "@/features/theme/ThemeToggle";
import { ThemeProvider } from "@/features/theme/themeSlice";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "./store";
import { RootState } from "./rootReducer";
import { useSelector } from "react-redux";
import fetchCurWeath from "@/hooks/fetchCurWeath";
import { Button } from "@/components/ui/button";
import { setCity } from "@/features/curWeath/curWeathSlice";
import { useEffect } from "react";
import CurWeath from "@/features/curWeath/CurWeath";
import fetchForecast from "@/hooks/fetchForecast";
import { nanoid } from "@reduxjs/toolkit";
import Forecast from "@/features/forecats/Forecast";
import { motion as m } from "framer-motion";

const App = () => {
  const dispatch = useAppDispatch();

  const { weather, city, loading, error } = useSelector(
    (state: RootState) => state.curWeath,
  );

  const {
    forecast,
    loading: forcstLoad,
    error: forsctEr,
  } = useSelector((state: RootState) => state.forecast);

  const fetchWeather = async (selectedCity: string) => {
    await dispatch(fetchCurWeath(selectedCity));
  };

  useEffect(() => {
    const getLocationAndFetchWeather = async () => {
      try {
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          },
        );

        const { latitude, longitude } = position.coords;
        const currentCity = `${latitude}, ${longitude}`;

        await fetchWeather(currentCity);
      } catch (e) {
        console.error("Error getting geolocation or fetching weather:", e);
      }
    };

    getLocationAndFetchWeather();
  }, [dispatch]);

  useEffect(() => {
    if (weather) {
      dispatch(setCity(weather.location.name));
      dispatch(fetchForecast(weather.location.name));
    }
  }, [dispatch, weather]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCity = e.target.value;

    dispatch(setCity(newCity));
  };

  const handleSearchClick = () => {
    fetchWeather(city);
  };

  const { forecastday: sityForecast } = forecast?.forecast ?? {};

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container gap-x-4 space-y-4 py-6">
        <div className="sticky top-2 z-50 grid grid-cols-[0.01fr_1fr_0.2fr] gap-x-4 rounded-md border bg-background p-2">
          <ThemeToggle />

          <Input
            placeholder="Enter your city, coords or postcode..."
            value={city}
            onChange={handleInputChange}
          />

          <Button onClick={handleSearchClick}>Search</Button>
        </div>
        {loading && <h2>Loading</h2>}
        {!loading && error && <h2>error</h2>}

        {!loading && !error && <CurWeath />}

        <div>
          {forcstLoad && <h2>forcstLoad Loading</h2>}
          {!forcstLoad && forsctEr && <h2>forsctEr error</h2>}

          {!forcstLoad &&
            !forsctEr &&
            sityForecast?.map((day) => <Forecast key={nanoid()} {...day} />)}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
