export const modes = ['light', 'dark', 'system'];

export const getWeatherIcon = (main: string) => {
    const iconsMap: Record<string, string> = {
        clear: 'https://img.icons8.com/fluency/48/sun.png',
        rain: 'https://img.icons8.com/fluency/48/rain.png',
        fog: 'https://img.icons8.com/fluency/48/fog-day.png',
        snow: 'https://img.icons8.com/fluency/48/snow.png',
        thunderstorm: 'https://img.icons8.com/fluency/48/storm.png',
        clouds: 'https://img.icons8.com/fluency/48/clouds.png',
        drizzle: 'https://img.icons8.com/fluency/48/light-rain.png',
    };

    return iconsMap[main.toLowerCase()] || iconsMap['clouds'];
};

export const getTileColor = (main: string) => {
    const colorsMap: Record<string, string> = {
        clear: 'lightyellow',
        rain: 'lightgray',
        fog: 'lightgoldenrodyellow',
        snow: 'white',
        thunderstorm: 'lightsteelblue',
        clouds: 'lightgray',
        drizzle: 'lightblue',
    };

    return colorsMap[main.toLowerCase()] || colorsMap['clouds'];
};
