import { Progress, Slider, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";

import WeatherIcon from "components/WeatherIcon";
import WeatherMainDescp from "components/WeatherMainDescp";
import Centigrade from "components/Centigrade";
import { type IDaily } from "types/IWeather";
import { ColorEnums } from "types/ColorEnums";

import styles from "./WeatherForecastColumns.module.scss";

const { Text } = Typography;

export const WeatherForecastColumns: ColumnsType<IDaily> = [
  {
    title: "Day",
    dataIndex: "dt",
    key: "dt",
    render: (dt, record, index) => {
      // Convert the timestamp to milliseconds by multiplying by 1000
      // Print the date in the format 'Weekday Month Day'

      const day = (): string => {
        if (index === 0) return "Today";
        return new Date(dt * 1000).toLocaleDateString("en-US", {
          weekday: "short",
        });
      };

      return <Text style={{ fontWeight: "bold" }}>{day()}</Text>;
    },
  },
  {
    title: <div>Temp &#8451; (min-day-max)</div>,
    dataIndex: "temp",
    key: "temp",
    width: 200,
    render: (temp) => {
      const { day, max, min } = temp;

      const sliderMark = (temp: number): React.ReactElement => (
        <Centigrade temp={temp} notShowIcon />
      );

      const marks = {
        [min]: sliderMark(min),
        [day]: sliderMark(day),
        [max]: sliderMark(max),
      };

      return (
        <div className={styles.tempWrapper}>
          <Slider
            marks={marks}
            included={false}
            defaultValue={day}
            min={min}
            max={max}
            tooltip={{ open: false }}
            style={{ marginBottom: 0 }}
            disabled
          />
        </div>
      );
    },
  },
  {
    title: "Cloudiness",
    dataIndex: "clouds",
    key: "clouds",
    render: (clouds) => (
      <Progress
        percent={clouds}
        size="small"
        strokeColor={ColorEnums.DARK_GREEN}
        format={(percent) => {
          if (percent === 100) return <p style={{ color: "black" }}>100%</p>;
          return <p>{percent}%</p>;
        }}
        style={{ padding: "0 8px" }}
      />
    ),
  },
  {
    title: "Main & Description",
    dataIndex: "weather",
    render: (weather) => (
      <WeatherMainDescp
        main={weather[0].main}
        description={weather[0].description}
      />
    ),
  },
  {
    title: null,
    dataIndex: "weather",
    render: (weather) => <WeatherIcon iconId={weather[0].icon} width={32} />,
  },
];
