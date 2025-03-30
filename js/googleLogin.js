import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBEmGfW5lAQI0Dzy1cjlPOAfVYwnfVPSfE",
    authDomain: "jsa-sql.firebaseapp.com",
    projectId: "jsa-sql",
    appId: "1:627272462079:web:9f8e5a7ec132c6b672a6ca"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("google-signin-btn").addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            alert(`Welcome ${user.displayName}!`);
            console.log(user);
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
});
