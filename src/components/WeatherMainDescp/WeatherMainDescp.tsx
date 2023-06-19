interface WeatherMainDescpProps {
  main: string;
  description: string;
}

const WeatherMainDescp = ({
  main,
  description,
}: WeatherMainDescpProps): React.ReactElement => {
  return (
    <p>
      {main} ({description})
    </p>
  );
};

export default WeatherMainDescp;
