import { CopyOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  InputNumber,
  Layout,
  Row,
  Slider,
  Typography,
} from "antd";
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";
import React, { FC, useEffect, useState } from "react";
import MonacoEditor from "react-monaco-editor";
import { DEFAULT_OPTIONS } from "../../constants";
import { notificationService } from "../../services";
import { RightPanelProps } from "../../types";
import { MONOKAI } from "../../types/editor.types";
import "../../styles/monokai.scss";
import "./RightPanel.scss";

const { Content } = Layout;
const { Title } = Typography;

export const RightPanel: FC<RightPanelProps> = (props: RightPanelProps) => {
  useEffect(() => {
    monacoEditor.editor.defineTheme("monokai", MONOKAI);
  }, []);

  const [
    editor,
    setEditor,
  ] = useState<monacoEditor.editor.IStandaloneCodeEditor>();

  const [spaceSize, setSpaceSize] = useState(DEFAULT_OPTIONS.spaces);

  const openConfirmationNotification = () => {
    notificationService.open({
      message: "Copy / paste completed.",
      description: "Code pasted to clipboard succesfully",
      icon: <CopyOutlined />,
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

  const editorMount = (editor: monacoEditor.editor.IStandaloneCodeEditor) => {
    try {
      setEditor(editor);
    } catch (err) {
      notificationService.error(err.message);
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
          <Col span={17}>
            <Row className="indent-options">
              <Col span={9}>
                <Title level={5} className="mk indent-title">
                  Indent spaces:
                </Title>
              </Col>
              <Col span={9} style={{ marginTop: "-4px" }}>
                <Slider
                  min={2}
                  max={8}
                  step={2}
                  className="mk mk--blue"
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
              <Col span={4} style={{ marginTop: "-4px" }}>
                <InputNumber
                  min={2}
                  max={8}
                  className="mk mk--blue mk--bg indent-border"
                  style={{ margin: "0 15px", width: "55px" }}
                  value={spaceSize}
                  step={2}
                  onChange={(value) => {
                    onStepperChange(value);
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col span={7}>
            <Button
              className="mk copy-btn"
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
          theme: "monokai",
        }}
        value={props.inputText}
        editorDidMount={(editor) => editorMount(editor)}
      ></MonacoEditor>
    </Content>
  );
};

export default RightPanel;
