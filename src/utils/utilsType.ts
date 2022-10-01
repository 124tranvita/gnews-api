export type Article = {
  title?: string;
  description?: string;
  content?: string;
  image?: string;
  url?: string;
  publishedAt?: string;
  source?: {
    name?: string;
    url?: string;
  };
} | null;

export type Weather = {
  latitude?: number;
  longitude?: number;
  generationtime_ms?: number;
  utc_offset_seconds?: number;
  timezone?: string;
  timezone_abbreviation?: string;
  elevation?: number;
  current_weather?: {
    temperature?: number;
    windspeed?: number;
    winddirection?: number;
    weathercode?: number;
    time?: string;
  };
  hourly_units?: {
    time?: string;
    temperature_2m?: string;
  };
  hourly?: {
    time?: string[];
    temperature_2m?: number[];
  };
};
