/*
  1. myDiverseArray와 anotherDiverseArray에 적용할 수 있는 제네릭 타입 MyDiverseArray를 만드세요.
  힌트: 타입도 변수처럼 type alias로 선언 가능.
*/

type MyDiverseArray<T> = {};

const myDiverseArray: MyDiverseArray<Array<number | boolean>> = [
  true,
  100,
  101,
  102,
  false,
];
const anotherDiverseArray: MyDiverseArray<
  Array<number[] | string | boolean[]>
> = [myDiverseArray, "backend developer", { name: "hermione" }];

/*
  2. stringOnlyArray와 mixedArray에 적용할 수 있는 제네릭 타입 WithDefaultType을 만들되
  stringOnlyArray에는 타입 인자를 전달하지 않아도 컴파일이 되도록 하세요.
*/

type WithDefaultType<T = string[]> = {};

const stringOnlyArray: WithDefaultType = [
  "we're",
  "all",
  "gonna",
  "make",
  "it",
];
const mixedArray: WithDefaultType<number[] | string[]> = [
  2023,
  "year of the rabbit",
];

/*
  3. createTupleTriplet이라는 함수가 있습니다.
  이 함수는 세개의 인자를 전달받을 수 있고, 전달받은 인자를 순서대로 배열/튜플에 담아 반환을 합니다.
  제네릭을 써서 함수를 완성하세요. (타입 변수, 인자 타입, 반환 타입)
*/

export function createTupleTriplet<T>(
  firstValue: T,
  secondValue: T,
  thirdValue: T
): Array<string | number | Array<string>> {
  return ["1234", 1234, ["1234"]];
}

/*
  4. strictCreateTupleTriplet이라는 함수가 있습니다.
  이 함수는 세개의 인자를 전달받을 수 있고, 전달받은 인자를 순서대로 배열/튜플에 담아 반환을 합니다.
  제네릭을 써서 함수를 완성하세요. (타입 변수, 인자 타입, 반환 타입)
*/

export function strictCreateTupleTriplet<T>(
  firstValue: string | number,
  secondValue: boolean,
  thirdValue: Array<T>
): Array<string | number | boolean | Array<T>> {
  const fstVal = firstValue;
  const sndVal = secondValue;
  const TndVal = thirdValue;
  const arr = [fstVal, sndVal, TndVal];
  return arr;
}

/*
  완성된 함수는 다음과같이 호출이 됐을 때 컴파일이 되거나 에러가 떠야됩니다.
*/

// 컴파일
strictCreateTupleTriplet("123", true, ["123"]); // ✅
strictCreateTupleTriplet(2023, false, [2023]); // ✅

// 에러 (진도를나갈 수 있도록 확인 후 주석처리하세요)
strictCreateTupleTriplet(2023, false, [123]); // ❌ ([123] 부분 에러)
strictCreateTupleTriplet("2023", false, ["i am a string"]); // ❌ (["i am a string"] 부분 에러)

/*
  5. getRoleOptions와 getCuisineOptions라는 함수가 있습니다.
  주어진 enum과 Option<T> 타입을 활용하여 함수를 완성하고 테스트를 pass 하세요.
*/

enum Role {
  ROLE_ADMIN = "ROLE_ADMIN",
  ROLE_CUSTOMER = "ROLE_CUSTOMER",
  ROLE_SELLER = "ROLE_SELLER",
}

enum Cuisine {
  CUISINE_KOREAN = "CUISINE_KOREAN",
  CUISINE_ITALIAN = "CUISINE_ITALIAN",
  CUISINE_THAI = "CUISINE_THAI",
}

interface Option<T> {
  label: string;
  value: T;
}

export function getRoleOptions<T>(data: T): T {
  return data;
}

export function getCuisineOptions() {}

/*
  6-7. Queue라는 class가 있습니다.
  제네릭 인터페이스 IQueue를 완성하세요 (인자 타입, 반환 타입).
  완성 된 인터페이스를 Queue class에 반영하세요.
  Queue class는 여러 데이터 구조를 전달받을 수 있는 제네릭 class입니다.
  힌트: 강의자료 Stack 참조하세요.
*/

interface IQueue<T> {
  enqueue(itme: T): void;
  dequeue: T | undefined;
  size: T | undefined;
}

export class Queue {}

/*
  8. IRepository라는 인터페이스가 있습니다.
  다음 네가지 메소드가 있다고 가정했을 때 각 메소드의 타입을 정의해주세요. (인자 타입, 반환 타입)
  IRepository는 제네릭 인터페이스입니다.
*/

interface IRepository<T = string | number | boolean> {
  create: boolean;
  findById: T;
  updateById: Date;
  deleteById: T;
}

/*
  9. getLength라는 함수가 있습니다.
  제네릭을 사용하여 매개변수의 길이를 반환하도록하세요.
  길이를 알 수 없는 매개변수는 에러가납니다.
*/

export function getLength<T>(input: T) {
  return Object.keys(input).length;
}

getLength(123); // ❌
getLength([123]); // ✅
getLength("12345"); // ✅

/*
  10. EnumRecord 라는 타입이 있습니다.
  제네릭을 사용하여 myFirstRecord 그리고 mySecondRecord와 같은 객체를 충족하는 타입을 완성하세요.
*/

type EnumRecord = {};

const myFirstRecord = {
  CUISINE_ITALIAN: ["pasta", "burrata"],
  CUISINE_KOREAN: ["bibimbap", "kimchi"],
  CUISINE_THAI: ["tom yum soup", "pad thai"],
};

const mySecondRecord = {
  ROLE_ADMIN: ["payroll"],
  ROLE_CUSTOMER: ["orders"],
  ROLE_SELLER: ["products", "revenue"],
};
