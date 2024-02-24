import { RootState } from "@/app/rootReducer";
import { useSelector } from "react-redux";
import { motion as m, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { mOpacity } from "@/utils/motions";

//: React.FC<{ result: string }> { result }

const CurWeath = () => {
  const { weather, city } = useSelector((state: RootState) => state.curWeath);

  const {
    temp_c: temp,
    feelslike_c: feels,
    wind_kph: windSpeed,
    wind_dir: windDirect,
    humidity,
    pressure_mb: pressure,
    vis_km: visibility,
    cloud,
    is_day,
    uv,
    condition,
  } = weather?.current || {};

  const { text, icon } = condition ?? {};

  const { name, region, country } = weather?.location || {};

  const [result, setResult] = useState("");

  useEffect(() => {
    !weather && setResult(city);
  }, [weather]);

  return (
    <AnimatePresence>
      {weather ? (
        <m.div {...mOpacity} className="space-y-6 rounded-md border p-4">
          <div className="flex items-center gap-x-6 rounded-md border">
            <img src={icon} alt="cloudness" className="object-cover" />
            <h2 className="text-center text-2xl">{text}</h2>
            <p>{is_day ? "Day" : "Night"}</p>
          </div>
          <div className="space-y-1.5 rounded-md border p-4">
            <h2 className="text-xl font-semibold">
              In {name}, {region ? `${region},` : ""} {country}
            </h2>
            <h2 className="text-xl font-bold">{temp}°C</h2>
            <h2 className="text-xl font-bold">feels like {feels}°C</h2>
            <p>
              Wind: {windSpeed} km/h, {windDirect}
            </p>
            <p>Humidity: {humidity}%</p>
            <p>Pressure: {pressure} mb</p>
            <p>Visibility: {visibility} km</p>
            <p>Cloudness: {cloud}%</p>

            <p>UV: {uv}</p>
          </div>
        </m.div>
      ) : (
        <m.h2 {...mOpacity}>
          On request "{`${result}`}" nothing was found, try again!
        </m.h2>
      )}
    </AnimatePresence>
  );
};

export default CurWeath;
