import React, { FC } from "react";
import { Layout, Typography } from "antd";

const { Footer: FooterComponent } = Layout;
const { Text, Link } = Typography;

export const Footer: FC = () => {
  return (
    <FooterComponent
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100vw",
        bottom: "0px",
        marginBottom: "5px",
        textAlign: "center",
        height: "3vh",
        backgroundColor: "#272821",
      }}
    >
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
          href="https://github.com/andreilucaci"
        >
          https://github.com/andreilucaci
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
