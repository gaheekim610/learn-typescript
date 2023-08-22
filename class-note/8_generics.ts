// function logText(text){
//   console.log(text);
//   return text;
// }

// logText(10);
// logText('hi');
// logText(true);

// function logText<T>(text:T):T{
//   console.log(text);
//   return text;
// }

// logText('hi');

function logText(text){
  console.log(text);
  return text;
}

logText(10);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj:Dropdown = { value:'abc',selected:false}

interface Dropdown<T> {
  value: T;
  selected: boolean
}

const obj: Dropdown<number> = {value: 123,selected: true}

// 제네릭의 타입 제한
// function logTexetLength<T>(text:T[]): T[] {
//   console.log(text.length);
//   return text;
// }
// logTexetLength<string>(['hi'])

// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
  length : number;
}

function logTexetLength<T extends LengthType>(text:T): T{
  text.length;
  return text;
}

logTexetLength('a')

// 제네릭 타입 제한 3 = keyof

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShopptingItemOption<T extends keyof ShoppingItem>(itemOption:T):T{
  return itemOption;
}
// getShopptingItemOption(10);
getShopptingItemOption('name')
