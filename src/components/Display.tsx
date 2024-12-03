import { Dispatch, SetStateAction } from "react";
import { center } from "src/App.const";
import { btsType, valueType } from "src/App.const";
import styled from "styled-components";

const HwaMeon = styled.div`
  ${center};
  width: 86%;
  height: 8rem;
  background: #646cff;
  position: absolute;
  top: 2rem;
`;

const GyelGwa = styled.div<{ $isNumber: boolean }>`
  color: white;
  font-size: 40px;
  font-family: ${(props) => (props.$isNumber ? "Digital Dismay" : null)};
`;

const Del = styled.button`
  ${center};
  width: 40px;
  height: 20px;
  padding: 0;
  background: #646cff;
  border: 2px solid black;
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: black;
`;

export function Display({
  hyeonJaeGab,
  setHyeonJaeGab,
}: {
  hyeonJaeGab: btsType[];
  setHyeonJaeGab: Dispatch<SetStateAction<btsType[]>>;
}) {
  function delClick() {
    hyeonJaeGab.pop();
    setHyeonJaeGab([...hyeonJaeGab]);
  }

  return (
    <HwaMeon>
      {hyeonJaeGab.map((hJG, index) => (
        <GyelGwa
          key={hJG.id + index * 100}
          $isNumber={hJG.type === valueType.number ? true : false}
        >
          {hJG.value}
        </GyelGwa>
      ))}
      <Del onClick={delClick}>del</Del>
    </HwaMeon>
  );
}
