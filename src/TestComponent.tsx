import React, { useState } from "react";

//propsの型を定義
interface Props {
  text: string;
}
//複数の型定義
interface UserData {
  id: number;
  name: string;
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(null); //stateの定義
  const [user, setUser] = useState<UserData>({ id: 1, name: "test" });
  const [inputData, setInputData] = useState("");

  const handle_input_change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <div>
      <h1>{props.text}</h1>
      <h1>{count}</h1>

      <input type="text" value={inputData} onChange={handle_input_change} />
      <h1>{inputData}</h1>
    </div>
  );
};

export default TestComponent;
