//when i work globally
// commands  tsc --init
// tsc ./index.ts --watch

let x: string = "heloko";

console.log(x);

// Type Alias
type UserID = string | number;

const useId: UserID = "126AS";

// Union Type
type Guest = "admin" | "user"; // لازم يبقي حاجه من دول بالظبط مينفعش احط اي استرنج تاني

const user: Guest = "user";

// Interface
interface Person {
  id: UserID;
  name: string;
}

// Intersection Type
interface AdminDetails {
  permissions: string[];
}

type Admin = Person & AdminDetails & { role: "admin" }; // & يعني اي حاجه مشتركه ف الاتنين
type RegularUser = Person & { role: "user" };

// Generic Function
function returnArray<T>(value: T): T[] {
  return [value];
}

console.log(returnArray<number>(5));
console.log(returnArray<string>("salma"));

function getNames(name1: string, name2: string): string {
  return name1 + name2;
}

console.log(getNames("salma", " ahmed "));

//Type Guard ex.1
interface Fruit {
  name: string;
  color: string;
  season: string;
}

interface Vegitable {
  name: string;
  color: string;
  calories: number;
}

function isVegitable(x: Vegitable | Fruit): x is Vegitable {
  if ("calories" in x) {
    return true; // y3ny vegitable
  } else {
    return false; //y3ny fruit
  }
}

// : x is Vegitable   // جملة الرترن دي معاناها ان لو رجعت ترو اذا اكس ده فيجيتبول
// (we call this type narrowing)
//

// Type Guard ex.2
function isAdmin(user: Admin | RegularUser): user is Admin {
  return user.role === "admin"; // لو ترو هيبقي هوا ادمن //narrowing
}

// Type assertion
const someValue: any = "hello";
const strLength = (someValue as string).length; // بعامل نوع علي انه نوع اخر كاني بقول للغه انا عايزه النوع كده

//Type Casting

const num = Number("123");
console.log(num); // 123 number
//بقول للغه هنا تحولي القيمه دي ف الرن تايم للنوع ده يعني بغير قيمه لنوع اخر

// never
// لو مستحيل اوصل لحاجه معينه

function throwError(message: string): never {
  throw new Error(message);
}

function fail(): never {
  return throwError("Something went wrong!");
}
//الداله مش هتكمل تنفيذها هيحصل ايرور

//  Unit Type

type Square = "square"; // يحتوي علي قيمه واحده فقط لا يمكن تغييرها

const shape: Square = "square"; // مش هيقبل غيرها
//كمان زي ال null, undefiend

//& Some of  Utility Types ==>>>>

interface User {
  id: number;
  name: string;
  email: string | null;
  role: "admin" | "user" | "guest";
  isActive: boolean;
}

//Partial
function updateUser(updates: Partial<User>) {
  console.log(`Updating  ${updates}`);
}
updateUser({ name: "Ali", isActive: false }); // اختياري احط اي بروبيرتز من الاترفيس

//Pick
type NewUser = Pick<User, "id" | "name">;

const publicUser: NewUser = {
  id: 1,
  name: "Fatima",
};
//بنتقي او بحدد عن طريقها البروبيرتز اللي عايزاها فقطط

//Omit
//عكس الPick  // بستبعد خصائص معينه مش عايزاها
type User2 = Omit<User, "email" | "isActive">;

const usser: User2 = {
  id: 2,
  name: "Huda",
  role: "user",
};

//Record
//بيخليني اخد كل الكيز اللي ف نوع معين واحددلها انا تايب ثابت بنفسي

type Role = "admin" | "user" | "guest";

type NewRole = Record<Role, number>;

const role: NewRole = {
  admin: 2,
  user: 5,
  guest: 3,
};

// NonNullable
//بنشيل بيه ال null ,undefiend من اي تايب

type Email = NonNullable<User["email"]>; // كدا شيلت من البروبرتي ايميل التايب نل وسيبت الاسترنج فقط

function sendEmail(email: Email) {
  console.log(`Sending email to ${email}`);
}
sendEmail("test@example.com"); // هتقبل استرنج فقط

// ٌReadonly
// بتخلي البروبرتز للقراءه فقط

interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete users",
};

// todo.title = "Hello";   ممنوع اعمل reassign لل title

//Awaited
// بيحاكي ال async await

//&& type A = Awaited<Promise<string>>;
//&& type A = string

//* لوعندي تايب type User = Awaited<ReturnType<typeof fetchUser>>;

//* fetchUser => دي الفانكشن اللي بتكول الباك اند مثلا
// مثال ف رياكت كومبوننت

//* import React, { useEffect, useState } from "react";

// function UserProfile() {
//& const [user, setUser] = useState< User | null>(null);

// useEffect(() => {
// async function loadUser() {
// const data = await fetchUser();
// setUser(data);
// }
