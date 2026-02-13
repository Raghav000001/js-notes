# JavaScript Loops Practice — Development Focused (Easy–Medium)
---

##  **1️⃣ Calculate total price of cart items**

```js
const prices = [299, 499, 999, 199];
```
Return total cart value using **for loop** OR **reduce**.

---

## **2️⃣ Remove empty strings from an array**

```js
["hello", "", "world", "", "js"]
```
Output → `['hello','world','js']`

---

## **3️⃣ Extract all user emails**

```js
const users = [
  {name: "A", email: "a@mail.com"},
  {name: "B", email: "b@mail.com"},
];
```

 Output → `["a@mail.com", "b@mail.com"]`
(Use **map()**)

---

## **4️⃣ Count number of spaces in a string**

```js
"hello world how are you"
```
Use a loop to count spaces.

---

## **5️⃣ Convert an array of numbers into a comma-separated string**

```js
[1, 2, 3] → "1,2,3"
```

 Without using `.join()` — use loop only.

---

## **6️⃣ Filter only active users**

```js
[
 {name:"A", active:true},
 {name:"B", active:false},
 {name:"C", active:true}
]
```

 Output → `[ {A}, {C} ]`
(Use **filter**)

---

## **7️⃣ Count page visits from array logs**

```js
const visits = ["home","home","about","home","contact"];
```
 Output:{
  home: 3,
  about: 1,
  contact: 1
}
```

```
## **8️⃣ Separate numbers into even and odd arrays**

```js
Input: [1,2,3,4,5]
Output: { even:[2,4], odd:[1,3,5] }
```

## **9️⃣ Calculate full total of cart with quantity**

```js
[
 {item:"Shoes", price:500, qty:2},
 {item:"Cap", price:200, qty:1}
]
```
Output: `1200`

---

## **🔟 Case-insensitive search filter**

```js
const items = ["Apple","Mango","banana","Orange"];
search = "an";
```
Output → `["Mango", "banana"]`
(Use **filter + toLowerCase()**)

---

