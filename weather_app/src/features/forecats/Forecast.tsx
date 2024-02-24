import { RootState } from "@/app/rootReducer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ForecastDay } from "@/types/types";
import React from "react";
import HourForecast from "./HourForecast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { nanoid } from "@reduxjs/toolkit";

const Forecast: React.FC<ForecastDay> = ({ astro, date, day, hour: hours }) => {
  const { sunrise, sunset, moonrise, moonset, moon_phase } = astro;

  const {
    maxtemp_c,
    mintemp_c,
    avgtemp_c,
    maxwind_kph,
    totalprecip_mm,
    totalsnow_cm,
    avgvis_km,
    avghumidity,
    condition,
    uv,
    daily_chance_of_rain: rainChance,
    daily_chance_of_snow: snowChance,
  } = day;

  return (
    <Card className="my-2 flex flex-col rounded-md">
      <CardHeader className="border-b">
        <CardTitle className="text-xl">
          {avgtemp_c}°C, {condition.text}
        </CardTitle>
        <CardTitle>Min: {mintemp_c}°C</CardTitle>
        <CardTitle>Max: {maxtemp_c} °C</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <div className="grid grid-cols-2">
          <div className="space-y-3 border-r">
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p>
            <p>Moonrise: {moonset}</p>
            <p>Moonset: {moonrise}</p>
            <p>Moonphase: {moon_phase}</p>
          </div>
          <div className="text-right">
            <p>Max wind speed: {maxwind_kph}km/h</p>
            <p>Total precipitation: {totalprecip_mm}mm</p>
            <p>Visibility: {avgvis_km}km</p>
            <p>Humidity: {avghumidity}%</p>
            <p>UV: {uv}</p>

            {!!rainChance && <p>Chance of rain: {rainChance}%</p>}

            {!!snowChance && <p>Chance of snow: {snowChance}%</p>}

            {!!totalsnow_cm && <p>Snow: {totalsnow_cm}cm</p>}
          </div>
        </div>
        {/* className="mt-4 grid grid-cols-4 gap-10 border-t pt-6" */}
        <Carousel opts={{ loop: true }} className="mt-6 border-t pt-6">
          <CarouselContent>
            {hours?.map((hour) => (
              <CarouselItem className="basis-1/3" key={nanoid()}>
                <HourForecast {...hour} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="rounded-lg" />
          <CarouselNext className="rounded-lg" />
        </Carousel>
      </CardContent>
      <CardFooter className="grid place-items-center border-t p-3 text-center text-lg">
        <p>{date}</p>
      </CardFooter>
    </Card>
  );
};

export default Forecast;
