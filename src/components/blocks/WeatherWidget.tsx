import { Box, CircularProgress, Typography } from '@mui/material';
import { getCelsiusTemp, getCurrentDate, getDayOfWeek } from '@/utils';
import { ForecastData, WeatherData } from '@/types';
import Image from 'next/image';
import { getTileColor, getWeatherIcon } from '@/constants';

export default function WeatherWidget({
    forecastData,
    weatherData,
    isLoading,
    error,
}: {
    forecastData?: ForecastData | null;
    weatherData: WeatherData;
    isLoading: boolean;
    error: string | null;
}) {
    if (error) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                p={2}
                bgcolor="background.paper"
                borderRadius={2}
                boxShadow={2}
                sx={{
                    width: '100%',
                    height: '100%',
                    color: 'text.primary',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h6" color="error">
                    Error: {error}
                </Typography>
            </Box>
        );
    }

    if (!weatherData || isLoading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                p={2}
                bgcolor="background.paper"
                borderRadius={2}
                boxShadow={2}
                sx={{
                    width: '100%',
                    height: '100%',
                    color: 'text.primary',
                    textAlign: 'center',
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (!weatherData && !isLoading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                p={2}
                bgcolor="background.paper"
                borderRadius={2}
                boxShadow={2}
                sx={{
                    width: '100%',
                    height: '100%',
                    color: 'text.primary',
                    textAlign: 'center',
                }}
            >
                No data available
            </Box>
        );
    }

    const { description, main } = weatherData.weather[0];
    const weatherIcon = getWeatherIcon(main);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={2}
            bgcolor="background.paper"
            borderRadius={2}
            boxShadow={2}
            sx={{
                width: '100%',
                height: '100%',
                color: 'text.primary',
                textAlign: 'center',
                backgroundColor: getTileColor(main),
            }}
        >
            <Image src={weatherIcon} alt={description} width={48} height={48} />
            <Typography variant="h4" component="div" mt={2}>
                {getCelsiusTemp(weatherData.main.temp)}&deg;C
            </Typography>
            <span className="text-xs lg:text-m">{description?.toUpperCase()}</span>
            <Typography variant="body2" mt={1}>
                {weatherData.name}
            </Typography>
            <Typography variant="body2" mt={1} color="text.secondary">
                {getCurrentDate()}
            </Typography>

            {forecastData && (
                <Box mt="auto" width="100%">
                    <div className="grid grid-cols-2 py-2 lg:grid-cols-5 gap-4">
                        {Array.from(
                            new Map(
                                forecastData.list.map((entry) => [
                                    entry?.dt_txt.split(' ')[0],
                                    entry,
                                ]),
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
                                        <Typography variant="body1">
                                            {day && getDayOfWeek(day.dt_txt)}
                                        </Typography>
                                    </div>
                                );
                            })}
                    </div>
                </Box>
            )}
        </Box>
    );
}
