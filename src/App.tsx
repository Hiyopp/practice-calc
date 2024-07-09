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

type btsType = {
  id: number;
  value: string;
}

let btsNaeYong: btsType[][]=[[{id: 1, value: 'C'}],[{id: 6, value: '()'}],[{id: 11, value: '%'}],
[{id: 16, value: '/'},{id: 17, value: 'X'},{id: 18, value: '-'},{id: 19, value: '+'},{id: 20, value: '='}]];
  for (let i = 0; i < 3; i++){
    for (let k = 1; k < 5; k++){
      if(k===4) {
        switch(i) {
          case 0:
            btsNaeYong[i][k]={id: 5*(i+1), value: '+/-'};
            break;
          case 1:
            btsNaeYong[i][k]={id: 5*(i+2), value: '0'};
            break;
          case 2:
            btsNaeYong[i][k]={id: 5*(i+3), value: '.'};
            break;
        }
      }
      else btsNaeYong[i][k]={id: (k+1)+i*5, value: String((i+7)-(k-1)*3)};

    }
  }

const bts: btsType[][] = new Array(4);                //bts[[5],[5],[5],[5]] 또는 bts[4][5]
for (let i = 0; i < 4; i++) {
    bts[i] = new Array(5);
    for (let k = 0; k < 5; k++){
      bts[i][k] = btsNaeYong[i][k];
    }
}

const App: React.FC = () => {

  const [hyeonJaeGab, setHyeonJaeGab] = useState<string[]>([]);

  function Click(b: string) {
    hyeonJaeGab[9] ? setHyeonJaeGab(hyeonJaeGab.filter(st => st !== '9')) :  //여기도 위 배열처럼 id로 설정
    hyeonJaeGab[0] ? setHyeonJaeGab([...hyeonJaeGab,b]) : setHyeonJaeGab([b]);
  }

  function GyeGwaGab() {
    const [giulGwaGab, setGiulGwaGab] = useState();

    const plus = () => {
    }

  }

  return (
    <BonChae> 
      <HwaMeon>{hyeonJaeGab.map((hJG) => (   //key id로 바꾸기
        <GyelGwa key={hJG}>
          {hJG}
        </GyelGwa>))}
        <Del>
          del
        </Del>
      </HwaMeon>
      <YeepLiuck>{bts.map((bt)=>(
        <JungAngJungLiuel key={bt[0].id}>{bt.map((b)=>(
          <CalcBt key={b.id} onClick={() => {Click(b.value)}}>{b.value}</CalcBt>))}
        </JungAngJungLiuel>))}
      </YeepLiuck>
    </BonChae>
);
}

export default App;