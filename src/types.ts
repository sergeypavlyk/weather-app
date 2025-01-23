export type WeatherData = {
    weather: { description: string; main: string }[];
    main: { temp: number };
    name: string;
    dt_txt: string;
} | null;

export type ForecastData = {
    list: WeatherData[];
};
