import React, { FC, useState } from "react";
import { Layout, Typography, Row, Col, Anchor } from "antd";
import "antd/dist/antd.css";

import { LeftPannel, RightPanel } from "./components";

import "./App.css";
import { IJsonFormatterEngine, JsonFormatterEngine } from "./engine";

const { Header, Content, Footer } = Layout;
const { Text, Title, Link } = Typography;

const App: FC = () => {
  const engine: IJsonFormatterEngine = new JsonFormatterEngine();
  const [inputText, setInputText] = useState("");

  const onInputChange = (val: string) => {
    let formatterValue = "";
    try {
      formatterValue = engine.format(val);
    } catch (err) {
      formatterValue = err.message;
    }

    setInputText(formatterValue);
  };

  return (
    <Layout>
      <Header
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
      </Header>
      <Content
        style={{
          position: "relative",
          top: "7vh",
          height: "78vh",
          width: "100wh",
        }}
      >
        <Row style={{ height: "100%" }}>
          <Col span={12}>
            <LeftPannel onChange={onInputChange}></LeftPannel>
          </Col>
          <Col span={12}>
            <RightPanel inputText={inputText}></RightPanel>
          </Col>
        </Row>
      </Content>
      <Footer
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100vw",
          bottom: "0px",
          marginBottom: "5px",
          textAlign: "center",
          height: "15vh",
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
      </Footer>
    </Layout>
  );
};

export default App;
