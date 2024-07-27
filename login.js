import { auth, signInWithEmailAndPassword } from "./firebase.js";

const form = document.querySelector("#login-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="password"]').value;

    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log('you are succesfully logged in:', result);
        // Optionally, redirect or give feedback to the user
    } catch (error) {
        console.error('Signin error:', error.code, error.message);
        // Optionally, display an error message to the user
        // Example:
        //  document.querySelector('#error-message').textContent = error.message;
    }
});