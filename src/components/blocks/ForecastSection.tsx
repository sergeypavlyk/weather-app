'use client';

import { useCallback, useEffect, useRef } from 'react';
import SearchCityForm from '@/components/forms/SearchCityForm';
import {
    useFetchForecastDataByCoordinates,
    useForecastData,
    useWeatherByCoordinates,
    useWeatherData,
} from '@/hooks';
import WeatherWidget from './WeatherWidget';

export default function ForecastSection() {
    const {
        weatherData,
        error,
        isLoading: coordinatesDataLoading,
        fetchWeatherDataByCoordinates,
    } = useWeatherByCoordinates();

    const {
        weatherData: cityWeatherData,
        fetchWeatherData,
        isLoading: cityDataLoading,
    } = useWeatherData();

    const {
        coordinatesForecastData,
        isLoading: coordinatesForecastDataLoading,
        fetchForecastDataByCoordinates,
    } = useFetchForecastDataByCoordinates();

    const { forecastData, fetchForecastData, isLoading: forecastDataLoading } = useForecastData();

    const isLoading =
        coordinatesDataLoading ||
        cityDataLoading ||
        forecastDataLoading ||
        coordinatesForecastDataLoading;

    const lastCoordinates = useRef<{ latitude: number; longitude: number } | null>(null);

    const displayWeatherData = cityWeatherData || weatherData;
    const displayForecastData = forecastData || coordinatesForecastData;

    const fetchWeather = useCallback(
        (latitude: number, longitude: number) => {
            if (
                lastCoordinates.current &&
                lastCoordinates.current.latitude === latitude &&
                lastCoordinates.current.longitude === longitude
            ) {
                return;
            }

            fetchWeatherDataByCoordinates(latitude, longitude);
            fetchForecastDataByCoordinates(latitude, longitude);
            lastCoordinates.current = { latitude, longitude };
        },
        [fetchForecastDataByCoordinates, fetchWeatherDataByCoordinates],
    );

    const handleCitySearch = useCallback(
        (city: string) => {
            fetchWeatherData(city);
            fetchForecastData(city);
        },
        [fetchWeatherData, fetchForecastData],
    );

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeather(latitude, longitude);
                },
                (err) => {
                    console.error('Error getting geolocation:', err);
                },
            );
        }
    }, [fetchWeather]);

    return (
        <section className="w-full flex flex-col justify-center items-center gap-4 max-w-[1200px] mx-auto">
            <SearchCityForm onSearch={handleCitySearch} />
            <div className="grid grid-cols-4 gap-2 lg:gap-4 w-full auto-rows-min">
                {/* Small Widget (2x2) */}
                <div className="col-span-1 row-span-2 bg-gray-400 flex justify-center rounded-md min-h-[310px]">
                    <WeatherWidget
                        weatherData={displayWeatherData}
                        isLoading={isLoading}
                        error={error}
                    />
                </div>
                {/* Wide Widget (4x2) */}
                <div className="col-span-2 row-span-2 bg-gray-400 flex justify-center rounded-md min-h-[310px]">
                    <WeatherWidget
                        forecastData={displayForecastData}
                        weatherData={displayWeatherData}
                        isLoading={isLoading}
                        error={error}
                    />
                </div>
                {/* Large Widget (4x4) */}
                <div className="col-span-4 row-span-2 bg-gray-400 flex justify-center rounded-md min-h-[310px]">
                    <WeatherWidget
                        forecastData={displayForecastData}
                        weatherData={displayWeatherData}
                        isLoading={isLoading}
                        error={error}
                    />
                </div>
            </div>
        </section>
    );
}
