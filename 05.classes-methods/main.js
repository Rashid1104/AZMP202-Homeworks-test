// task 1

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     calculatorArea(){
//         return this.width*this.height;
//     }
//     calculaterPerimeter(){
//         return 2 * (this.width + this.height);
//     }
// }
// let rect = new Rectangle(5,10)
// console.log("Area of the rectangle:",rect.calculatorArea());
// console.log("Perimeter of the rectangle:",rect.calculaterPerimeter());

// task 2

// class bankAccount {
//     constructor(accountNumber,balance = 0) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }

//     deposit(amount){
//         if (amount > 0) {
//             this.balance += amount;
//             console.log(`Operation was successed.Your new balance: ${this.balance}`);
            
//         }else{
//             console.log("Invalid message!!!"); 
//         }       
//     }
//     withdraw(amount){
//         if (amount <= 0) {
//             console.log("Invalid message!!!");
//         }else if(amount > this.balance){
//         console.log(`Your balance is less than ${amount}`);
//         }else{   
//             this.balance -= amount;
//             console.log(`Operation was successed.Now yuor balance: ${this.balance}`);  
//         }
//     }
// }
// let Person1 = new bankAccount('101',300);
// let Person2 = new bankAccount('102',500);
// Person1.deposit(200);
// Person1.withdraw(100);
// Person2.deposit(500);
// Person2.withdraw(600);

// task 3

// class Human {
//     constructor(name , surname,age = 0,gender , nationality) {
//        this.name = name;
//        this.surname =surname;
//        this.age = age;
//        this.gender = gender;
//        this.nationality = nationality; 
//     }

//     getFullName(){
//         return `${this.name} ${this.surname}`
//     }
//     getBirthYear(){
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.age;
//     }
// }

// class User extends Human {
//     constructor(name, surname, age, gender, nationality, username, email, isAdmin, password, bio) {
//         super(name, surname, age, gender, nationality);
//         this.username = username;
//         this.email = email;
//         this.isAdmin = isAdmin;
//         this.isLogged = false;
//         this.password = password.length >= 5 ? password : null;
//         this.bio = bio.length <= 30 ? bio : null;
//     }

//     changePassword(current,newPass){
// if (this.password === current) {
//     if (current === newPass) {
//         return `please change your password to new`
//     }else {
// this.password = newPass;
//    return `${this.password} was succesfull changed to ${newPass}`;  
// }
// }else{
//     return `this password is uncorrect.Please try again!!!`;    
// }
//     }
//     changeEmail(currentEmail,newEmail){
//         if (this.email === currentEmail) {

//  }
//             const isUnique = !this.username.some(user => user.email === newEmail);
//             if (currentEmail === newEmail) { 
//                 this.email = newEmail;
//                  return `${this.email} was succesfull changed to ${newEmail}`;
//             }else{
//             return `this email is exist.Please try again!!!`;    
//         }
//             }
// }

// // Global function

// let users = [
//     new User(
//       "John",
//       "Doe",
//       "Male",
//       "American",
//       "johndoe",
//       "john.doe@example.com",
//       false,
//       "password123",
//       "A bit about John.",
//       30
//     ),
//     new User(
//       "Jane",
//       "Doe",
//       "Female",
//       "British",
//       "janedoe",
//       "jane.doe@example.com",
//       true,
//       "securepassword",
//       "Jane's bio goes here.",
//       28
//     ),
//     new User(
//       "Alex",
//       "Smith",
//       "Non-binary",
//       "Canadian",
//       "alexsmith",
//       "alex.smith@example.com",
//       false,
//       "alexspassword",
//       "All about Alex.",
//       35
//     ),
//     new User(
//       "Emily",
//       "Clark",
//       "Female",
//       "Australian",
//       "emilyclark",
//       "emily.clark@example.com",
//       false,
//       "emilyspassword",
//       "Explorer and photographer.",
//       26
//     ),
//     new User(
//       "Michael",
//       "Brown",
//       "Male",
//       "German",
//       "michaelbrown",
//       "michael.brown@example.com",
//       true,
//       "michaelspass",
//       "Coffee enthusiast. Avid reader.",
//       32
//     ),
//     new User(
//       "Luis",
//       "Gomez",
//       "Male",
//       "Spanish",
//       "luisgomez",
//       "luis.gomez@example.com",
//       false,
//       "luispassword",
//       "Music lover, Guitar player.",
//       29
//     ),
//     new User(
//       "Sophia",
//       "Lopez",
//       "Female",
//       "Mexican",
//       "sophialopez",
//       "sophia.lopez@example.com",
//       true,
//       "sophiaspassword",
//       "Digital marketer and content creator.",
//       31
//     ),
//   ];

// // 1

// function sort(users) {
//     return users.sort((a, b) => a.username.localeCompare(b.username));
// }

// // 2

// function BirthYear(users, year) {
//     return users.filter(user => user.getBirthYear() > year);
// }

// // 3

// function login(users, username, password) {
//     const user = users.find(user => user.username === username);
    
//     if (!user) {
//         return 'user not found!';
//     }
    
//     if (user.password !== password) {
//         return 'incorrect username or password';
//     }
    
//     if (users.some(u => u.isLogged)) {
//         return 'another user currently logged in';
//     }
    
//     user.isLogged = true;
//     alert('successfully logged in');
// }

// // 4

// function logout(users, username) {
//     const user = users.find(user => user.username === username);
    
//     if (!user) {
//         return 'user not found';
//     }
    
//     if (!user.isLogged) {
//         return 'user did not log in to log out!';
//     }
    
//     user.isLogged = false;
//     return 'successfully logged out';
// }

// // 5

// function createUser(users, newUser) {
//     users.push(newUser);
//     return users;
// }

// // 6

// function deleteUser(users, username) {
//     const index = users.findIndex(user => user.username === username);
    
//     if (index === -1) {
//         return 'user not found';
//     }
    
//     users.splice(index, 1);
//     return users;
// }

// console.log(sort(users));
// console.log(BirthYear(users, 1990));
// console.log(login(users, 'johndoe', 'password123'));
// console.log(logout(users, 'johndoe'));
// const newUser = new User("New", "User", "Female", "Italian", "newuser", "new.user@example.com", false, "newpassword", "New bio.", 25);
// console.log(createUser(users, newUser));
// console.log(deleteUser(users, 'johndoe'));

