# TypeScript 核心进阶


TypeScript 是由微软公司在 2012 年正式发布

## 1. 全局安装ts
```
npm install typescript -g
yarn global add typescript
```
## 2. 全局安装ts-node
```
npm install -g ts-node
```
## 3. 可以定义静态类型

**基础静态类型**

```ts
const count:number = 1;
```
:::tip 提示
**静态类型的意义**是，数据的类型不可变，如果定义为 Number ，就不能赋值其他类型的值

**好处**：在编辑器输入count., 会出现number类型的属性和方法提示
:::

**对象类型**
```ts
interface XiaoJieJie {
  uname: string;
  age: number;
}

const xiaohong: XiaoJieJie = {
  uname: "小红",
  age: 18,
};
```

**数组类型**

```ts
const xiaoJieJies: String[] = ["谢大脚", "刘英", "小红"];
```
::: warning
变量为一个数组， 并且它的值必须为 String
:::

**数组多个类型**

数组，有Number, String两种类型的写法如下
```ts
const arr: (number | string)[] = [1, "string", 2];
```

**数组中的元素是对象**

写法如下：
```ts
// 类型别名
type Lady = { name: string, age: Number };

const xiaoJieJies: Lady[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];
```

**元组**

简单理解：**带顺序定义的数组**
```ts
const xiaojiejies: [string, string, number][] = [
  ["dajiao", "teacher", 28],
  ["liuying", "teacher", 18],
  ["cuihua", "teacher", 25],
];
```

元组的应用场景例如处理 **CVS**

**类类型**
```ts
class Person {}
const dajiao: Person = new Person();
```

**函数类型**
```ts
const jianXiaoJieJie: () => string = () => {
  return "大脚";
};
```

## 4. 类型注解与类型推断（重点）

- 类型注解，就是上面提到的变量的类型，例如下面的 `number`
```ts
const count:number = 1;
```

- 类型推断
```ts
let countInference = 123;
```

上面没有声明变量的类型，但是鼠标放上去会提示number类型，这就是类型推断

## 5. 什么时候需要添加类型注解

- 如果 `TS` 能够自动分析变量类型， 我们就什么也不需要做了
- 如果 `TS` 无法分析变量类型的话， 我们就需要使用类型注解

```ts
function getTotal(one: number, two: number) {
  return one + two;
}

const total = getTotal(1, 2);
```
total 可以推断出来，不用加注解，但是one 、two是需要加注解的

## 5. 函数参数与返回类型定义

```ts
function getTotal(one: number, two: number) {
  return one + two;
}

const total = getTotal(1, 2);
```

上面的代码其实有个小bug，就是没有定义返回值类型，虽然能够推断出返回值的类型为number，但是如果代码写错了，就会出现问题，如下
```ts
function getTotal(one: number, two: number) {
  return one + two + "";
}

const total = getTotal(1, 2);
```

这个时候返回的就是字符串类型了，但是不会报错，所以可以给函数给出明确的数据类型，来避免一些错误
```ts
function getTotal(one: number, two: number): number {
  return one + two; 
}

const total = getTotal(1, 2);
```

**无返回值定义 void**
```ts
function sayHello(): void {
  console.log("hello world");
}
```

**函数参数为对象时**

以下为**错误**写法
```ts
function add({ one: number, two: number }):number {
  return one + two;
}

const total = add({ one: 1, two: 2 });
```

正确写法如下：
以下为**错误**写法
```ts
function add({ one, two }: { one: number, two: number }):number {
  return one + two;
}

const total = add({ one: 1, two: 2 });
```

## 6. 接口 Interface

```ts
interface Girl {
  name: string;
  age: number;
  bust: number;
}

const screenResume = (girl: Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
  girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "你被淘汰"));
};

const getResume = (girl: Girl) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "胸围是：" + girl.bust);
};
const girl = {
  name: "大脚",
  age: 18,
  bust: 94,
};

screenResume(girl);
getResume(girl);
```

乍一看，这个与类型别名一模一样，其实是有区别的，其实，接口还有以下骚操作和硬性条件
1. 接口必须是对象，类型别名可以是单纯的基本类型
```ts
type Girl1 = stirng;

const girl = {
  name: "大脚",
  age: 18,
  bust: 94,
};
```
```ts
type Girl1 = stirng;
```

2. 接口可以定义非必填值 ?:
```ts
interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
}
```

3. 接口定义任意类型的值
```ts
interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  [propname: string]: any;
}
```
其中propname表示可以传入任意类型名字的属性， any表示任意类型的值

4. 接口定义方法
```ts
interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  [propname: string]: any;
  say(): string;
}
```

5. 类继承接口
```ts
class XiaoJieJie implements Girl {
  name = "刘英";
  age = 18;
  bust = 90;
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  }
}
```

6. 接口继承接口
```ts
interface Teacher extends Girl {
  name = "刘英";
  teach(): string;
}
```

:::tip
继承后会包含被继承的属性和方法，以及自定义的方法
:::

## 7. 类

1. 类的继承

```ts
class Lady {
  content = "Hi，帅哥";
  sayHello() {
    return this.content;
  }
}
class XiaoJieJie extends Lady {
  sayLove() {
    return "I love you";
  }
}
```

2. 类的重写

```ts
class Lady {
  sayHello() {
    return "Hi，帅哥";
  }
}
class XiaoJieJie extends Lady {
  sayLove() {
    return "I love you";
  }
  // 覆盖了父类的 sayHello 方法
  sayHello() {
    return "Hi , honey!";
  }
}
```

3. 类的 super 关键字

```ts
class Lady {
  sayHello() {
    return "Hi，帅哥";
  }
}
class XiaoJieJie extends Lady {
  sayLove() {
    return "I love you";
  }
  // 同名方法中调用父类中的方法
  sayHello() {
    return super.sayHello() + "，能加个微信吗？"
  }
}
```

## 8. 类的访问类型

类的属性有三种访问类型：`private、protected、public`
- `public` 在类的内外部以及子类中都可以访问其中的属性和方法
- `protected` 可以在类内部或子类中使用
- `private` 只能在内部使用

1. 默认为 public 
```ts
class Lady {
  name: string;
}
```

其中 name 属性，没有申明访问类型，默认是public，与下面的写法等价

```ts
class Lady {
  public name: string;
}
```

2. protected
```ts
class Lady {
  protected name: string;
}
```

3. private
```ts
class Lady {
  private name: string;
}
```

4. readonly 赋值一次后，不可更改
```ts
class Person {
  public readonly _age: number;
  constructor(age:number){
    this._age = age // 第一次赋值
  }
}

const person = new Person(18) 
person._age = 20  // vscode 报错
```



## 9. 类的构造函数

1. 构造函数的意义
- 在类被初始化时，自动执行的方法， 用于需要提前完成工作

2. 用 constructor 定义构造函数
```ts
class Person {
  private name: string;
  constructor(name:string){
    this.name = name
  }
}

const person = new Person('张三')
```

3. 构造函数的简化写法
```ts
class Person {
  constructor(public name:string){}
}

const person = new Person('张三')
console.log(person.name)
```
这相当于定义了一个name属性

4. 子类中调用父类的构造方法 super()
```ts
class Person {
  constructor(public name:string){}
}

class Teachaer extends Person {
  constructor(public age:string){
    super('张三')
  }
}

const teachaer = new Teachaer(18)
console.log(teachaer.name) // 张三
console.log(teachaer.age) // 18
```
:::tip
如果父类没有构造方法，在子类的构造方法中也需要调用 super()方法，否则会报错
:::
```ts
class Person {}

class Teachaer extends Person {
  constructor(public age:string){
    super()
  }
}

const teachaer = new Teachaer(18)
console.log(teachaer.age) // 18
```

## 10. 类的 Getter、Setter、static

1. private 属性值可以通过 getter 属性的关键字 get 获取
```ts
class Person {
  constructor(private _age:number){}
  get age(){
    return this._age
  }
}

const person = new Person(18)
console.log(person.age) // 18
```

2. private 属性值可以通过 setter 属性的关键字 set 赋值

```ts
class Person {
  constructor(private _age:number){}
  get age(){
    return this._age
  }
  set age(age:number){
    this._age = age
  }
}

const person = new Person(18)
person.age = 26
console.log(person.age) // 25
```

3. static
不用 `new` 对象，直接使用类中的方法
```ts
class Person {
  static sayLove() {
    return "I Love you";
  }
}

console.log(Person.sayLove（）) // 25
```

## 11. 抽象类

关键字：abstract
```ts
abstract class Girl{
    abstract skill()  //因为没有具体的方法，所以我们这里不写花括号
}

class Waiter extends Girl{
    skill(){
        console.log('大爷，请喝水！')
    }
}

class BaseTeacher extends Girl{
    skill(){
        console.log('大爷，来个泰式按摩吧！')
    }
}

class seniorTeacher extends Girl{
    skill(){
        console.log('大爷，来个SPA全身按摩吧！')
    }
}
```

应用场景就是定义方法名，但是由子类实现具体的细节

## 12. 联合类型

通俗的讲，联合类型就是指多个类型, 用 | 定义
```ts
interface Waiter {
  anjiao: boolean;
  say: () => {};
}

interface Teacher {
  anjiao: boolean;
  skill: () => {};
}

function judgeWho(animal: Waiter | Teacher) {}
```

## 13. 类型保护

**1. 类型断言**

用`as`实现类型断言， 通俗理解就是判断是什么类型

```ts
interface Waiter {
  anjiao: boolean;
  say: () => {};
}

interface Teacher {
  anjiao: boolean;
  skill: () => {};
}

function judgeWho(animal: Waiter | Teacher) {
  if (animal.anjiao) {
    (animal as Teacher).skill();
  }else{
    (animal as Waiter).say();
  }
}
```

2. in 语法

`in` 适用于对象

```ts
interface Waiter {
  anjiao: boolean;
  say: () => {};
}

interface Teacher {
  anjiao: boolean;
  skill: () => {};
}

function judgeWhoTwo(animal: Waiter | Teacher) {
  if ("skill" in animal) {
    animal.skill();
  } else {
    animal.say();
  }
}
```

3. typeof 语法

由于两个参数的值有都有两种值，typescript 不能准确的判断计算方式，会直接报错

```ts
function add(first: string | number, second: string | number) {
  return first + second;
}
```

可以用typeof优化，这样就不会报错了
```ts
function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}
```

4. instanceof 语法

instanceof 只能用于类上

```ts
class NumberObj {
  count: number;
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
  return first.count + second.count;
}
```
上面的代码，也会报错，因为不能确定count与count的类型

可以用 instanceof 判断
```ts
function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
```

## 14. Enum 枚举类型
```ts
enum Status {
  MASSAGED
  SPA,
  DABAOJIAN
}
```

枚举类型的关键点，在于枚举类型有默认值，第一个元素对应0，依此类推1，2，...

也可以自定义第一个值， 后面的值依此类推2，3，...
```ts
enum Status {
  MASSAGED = 1
  SPA,
  DABAOJIAN
}
```

相对与对象的写法，稍微简化一下，下面是对象的写法
```ts
const Status = {
  MASSAGED: 0,
  SPA: 1,
  DABAOJIAN: 2
}
```

## 15. 泛型
1. 泛型的基本理解

用 `<>` 定义泛型, 通俗讲就是类型的提取，调用的时候传递类型，主要作用就是为了灵活性

```ts
function join<JSPang>(first: JSPang, second: JSPang) {
  return `${first}${second}`;
}
join < string > ("jspang", ".com");
join < number > (1, 2);
```

2. 数组中的泛型
有两种写法：
- 第一种写法
```ts
function myFun<ANY>(params: ANY[]) {
  return params;
}
myFun < string > ["123", "456"];
```

- 第二种写法
```ts
function myFun<ANY>(params: Array<ANY>) {
  return params;
}
myFun < string > ["123", "456"];
```

在工作中，我们经常使用`<T>`来作泛型的表示，当然这不是硬性的规定，只是大部分程序员的习惯性写法。

3. 多泛型

```ts
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join < number, string > (1, "2");
```

4. 类泛型
```ts
class SelectGirl<T> {
  constructor(private girls: T[]) {}
  getGirl(index: number): T {
    return this.girls[index];
  }
}

const selectGirl = new SelectGirl < string > (["大脚", "刘英", "晓红"]);
console.log(selectGirl.getGirl(1));
```

5. 泛型中的继承
```ts
interface Girl {
  name: string;
}

class SelectGirl<T extends Girl> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index];
  }
}

const selectGirl = new SelectGirl  ([
  { name: "大脚" },
  { name: "刘英" },
  { name: "晓红" }
]);
console.log(selectGirl.getGirl(1));
```

6. 泛型约束

```ts
class SelectGirl<T extends number | string> {
  //.....
}
```



















