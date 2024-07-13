import "./App.css";

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
};

const bts: btsType[][] = [
  [
    { id: 1, value: "C" },
    { id: 2, value: "7" },
    { id: 3, value: "4" },
    { id: 4, value: "1" },
    { id: 5, value: "+/-" },
  ],
  [
    { id: 6, value: "()" },
    { id: 7, value: "8" },
    { id: 8, value: "5" },
    { id: 9, value: "2" },
    { id: 10, value: "0" },
  ],
  [
    { id: 11, value: "%" },
    { id: 12, value: "9" },
    { id: 13, value: "6" },
    { id: 14, value: "3" },
    { id: 15, value: "." },
  ],
  [
    { id: 16, value: "/" },
    { id: 17, value: "X" },
    { id: 18, value: "-" },
    { id: 19, value: "+" },
    { id: 20, value: "=" },
  ],
] as const;

let count = 1;

let distinguishValue: number;

function Distinguish() {
  if (distinguishValue === 1)
    distinguishValue = 1; //내용 <-여기서 숫자와 글자 나눠야 함.
  else distinguishValue = 1; //내용 수정
}

const App = () => {
  const [hyeonJaeGab, setHyeonJaeGab] = useState<btsType[]>([]);

  if (hyeonJaeGab[13])
    setHyeonJaeGab(hyeonJaeGab.filter((st) => st.id !== hyeonJaeGab[0].id));

  function Click(i: number, b: string) {
    setHyeonJaeGab([...hyeonJaeGab, { id: count, value: b }]); //useState의 set은 함수가 끝나면 설정된다.
    count++;
    distinguishValue = i;
  }

  function GyeGwaGab() {
    const [giulGwaGab, setGiulGwaGab] = useState();

    const plus = () => {};
  }

  return (
    <BonChae>
      <HwaMeon>
        {hyeonJaeGab.map(
          (
            hJG, //key id로 바꾸기
          ) => (
            <GyelGwa key={hJG.id}>{hJG.value}</GyelGwa>
          ),
        )}
        <Del>del</Del>
      </HwaMeon>
      <YeepLiuck>
        {bts.map((bt) => (
          <JungAngJungLiuel key={bt[0].id}>
            {bt.map((b) => (
              <CalcBt
                key={b.id}
                onClick={() => {
                  Click(b.id, b.value);
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
};

export default App;
