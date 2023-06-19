import { memo } from "react";
import { Card, Table } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

import { type IDaily } from "types/IWeather";

import { WeatherForecastColumns } from "./WeatherForecastColumns";

interface WeatherForecastProps {
  forecastData: IDaily[];
}

const WeatherForecast = ({
  forecastData,
}: WeatherForecastProps): React.ReactElement | null => {
  if (!forecastData) return null;

  return (
    <Card
      title={
        <div>
          <CalendarOutlined style={{ marginRight: 6 }} />
          7-DAYS FORECAST
        </div>
      }
    >
      <Table
        dataSource={forecastData}
        columns={WeatherForecastColumns}
        pagination={false}
        rowKey="dt"
      />
    </Card>
  );
};

export default memo(WeatherForecast);
