//when i work globally
// commands  tsc --init
// tsc ./index.ts --watch
var x = "heloko";
console.log(x);
var useId = "126AS";
var user = "user";
// Generic Function
function returnArray(value) {
    return [value];
}
console.log(returnArray(5));
console.log(returnArray("salma"));
function getNames(name1, name2) {
    return name1 + name2;
}
console.log(getNames("salma", " ahmed "));
function isVegitable(x) {
    if ("calories" in x) {
        return true; // y3ny vegitable
    }
    else {
        return false; //y3ny fruit
    }
}
// : x is Vegitable   // جملة الرترن دي معاناها ان لو رجعت ترو اذا اكس ده فيجيتبول
// (we this type narrowing)
//
// Type Guard
function isAdmin(user) {
    return user.role === "admin"; // لو ترو هيبقي هوا ادمن //narrowing
}
// Type assertion
var someValue = "hello";
var strLength = someValue.length; // بعامل نوع علي انه نوع اخر كاني بقول للغه انا عايزه النوع كده
//Type Casting
var num = Number("123");
console.log(num); // 123 number
//بقول للغه هنا تحولي القيمه دي ف الرن تايم للنوع ده يعني بغير قيمه لنوع اخر
// never
// لو مستحيل اوصل لحاجه معينه
function throwError(message) {
    throw new Error(message);
}
function fail() {
    return throwError("Something went wrong!");
}
var shape = "square"; // مش هيقبل غيرها 
//Partial
function updateUser(updates) {
    console.log("Updating  ".concat(updates));
}
updateUser({ name: "Ali", isActive: false }); // اختياري احط اي بروبيرتز من الاترفيس
var publicUser = {
    id: 1,
    name: "Fatima",
};
var usser = {
    id: 2,
    name: "Huda",
    role: "user",
};
var role = {
    admin: 2,
    user: 5,
    guest: 3,
};
function sendEmail(email) {
    console.log("Sending email to ".concat(email));
}
sendEmail("test@example.com"); // هتقبل استرنج فقط
var todo = {
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
