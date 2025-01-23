import { useState } from 'react';
import Input from '../ui/Input';

export default function SearchCityForm({ onSearch }: { onSearch: (city: string) => void }) {
    const [city, setCity] = useState<string>('');

    return (
        <form
            className="w-full flex items-center gap-4"
            onSubmit={(e) => {
                e.preventDefault();
                if (city.trim()) onSearch(city);
            }}
        >
            <Input
                placeholder="Enter city name"
                type="text"
                id="cityName"
                name="cityName"
                className="rounded-xl"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button className="bg-indigo text-white px-4 py-1 rounded-lg" type="submit">
                Search
            </button>
        </form>
    );
}
