import { getWeatherIcon } from "@/constants";
import { ForecastData } from "@/types";
import { getCelsiusTemp, getDayOfWeek } from "@/utils";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function DesktopWidgetData({ forecastData }: { forecastData: ForecastData }) {
  console.log("DesktopWidgetData  forecastData:", forecastData)
  return (
      <div className="grid-cols-2 py-2 lg:grid-cols-5 gap-4 lg:grid hidden">
          {Array.from(
              new Map(
                  forecastData.list.map((entry) => [entry?.dt_txt.split(' ')[0], entry]),
              ).values(),
          )
              .slice(1, 6)
              .map((day, index) => {
                  const weather = day?.weather[0];
                  return (
                      <div className="flex items-center flex-col" key={index}>
                          <Image
                              src={weather ? getWeatherIcon(weather.main) : ''}
                              alt={weather ? weather.description : ''}
                              width={24}
                              height={24}
                          />
                          <Typography variant="body2" mt={1}>
                              {day && getCelsiusTemp(day.main.temp)}&deg;C
                          </Typography>
                          <div className="truncate w-[-webkit-fill-available]">
                              {day && getDayOfWeek(day.dt_txt)}
                          </div>
                      </div>
                  );
              })}
      </div>
  );
}
