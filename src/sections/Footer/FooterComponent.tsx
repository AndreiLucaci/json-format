import { Layout, Typography } from "antd";
import React, { FC } from "react";
import "../../styles/monokai.scss";
import "./Footer.scss";

const { Footer } = Layout;
const { Text, Link } = Typography;

export const FooterComponent: FC = () => {
  return (
    <Footer className="footer">
      <Text
        style={{
          fontSize: "10px",
          textAlign: "center",
          fontFamily:
            "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
        }}
      >
        <Text style={{ color: "#eff2e2" }}>{"{ "} </Text>
        <Link
          style={{ color: "#78dde8" }}
          title="andreilucaci.ro"
          href="https://andreilucaci.ro"
        >
          Andrei Lucaci
        </Link>{" "}
        <Text style={{ color: "#ff6189" }}>
          ©2021-{new Date().getFullYear()}
        </Text>{" "}
        <Text style={{ color: "#eff2e2" }}>-</Text>{" "}
        <Link
          style={{ color: "#a9dc76" }}
          title="jsonf"
          href="https://jsonf.io/"
        >
          https://jsonf.io
        </Link>{" "}
        <Text style={{ color: "#eff2e2" }}>-</Text>{" "}
        <Text style={{ color: "#78dde8" }}>JSON</Text>{" "}
        <Text style={{ color: "#eff2e2" }}>Format</Text>{" "}
        <Text style={{ color: "#eff2e2" }}>{" }"}</Text>
      </Text>
    </Footer>
  );
};

export default FooterComponent;
