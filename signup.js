// import { auth, createUserWithEmailAndPassword } from "./firebase.js";



// //  createUserWithEmailAndPassword(auth, "rafayahmed@test.com", "1234567")



// const form = document.querySelector("#signup-form");

// form.addEventListener("submit", async (event) => {
//      try{
//     event.preventDefault();


//     const email = event.target.children[0].value
//     const password = event.target.children[1].value
//     // const email = form.querySelector('input[name="email"]').value;
//     // const password = form.querySelector('input[name="password"]').value;
    
//  const result = await   createUserWithEmailAndPassword(auth, email, password);
//      console.log(result)

// } catch (error){
//     console.log('signup error:', error.message)
// }

   
// } );

// import { auth, createUserWithEmailAndPassword } from "./firebase.js";

// const form = document.querySelector("#signup-form");

// form.addEventListener("submit", async (event) => {
//     event.preventDefault();

//     // Access the email and password fields directly by their name attributes or IDs
//     const email = form.querySelector('input[name="email"]').value;
//     const password = form.querySelector('input[name="password"]').value;

//     try {
//         const result = await createUserWithEmailAndPassword(auth, email, password);
//         console.log(result);
//         // Optionally, redirect or give feedback to the user
//     } catch (error) {
//         console.error('Signup error:', error.message);
//         // Optionally, display an error message to the user
//     }
// });
import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const form = document.querySelector("#signup-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="password"]').value;

    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User created successfully:', result);
        // Optionally, redirect or give feedback to the user
    } catch (error) {
        console.error('Signup error:', error.code, error.message);
        // Optionally, display an error message to the user
        // Example:
        // document.querySelector('#error-message').textContent = error.message;
    }
});
