interface WeatherImgProps {
  iconId: string;
  width?: number;
}

const WeatherIcon = ({
  iconId,
  width,
}: WeatherImgProps): React.ReactElement | null => {
  if (!iconId) return null;
  const iconurl = "http://openweathermap.org/img/w/" + iconId + ".png";

  return (
    <img
      src={iconurl}
      alt={`icon-${iconId}`}
      width={width}
      data-testid="weather-icon"
    />
  );
};

export default WeatherIcon;
