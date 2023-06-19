import { Card, Typography } from "antd";

import WeatherIcon from "components/WeatherIcon";
import Centigrade from "components/Centigrade";
import { type ICurrentWeather } from "types/IWeather";

import styles from "./CurrentWeather.module.scss";

const { Text } = Typography;

interface CurrentWeatherProps {
  currentWeatherData: ICurrentWeather | null;
}

const Bold = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}): React.ReactElement => (
  <Text style={{ fontWeight: "bold" }} id={id}>
    {children}
  </Text>
);

const CurrentWeather = ({
  currentWeatherData,
}: CurrentWeatherProps): React.ReactElement | null => {
  if (!currentWeatherData) return null;
  const { temp, clouds, weather, wind_speed: windSpeed } = currentWeatherData;

  const title = (
    <div className={styles.title}>
      <div>Current Weather</div>
      <WeatherIcon iconId={weather[0].icon} />
    </div>
  );

  return (
    <Card title={title}>
      <div className={styles.currentWeatherContent}>
        <div className={styles.temp} data-testid="current-temp">
          <Centigrade temp={temp} />
        </div>
        <div className={styles.descp}>
          <label htmlFor="clouds">Cloudiness:</label>
          <Bold id="clouds">{clouds}%</Bold>
        </div>
        <div className={styles.descp}>
          <label htmlFor="wind">Wind Speed:</label>
          <Bold id="wind">{windSpeed}</Bold>
        </div>
        <Bold>
          {weather[0].main} ({weather[0].description})
        </Bold>
      </div>
    </Card>
  );
};

export default CurrentWeather;
