import { Hour } from "@/types/types";
import React from "react";

const HourForecast: React.FC<Hour> = ({
  time,
  temp_c,
  condition,
  wind_kph,
  wind_dir,
  pressure_mb,
  precip_mm,
  snow_cm,
  humidity,
  cloud,
  feelslike_c,
  is_day,
  chance_of_rain: rainChance,
  chance_of_snow: snowChance,
  vis_km,
  uv,
}) => {
  return (
    <div className="h-full space-y-2 rounded-md border p-1.5">
      <h2>{time.split(" ")[1]}</h2>
      <p>
        {temp_c}°C, feels like {feelslike_c}°C
      </p>
      <p>
        {condition.text}, cloundess: {cloud}%
      </p>
      <p>
        Max wind speed: {wind_kph}km/h, {wind_dir}
      </p>
      <p>Total precipitation: {precip_mm}mm</p>
      <p>Pressure: {pressure_mb}mb</p>
      <p>Visibility: {vis_km}km</p>
      <p>Humidity: {humidity}%</p>
      <p>UV: {uv}</p>

      <p>{is_day ? "day" : "night"}</p>

      {!!rainChance && <p>Chance of rain: {rainChance}%</p>}

      {!!snowChance && <p>Chance of snow: {snowChance}%</p>}

      {!!snow_cm && <p>Snow: {snow_cm}cm</p>}
    </div>
  );
};

//.map((item, i) => i === 1 && item)
export default HourForecast;
