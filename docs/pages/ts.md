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



