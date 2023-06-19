import { useState } from "react";
import { Skeleton, Row, Col, Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";

import SearchCity from "components/SearchCity";
import CurrentWeather from "components/CurrentWeather";
import WeatherForecast from "components/WeatherForecast";

import { useGetGeoLocationQuery } from "services/geoService";
import { useGetWeatherQuery } from "services/weatherService";
import useDebounce from "hooks/useDebounce";

import styles from "./App.module.scss";

const App = (): React.ReactElement => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 400);

  const geoQueryOptions = {
    cityName: debouncedSearch,
  };

  const { data: geoData, isError: isErrorLocation } = useGetGeoLocationQuery(
    geoQueryOptions,
    {
      skip: !debouncedSearch,
    }
  );

  const weatherQueryOptions = {
    lat: geoData?.[0]?.lat,
    lon: geoData?.[0]?.lon,
  };

  const {
    data: weatherData,
    isLoading,
    isError: isErrorWeather,
  } = useGetWeatherQuery(weatherQueryOptions, {
    skip: !geoData?.length,
  });

  const renderResult = (): React.ReactElement => {
    if (isErrorLocation) {
      return (
        <Result
          status="500"
          title="Error - Location"
          subTitle="Sorry, something went wrong in getting location!"
          className={styles.result}
        />
      );
    }

    if (isErrorWeather) {
      return (
        <Result
          status="500"
          title="Error - Weather"
          subTitle="Sorry, something went wrong in getting weather data!"
          className={styles.result}
        />
      );
    }

    if (!weatherData && searchTerm) {
      return (
        <Result
          status="warning"
          title="No data found!"
          className={styles.result}
        />
      );
    }

    if (!searchTerm) {
      return (
        <Result
          icon={<SmileOutlined />}
          title="Please search for specific city weather!"
          className={styles.result}
        />
      );
    }

    return (
      <Skeleton loading={isLoading} data-testid="weatherData-loading">
        <Row
          gutter={[16, 16]}
          style={{
            marginTop: 16,
          }}
        >
          <Col xs={24} md={6} data-testid="current-weather-column">
            <CurrentWeather currentWeatherData={weatherData.current} />
          </Col>
          <Col xs={24} md={18} data-testid="forecast-column">
            <WeatherForecast forecastData={weatherData.daily} />
          </Col>
        </Row>
      </Skeleton>
    );
  };

  return (
    <Row
      gutter={16}
      style={{
        margin: "16px 0",
      }}
    >
      <Col xs={24} data-testid="search-city-column">
        <SearchCity searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Col>
      <Col xs={24}>{renderResult()}</Col>
    </Row>
  );
};

export default App;
