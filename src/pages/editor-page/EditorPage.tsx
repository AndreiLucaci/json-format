import { Col, Layout, Row } from "antd";
import "../../../node_modules/antd/dist/antd.css";
import React, { FC, useState } from "react";
import { LeftPannel, RightPanel } from "../../components";
import { IJsonFormatterEngine, JsonFormatterEngine } from "../../engine";

const { Content } = Layout;

export const EditorPage: FC = () => {
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
    <Content
      style={{
        position: "relative",
        top: "7vh",
        height: "90vh",
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
  );
};

export default EditorPage;
