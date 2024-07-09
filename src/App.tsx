import React, {useState} from "react";
import styled from "styled-components";
import "./App.css";

const center: string = 'display: flex; justify-content: center; align-items: center;';

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
  font-family: 'Digital Dismay';
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

let btsNaeYong=[['C'],['()'],['%'],['/','X','-','+','=']];
  for (let i = 0; i < 3; i++){
    for (let k = 1; k < 5; k++){
      if(k===4) {
        switch(i) {
          case 0:
            btsNaeYong[i][k]='+/-';
            break;
          case 1:
            btsNaeYong[i][k]='0';
            break;
          case 2:
            btsNaeYong[i][k]='.';
            break;
        }
      }
      else btsNaeYong[i][k]=String((i+7)-(k-1)*3);

    }
  }

const bts: string[][] = new Array(4);                //bts[[5],[5],[5],[5]] 또는 bts[4][5]
for (let i = 0; i < 4; i++) {
    bts[i] = new Array(5);
    for (let k = 0; k < 5; k++){
      bts[i][k] = btsNaeYong[i][k];
    }
}

function HwaMeonChulLiuck() {
  const [hyeonJaeGab, setHyeonJaeGab] = useState();

  const plus = () => {
    setHyeonJaeGab();
  }
}

function GyeGwaGab() {
  const [giulGwaGab, setGiulGwaGab] = useState();
}

const App: React.FC = () => {
  return (
    <BonChae> 
      <HwaMeon>
        <GyelGwa>
          25
        </GyelGwa>
        <Del>
          del
        </Del>
      </HwaMeon>
      <YeepLiuck>{bts.map((bt)=>(               //template literal에서 글자 배열로 나타내는 거 이용해서 특정 버튼만 색깔 바꿔보기
        <JungAngJungLiuel>{bt.map((b: string)=>(
          <CalcBt>{b}</CalcBt>))}
        </JungAngJungLiuel>))}
      </YeepLiuck>
    </BonChae>
);
}

export default App;