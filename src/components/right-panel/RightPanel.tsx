import { Layout, Button, Row, Col, Slider, InputNumber } from "antd";
import React, { FC, useState } from "react";
import { RightPanelProps } from "../../types";
import { CopyOutlined, SmallDashOutlined } from "@ant-design/icons";

import { notificationService } from "../../services";
import { DEFAULT_OPTIONS } from "../../constants";

import MonacoEditor from "react-monaco-editor";
import "../components.css";
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";

const { Content } = Layout;

export const RightPanel: FC<RightPanelProps> = (props: RightPanelProps) => {
  const [
    editor,
    setEditor,
  ] = useState<monacoEditor.editor.IStandaloneCodeEditor>();

  const [spaceSize, setSpaceSize] = useState(DEFAULT_OPTIONS.spaces);

  const openConfirmationNotification = () => {
    notificationService.open({
      message: "Copy / paste completed.",
      description: "Code pasted to clipboard succesfully",
      icon: <SmallDashOutlined />,
    });
  };

  const copyOnClick = () => {
    try {
      if (editor) {
        const range = editor.getModel()!.getFullModelRange();
        editor.focus();
        editor.setSelection(range);
        document.execCommand("copy");

        openConfirmationNotification();
      } else {
        notificationService.error({
          message: "No editor found",
        });
      }
    } catch (err) {
      notificationService.error({
        message: err.message,
      });
    }
  };

  const onStepperChange = (value: any) => {
    if (typeof value === "number") {
      setSpaceSize(value);

      if (props.onSpacesSizeChange) {
        props.onSpacesSizeChange({ spaces: value });
      }
    }
  };

  return (
    <Content
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#272821",
      }}
    >
      <Content>
        <Row style={{ padding: "10px 0" }}>
          <Col span={19}>
            <Row style={{ paddingLeft: "0px" }}>
              <Col span={12}>
                <Slider
                  min={2}
                  max={8}
                  step={2}
                  onChange={(value: number) => {
                    onStepperChange(value);
                  }}
                  value={
                    typeof spaceSize === "number"
                      ? spaceSize
                      : DEFAULT_OPTIONS.spaces
                  }
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={2}
                  max={8}
                  style={{ margin: "0 16px" }}
                  value={spaceSize}
                  step={2}
                  onChange={(value) => {
                    onStepperChange(value);
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col span={5}>
            <Button
              className="code-btn"
              type="dashed"
              icon={<CopyOutlined />}
              size={"large"}
              onClick={copyOnClick}
            >
              copy_to_clipboard()
            </Button>
          </Col>
        </Row>
      </Content>

      <MonacoEditor
        width="100%"
        height="100%"
        theme="vs-dark"
        options={{
          minimap: {
            enabled: true,
          },
          language: "json",
          readOnly: true,
          renderFinalNewline: true,
          renderWhitespace: "all",
          wordWrap: "on",
        }}
        value={props.inputText}
        editorDidMount={(editor) => setEditor(editor)}
      ></MonacoEditor>
    </Content>
  );
};

export default RightPanel;
