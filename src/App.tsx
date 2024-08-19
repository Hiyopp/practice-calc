import React, { useState } from "react";
import styled, { css } from "styled-components";

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BonChae = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: colunm;
  width: 400px;
  height: 45rem;
  background: #191507;
  box-shadow: 3px 3px 13px 13px #d6d6d6;
  border-radius: 2%;
  position: relative;
`;

const HwaMeon = styled.div`
  ${center};
  width: 86%;
  height: 8rem;
  background: #646cff;
  position: absolute;
  top: 2rem;
`;

const GyelGwa = styled.div`
  color: white;
  font-size: 40px;
  font-family: "Digital Dismay";
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

type btsType = {
  id: number;
  value: string;
  type: valueType;
};

enum valueType {
  refresh,
  number,
  operation,
  equal,
}

function App() {
  const bts: btsType[][] = [
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
      { id: 17, value: "X", type: valueType.operation },
      { id: 18, value: "-", type: valueType.operation },
      { id: 19, value: "+", type: valueType.operation },
      { id: 20, value: "=", type: valueType.equal },
    ],
  ] as const;

  let distinguishValue: number;

  const [hyeonJaeGab, setHyeonJaeGab] = useState<btsType[]>([]);

  if (hyeonJaeGab[13])
    setHyeonJaeGab(hyeonJaeGab.filter((st) => st.id !== hyeonJaeGab[0].id));

  function Distinguish() {
    if (distinguishValue === 1)
      distinguishValue = 1; //내용 <-여기서 숫자와 글자 나눠야 함.
    else distinguishValue = 1; //내용 수정
  }

  function Click(i: number, b: string, t: valueType) {
    setHyeonJaeGab([...hyeonJaeGab, { id: i, value: b, type: t }]); //useState의 set은 함수가 끝나면 설정된다.
    distinguishValue = i;
  }

  function GyeGwaGab() {
    const [giulGwaGab, setGiulGwaGab] = useState();

    const plus = () => {};
  }

  return (
    <BonChae>
      <HwaMeon>
        {hyeonJaeGab.map((hJG) => (
          <GyelGwa key={hJG.id}>{hJG.value}</GyelGwa>
        ))}
        <Del>del</Del>
      </HwaMeon>
      <YeepLiuck>
        {bts.map((bt, index) => (
          <JungAngJungLiuel key={index}>
            {bt.map((b) => (
              <CalcBt
                key={b.id}
                onClick={() => {
                  Click(b.id, b.value, b.type);
                }}
              >
                {b.value}
              </CalcBt>
            ))}
          </JungAngJungLiuel>
        ))}
      </YeepLiuck>
    </BonChae>
  );
}

export default App;
