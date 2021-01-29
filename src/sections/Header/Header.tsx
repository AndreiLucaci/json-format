import { Layout, Typography } from "antd";
import "../../../node_modules/antd/dist/antd.css";
import React, { FC } from "react";
import "../../styles/monokai.scss";

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
      className="mk--bg--dark"
    >
      <Title
        style={{
          marginTop: "10px",
          textAlign: "center",
        }}
        className="mk"
      >
        <Text className="mk mk--blue">JSON </Text>
        <Text className="mk mk--white">formatter - </Text>
        <Text className="mk mk--green">simple prettifier </Text>
        <Text className="mk mk--red">for </Text>
        <Text className="mk mk--blue">JSON</Text>
      </Title>
    </HeaderComponent>
  );
};

export default Header;
