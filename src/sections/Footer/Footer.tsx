import { Layout, Typography } from "antd";
import React, { FC } from "react";
import "../../styles/monokai.scss";
import "./Footer.scss";

const { Footer: FooterComponent } = Layout;
const { Text, Link } = Typography;

export const Footer: FC = () => {
  return (
    <FooterComponent className="footer">
      <Text
        style={{
          fontSize: "10px",
          textAlign: "center",
          fontFamily:
            "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
        }}
      >
        <Text style={{ color: "#eff2e2" }}>{"{ "} </Text>
        <Text style={{ color: "#78dde8" }}>Andrei Lucaci</Text>{" "}
        <Text style={{ color: "#ff6189" }}>©2021</Text>{" "}
        <Text style={{ color: "#eff2e2" }}>-</Text>{" "}
        <Link
          style={{ color: "#a9dc76" }}
          title="github"
          href="https://github.com/AndreiLucaci/json-format"
        >
          https://github.com/AndreiLucaci/json-format
        </Link>{" "}
        <Text style={{ color: "#eff2e2" }}>-</Text>{" "}
        <Text style={{ color: "#78dde8" }}>JSON</Text>{" "}
        <Text style={{ color: "#eff2e2" }}>Format</Text>{" "}
        <Text style={{ color: "#eff2e2" }}>{" }"}</Text>
      </Text>
    </FooterComponent>
  );
};

export default Footer;
