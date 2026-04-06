'use client';

import { useEffect, useState } from 'react';

interface WeatherData {
  temp: number;
  condition: string;
  icon: string;
  city: string;
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || process.env.OPENWEATHER_API_KEY;
        const city = 'London';
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch weather');
        }
        
        const data = await response.json();
        setWeather({
          temp: Math.round(data.main.temp),
          condition: data.weather[0].description,
          icon: data.weather[0].icon,
          city: data.name,
        });
      } catch {
        setError('Unable to load weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>⚠️ {error}</p>
        <p className="text-sm text-gray-500 mt-2">Check API key configuration</p>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold mb-2">{weather.city}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
        alt={weather.condition}
        className="w-16 h-16 mx-auto"
      />
      <p className="text-3xl font-bold">{weather.temp}°C</p>
      <p className="text-gray-600 dark:text-gray-400 capitalize">{weather.condition}</p>
    </div>
  );
}
