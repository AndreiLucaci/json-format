import { Col, Row } from "antd";
import "../../../node_modules/antd/dist/antd.css";
import React, { FC, useState } from "react";
import { LeftPannel, RightPanel } from "../../components";
import { IJsonFormatterEngine, JsonFormatterEngine } from "../../engine";
import { notificationService } from "../../services";
import { JsonFormatterOptions } from "../../types";
import { DEFAULT_OPTIONS } from "../../constants";

export const EditorPage: FC = () => {
  const engine: IJsonFormatterEngine = new JsonFormatterEngine();
  const [inputText, setInputText] = useState("");
  const [indentSize, setIndentSize] = useState(DEFAULT_OPTIONS);

  const onInputChange = (val: string, options?: JsonFormatterOptions) => {
    let formatterValue = "";
    try {
      const formatOptions = options ?? indentSize;
      formatterValue = engine.format(val, formatOptions);
    } catch (err) {
      formatterValue = err.message;
    }

    setInputText(formatterValue);
  };

  const onIndentSizeChange = (options: JsonFormatterOptions) => {
    try {
      setIndentSize(options);
      onInputChange(inputText, options);
    } catch (err) {
      notificationService.error(err.message);
    }
  };

  return (
    <Row style={{ height: "100%" }}>
      <Col span={12}>
        <LeftPannel onChange={onInputChange}></LeftPannel>
      </Col>
      <Col span={12}>
        <RightPanel
          onIndentSizeChange={onIndentSizeChange}
          inputText={inputText}
        ></RightPanel>
      </Col>
    </Row>
  );
};

export default EditorPage;
