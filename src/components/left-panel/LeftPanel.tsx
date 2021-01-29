import { Layout, Row, Col, Typography } from "antd";
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";
import React, { FC, useEffect } from "react";
import MonacoEditor from "react-monaco-editor";
import { LeftPanelProps } from "../../types";
import { MONOKAI } from "../../types/editor.types";

import "../../styles/monokai.scss";
import "./LeftPanel.scss";

const { Content } = Layout;
const { Title } = Typography;

export const LeftPannel: FC<LeftPanelProps> = (props: LeftPanelProps) => {
  useEffect(() => {
    monacoEditor.editor.defineTheme("monokai", MONOKAI);
  }, []);

  const onInputChange = (newVal: string) => {
    if (newVal !== undefined) {
      props.onChange(newVal);
    }
  };

  return (
    <Content style={{ width: "100%", height: "100%" }}>
      <Content className="mk mk--bg">
        <Row style={{ padding: "10px 0" }}>
          <Col span={24}>
            <Title className="info-title" level={5}>
              Paste unformatted JSON here:
            </Title>
          </Col>
        </Row>
      </Content>

      <MonacoEditor
        width="100%"
        height="100%"
        language="json"
        options={{
          minimap: {
            enabled: true,
          },
          language: "json",
          wordWrap: "on",
        }}
        theme="monokai"
        onChange={(newValue) => onInputChange(newValue)}
      ></MonacoEditor>
    </Content>
  );
};

export default LeftPannel;
