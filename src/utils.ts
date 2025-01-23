import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getCurrentDate() {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { month: 'long' };
    const monthName = currentDate.toLocaleString('en-US', options);
    const date = new Date().getDate() + ', ' + monthName;
    return date;
}

export function getCelsiusTemp(temp: number) {
    return Math.round(temp - 273.15);
}

export function getDayOfWeek(dateString: string): string {
    const date = new Date(dateString);
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    return daysOfWeek[date.getDay()];
}
