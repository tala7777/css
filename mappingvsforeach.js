
// --- Created Object (new memory) ---
const person1 = {
  name: "Tala",
  age: 20
};

console.log("person1 (original):", person1);


// --- Assigned Object (NOT a new object — same reference) ---
const person2 = person1;

console.log("person2 (assigned from person1):", person2);


// --- Editing person2 also edits person1 ---
person2.name = "Lina";

console.log("After editing person2:");
console.log("person2:", person2);
console.log("person1:", person1);
// Both changed because they point to the same object


// --- Creating a REAL copy using spread operator ---
const person3 = { ...person1 };

console.log("person3 (copied):", person3);


// --- Editing the copied object DOES NOT affect the original ---
person3.age = 30;

console.log("After editing person3:");
console.log("person3:", person3);
console.log("person1:", person1);
// Only person3 changed!
// -------- 1) Create User 1 (new object) --------
let user1 = {
  firstName: "Tala",
  lastName: "Shkokani",
  address: "Amman",
  job: "Developer"
};

console.log("User 1:", user1);


// -------- 2) Create User 2 (another new object) --------
let user2 = {
  firstName: "Sara",
  lastName: "Ahmad",
  address: "Irbid",
  job: "Designer"
};

console.log("User 2:", user2);


// -------- 3) Assign User 1 to User 3 (NOT a new object) --------
let user3 = user1;

console.log("User 3 (assigned from User 1):", user3);


// -------- 4) Add a NEW property to each user --------

// add to user1
user1.phone = "0790000000";

// add to user2
user2.phone = "0781111111";

// add to user3 (this will ALSO affect user1 because user3 = user1)
user3.phone = "0772222222";


// -------- 5) Final results --------
console.log("\n--- FINAL VALUES ---");

// user1 and user3 will have the SAME phone number
console.log("User 1:", user1);
console.log("User 2:", user2);
console.log("User 3:", user3);
