import React from 'react';
import {
  Sun,
  Moon,
  Cloud,
  CloudSun,
  CloudMoon,
  CloudRain,
  CloudSnow,
  Zap,
  Snowflake,
  Wind,
  Droplets,
  CloudDrizzle,
  CloudFog,
  HelpCircle
} from 'lucide-react';

type Props = {
  condition: string;
  iconCode?: string; // Use to detect day/night
};

const WeatherIcon: React.FC<Props> = ({ condition, iconCode }) => {
  const isNight = iconCode?.includes('n');

  const icon = (() => {
    switch (condition) {
      case 'Clear':
        return isNight ? <Moon /> : <Sun />;
      case 'Clouds':
        return isNight ? <CloudMoon /> : <CloudSun />;
      case 'Rain':
        return <CloudRain />;
      case 'Drizzle':
        return <CloudDrizzle />;
      case 'Thunderstorm':
        return <Zap />;
      case 'Snow':
        return <CloudSnow />;
      case 'Mist':
      case 'Fog':
      case 'Haze':
        return <CloudFog />;
      case 'Dust':
      case 'Sand':
      case 'Ash':
        return <Wind />;
      case 'Smoke':
        return <Droplets />;
      case 'Squall':
      case 'Tornado':
        return <Wind />;
      default:
        return <HelpCircle />;
    }
  })();

  return <div className="w-8 h-8 text-blue-500">{icon}</div>;
};

export default WeatherIcon;
