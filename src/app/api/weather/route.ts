/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

const API_URL = 'https://api.openweathermap.org/data/2.5';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const address = searchParams.get('address');
        const latitude = searchParams.get('lat');
        const longitude = searchParams.get('lon');
        const forecast = searchParams.get('forecast');
        let url = '';

        if (address) {
            url = `${API_URL}/${forecast ? 'forecast' : 'weather'}?q=${address}&appid=c248e4bec70fbc726e6e3aa9dae55400`;
        } else if (latitude && longitude) {
            url = `${API_URL}/${forecast ? 'forecast' : 'weather'}?lat=${latitude}&lon=${longitude}&appid=c248e4bec70fbc726e6e3aa9dae55400`;
        } else {
            return NextResponse.json(
                { error: 'Missing required parameters: address or lat/lon' },
                { status: 400 },
            );
        }

        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Weather API request failed with status ${res.status}`);
        }

        const data = await res.json();
        return NextResponse.json({ data });
    } catch (error: any) {
        console.error('Error in GET /api/weather:', error.message);
        return NextResponse.json(
            { error: 'Failed to fetch weather data', details: error.message },
            { status: 500 },
        );
    }
}
