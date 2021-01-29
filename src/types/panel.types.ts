import { JsonFormatterOptions } from "./engine.types";

export type LeftPanelProps = {
  onChange: (input: string) => void;
};

export type RightPanelProps = {
  inputText?: string;
  onIndentSizeChange?: (value: JsonFormatterOptions) => void;
};
