import { JsonFormatterOptions } from "../types/engine.types";

const DEFAULT_OPTIONS: JsonFormatterOptions = {
  spaces: 2,
};

export interface IJsonFormatterEngine {
  format(value: string, options?: JsonFormatterOptions): string;
}

export class JsonFormatterEngine implements IJsonFormatterEngine {
  format(value: string, options?: JsonFormatterOptions): string {
    try {
      const jsonInput = JSON.parse(value);

      const jsonOptions = options ?? DEFAULT_OPTIONS;

      return JSON.stringify(jsonInput, null, jsonOptions.spaces);
    } catch (err) {
      throw err;
    }
  }
}
