    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
    import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
    const firebaseConfig = {
      apiKey: "AIzaSyBEmGfW5lAQI0Dzy1cjlPOAfVYwnfVPSfE",
      authDomain: "jsa-sql.firebaseapp.com",
      databaseURL: "https://jsa-sql-default-rtdb.firebaseio.com",
      projectId: "jsa-sql",
      storageBucket: "jsa-sql.firebasestorage.app",
      messagingSenderId: "627272462079",
      appId: "1:627272462079:web:9f8e5a7ec132c6b672a6ca",
      measurementId: "G-DC1WX2H7CR"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  


  function validateLoginForm (email, password) {
      // Kiểm tra bỏ trống trường nhập liệu
      if (email === '' || password === '') {
          alert('Vui lòng nhập đầy đủ thông tin');
          return false;
      }
  
  
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      // Kiểm tra định dạng email
      if (!emailRegex.test(email)) {
          alert('Email không hợp lệ');
          return false;
      }
  
      // password 6 chữ số
      if (password.length < 6) {
          alert('Mật khẩu phải chứa ít nhất 6 ký tự');
          return false;
      }
      return true;
  }
  
  function signinFirebase (email, password) {
  
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          console.log(user);
          alert('Đăng nhập thành công');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('Firebase error: your email or password is incorrect');
        });
  }
  
  // Bắt sự kiện cho nút đăng nhập
  document.querySelector('#login_btn').addEventListener('click', (e) => {
      e.preventDefault();
      //Lấy dữ liệu từ html element  
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      // Kiểm tra dữ liệu nhập vào
      if (validateLoginForm(email, password)) {
          // Không có lỗi ở client
          // Signin bằng firebase
          signinFirebase(email, password);
          return;
      } else return;
  });
