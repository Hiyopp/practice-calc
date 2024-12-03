import { Dispatch, SetStateAction, useState } from "react";
import { center } from "src/App.const";
import { bts, btsType, valueType } from "src/App.const";
import styled from "styled-components";

const YeepLiuck = styled.div`
  ${center};
  width: 86%;
  height: 30rem;
  position: absolute;
  bottom: 3rem;
  background: #d6d6d6;
  border-radius: 2%;
`;

const CalcBt = styled.button`
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  margin-bottom: 25%;
  background: #f5f5f7;
  padding: 0;
  font-size: 23px;
`;

const JungAngJungLiuel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3%;
`;

export function InputValue({
  hyeonJaeGab,
  setHyeonJaeGab,
}: {
  hyeonJaeGab: btsType[];
  setHyeonJaeGab: Dispatch<SetStateAction<btsType[]>>;
}) {
  const [numberValue, setNumberValue] = useState<number[]>([]);

  function click(i: number, b: string, t: valueType) {
    if (t === valueType.number) {
      setNumberValue([...numberValue, Number(b)]);
    }
    if (hyeonJaeGab.length > 13) hyeonJaeGab.shift();
    setHyeonJaeGab([...hyeonJaeGab, { id: i, value: b, type: t }]); //useState의 set은 함수가 끝나면 설정된다.
  }

  let test = 0;
  numberValue.map((num, index) => (test += num * (numberValue.length - index)));
  console.log(test);

  return (
    <YeepLiuck>
      {bts.map((bt, index) => (
        <JungAngJungLiuel key={index}>
          {bt.map((b) => (
            <CalcBt
              key={b.id}
              onClick={() => {
                click(b.id, b.value, b.type);
              }}
            >
              {b.value}
            </CalcBt>
          ))}
        </JungAngJungLiuel>
      ))}
    </YeepLiuck>
  );
}
