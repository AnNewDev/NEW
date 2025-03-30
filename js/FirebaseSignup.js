import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    const signupBtn = document.getElementById("signup-btn");

    if (signupBtn) {
        signupBtn.addEventListener("click", () => {
            const email = document.getElementById("signup-email").value.trim();
            const password = document.getElementById("signup-password").value;
            const confirmPassword = document.getElementById("signup-confirm-password").value;
            
            if (!email || !password || !confirmPassword) {
                alert("Please fill in all fields.");
                return;
            }
            
            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters long");
                return;
            }

            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    alert("Signup successful! You can now log in.");
                })
                .catch((error) => {
                    alert(`Error: ${error.message}`);
                });
        });
    }
});
