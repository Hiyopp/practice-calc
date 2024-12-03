import { css } from "styled-components";

export const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export type btsType = {
  id: number;
  value: string;
  type: valueType;
};

export enum valueType {
  refresh,
  number,
  operation,
  equal,
}

export const bts: btsType[][] = [
  [
    { id: 1, value: "C", type: valueType.refresh },
    { id: 2, value: "7", type: valueType.number },
    { id: 3, value: "4", type: valueType.number },
    { id: 4, value: "1", type: valueType.number },
    { id: 5, value: "+/-", type: valueType.operation },
  ],
  [
    { id: 6, value: "()", type: valueType.operation },
    { id: 7, value: "8", type: valueType.number },
    { id: 8, value: "5", type: valueType.number },
    { id: 9, value: "2", type: valueType.number },
    { id: 10, value: "0", type: valueType.number },
  ],
  [
    { id: 11, value: "%", type: valueType.operation },
    { id: 12, value: "9", type: valueType.number },
    { id: 13, value: "6", type: valueType.number },
    { id: 14, value: "3", type: valueType.number },
    { id: 15, value: ".", type: valueType.operation },
  ],
  [
    { id: 16, value: "/", type: valueType.operation },
    { id: 17, value: "*", type: valueType.operation },
    { id: 18, value: "-", type: valueType.operation },
    { id: 19, value: "+", type: valueType.operation },
    { id: 20, value: "=", type: valueType.equal },
  ],
] as const;
