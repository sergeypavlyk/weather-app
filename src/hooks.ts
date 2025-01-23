import { useState } from 'react';
import { ForecastData, WeatherData } from './types';

type UseApiRequestResult<T> = {
    data: T | null;
    error: string | null;
    isLoading: boolean;
    fetchData: (url: string) => Promise<void>;
};

export function useApiRequest<T>(): UseApiRequestResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function fetchData(url: string) {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`API returned status ${response.status}: ${response.statusText}`);
            }
            const jsonData = await response.json();
            setData(jsonData.data);
            setError(null);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
                console.error('Error fetching data:', err.message);
            } else {
                setError('An unknown error occurred');
                console.error('Error fetching data:', err);
            }
            setData(null);
        } finally {
            setIsLoading(false);
        }
    }

    return { data, error, isLoading, fetchData };
}

export function useWeatherData() {
    const { data, error, isLoading, fetchData } = useApiRequest<WeatherData>();

    const fetchWeatherData = async (cityName: string) => {
        const url = `http://localhost:3000/api/weather?address=${cityName}`;
        await fetchData(url);
    };

    return { weatherData: data, error, isLoading, fetchWeatherData };
}

export function useWeatherByCoordinates() {
    const { data, error, isLoading, fetchData } = useApiRequest<WeatherData>();

    const fetchWeatherDataByCoordinates = async (latitude: number, longitude: number) => {
        const url = `http://localhost:3000/api/weather?lat=${latitude}&lon=${longitude}`;
        await fetchData(url);
    };

    return { weatherData: data, error, isLoading, fetchWeatherDataByCoordinates };
}

export function useForecastData() {
    const { data, error, isLoading, fetchData } = useApiRequest<ForecastData>();

    const fetchForecastData = async (cityName: string) => {
        const url = `http://localhost:3000/api/weather?forecast=1&address=${cityName}`;
        await fetchData(url);
    };

    return { forecastData: data, error, isLoading, fetchForecastData };
}

export function useFetchForecastDataByCoordinates() {
    const { data, error, isLoading, fetchData } = useApiRequest<ForecastData>();

    const fetchForecastDataByCoordinates = async (latitude: number, longitude: number) => {
        const url = `http://localhost:3000/api/weather?forecast=1&lat=${latitude}&lon=${longitude}`;
        await fetchData(url);
    };

    return { coordinatesForecastData: data, error, isLoading, fetchForecastDataByCoordinates };
}
