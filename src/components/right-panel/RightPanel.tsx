import { Layout, Button, Row, Col } from "antd";
import React, { FC, useState } from "react";
import { RightPanelProps } from "../../types";
import { CopyOutlined, SmallDashOutlined } from "@ant-design/icons";

import { notificationService } from "../../services";

import MonacoEditor from "react-monaco-editor";
import "../components.css";
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";

const { Content } = Layout;

export const RightPanel: FC<RightPanelProps> = (props: RightPanelProps) => {
  const [
    editor,
    setEditor,
  ] = useState<monacoEditor.editor.IStandaloneCodeEditor>();

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
          <Col span={16}></Col>
          <Col span={8}>
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
