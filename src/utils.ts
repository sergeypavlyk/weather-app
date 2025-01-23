import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const handleError = async (response: Response): Promise<void> => {
    const errorMessage =
        (await response.json().catch(() => null))?.message ||
        `HTTP error! Status: ${response.status}`;
    throw new Error(errorMessage);
};

export const formatDate = (dateString: string | null | undefined): string => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('uk-UA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
};
