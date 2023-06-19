import { Layout as AntdLayout } from "antd";

import Container from "components/Container";
import { ColorEnums } from "types/ColorEnums";

import styles from "./Layout.module.scss";

const { Content, Header } = AntdLayout;

interface ILayout {
  children: React.ReactNode;
}

const headerStyle: React.CSSProperties = {
  backgroundColor: ColorEnums.DARK_GREEN,
  display: "flex",
  alignItems: "center",
  fontSize: 18,
};

const Layout = ({ children }: ILayout): React.ReactElement => {
  return (
    <AntdLayout
      hasSider={false}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header style={headerStyle}>
        <img src="/images/weather-app.png" alt="app-logo" width={30} />
        <span className={styles.title}>Weather App</span>
      </Header>
      <Container>
        <Content
          style={{
            flex: "1 0 auto",
          }}
        >
          {children}
        </Content>
      </Container>
    </AntdLayout>
  );
};

export default Layout;
