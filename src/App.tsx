import React from "react";
import "./App.css";
import Data from "./data.json";
import TestComponent from "./TestComponent";

//jsonのデータを呼び出す
type USERS = typeof Data;

interface NAME {
  first: string;
  last: string | null;
}

let name: NAME = {
  first: "yamada",
  last: "taro",
};

const func1 = (x: number, y: number): number => {
  return x + y;
};

//Intersection Types　二つの形を結合するtype
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "tokyo",
  username: "xxx",
  password: "yyy",
};

//Union Types 型定義のルールを追加
let value: boolean | number;
value = 1;
value = true;

let array_1: (number | string)[];
array_1 = [0, 1, "tato"];

let company: "facebook" | "google" | "amazon";

//typeof データ型を継承
let msg: string = "hi";
let msg_2: typeof msg;

let animal = { cat: "small cat" };
let new_animal: typeof animal = { cat: "big cat" };

//keyof
type KEYS = {
  primary: string;
  secondary: string;
};

let key: keyof KEYS;
key = "primary";

//typeof + keyof
const SPORTS = {
  soccer: "soccer",
  baseball: "baseball",
};

let key_sports: keyof typeof SPORTS;

//enum
enum OS {
  windows,
  mac,
  linux,
}

interface PC {
  id: number;
  OS_type: OS;
}

const PC_1: PC = {
  id: 1,
  OS_type: OS.windows,
};

//型の互換性

const comp_1 = "test";
let comp_2: string = comp_1;

let comp_3: string = "test";
//let comp_4: "test" = comp_3; //できない

let funcComp_1 = (x: number) => {};
let funcComp_2 = (x: string) => {};

//funcComp_1 = funcComp_2; //データ型が違うからできない

//Generics  ジェネリックス
//<型指定>

interface GEN<T> {
  item: T; //定まっていない状態
}

const gen_0: GEN<string> = { item: "hello" };
const gen_1: GEN<number> = { item: 12 };

interface GEN_1<T = string> {
  item: T;
}

const gen_3: GEN_1 = { item: "test" };

interface GEN_2<T extends string | number> {
  item: T;
}

const gen_4: GEN_2<string> = { item: "hello" };
const gen_5: GEN_2<number> = { item: 13 };

function funcGEN<T>(props: T) {
  return { item: props };
}

const gen_6 = funcGEN("test");

function funcGEN_1<T extends string | null>(props: T) {
  return { value: props };
}

const gen_8 = funcGEN_1("hello");

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <TestComponent text="hello from app" />
      </div>
    </div>
  );
};

export default App;
