import { Layout, Typography } from "antd";
import "../../../node_modules/antd/dist/antd.css";
import React, { FC } from "react";
import "../../styles/monokai.scss";
import "./Header.scss";

const { Header } = Layout;
const { Text, Title } = Typography;

export const HeaderComponent: FC = () => {
  return (
    <Header className="header">
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
    </Header>
  );
};

export default HeaderComponent;
