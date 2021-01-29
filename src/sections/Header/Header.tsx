import React, { FC } from "react";
import { Layout, Typography } from "antd";

import "antd/dist/antd.css";

const { Header: HeaderComponent } = Layout;
const { Text, Title } = Typography;

export const Header: FC = () => {
  return (
    <HeaderComponent
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        height: "7vh",
      }}
    >
      <Title
        style={{
          marginTop: "10px",
          textAlign: "center",
          fontFamily:
            "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
        }}
      >
        <Text style={{ color: "#78dde8" }}>JSON</Text>{" "}
        <Text style={{ color: "#eff2e2" }}>formatter -</Text>{" "}
        <Text style={{ color: "#a9dc76" }}>simple prettifier</Text>{" "}
        <Text style={{ color: "#ff6189" }}>for</Text>{" "}
        <Text style={{ color: "#78dde8" }}>JSON</Text>{" "}
      </Title>
    </HeaderComponent>
  );
};

export default Header;
