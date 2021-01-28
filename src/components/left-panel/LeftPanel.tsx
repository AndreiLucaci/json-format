import React, { FC } from "react";
import { Layout } from "antd";

import MonacoEditor from "react-monaco-editor";

import { LeftPanelProps } from "../../types";

const { Content } = Layout;

export const LeftPannel: FC<LeftPanelProps> = (props: LeftPanelProps) => {
  const onInputChange = (newVal: string) => {
    if (newVal !== undefined) {
      props.onChange(newVal);
    }
  };

  return (
    <Content style={{ width: "100%", height: "100%" }}>
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
        theme="night-dark"
        onChange={(newValue) => onInputChange(newValue)}
      ></MonacoEditor>
    </Content>
  );
};

export default LeftPannel;
