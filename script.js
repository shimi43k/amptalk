document.addEventListener("DOMContentLoaded", function () {
    // パスワード送信ボタンを取得
    const passwordButton = document.getElementById("password-submit");

    if (passwordButton) {
        passwordButton.addEventListener("click", function () {
            checkPassword();
        });
    }

    function checkPassword() {
        const passwordInput = document.getElementById("password-input").value;
        const correctPassword = "shimi43"; // 正しいパスワード

        if (passwordInput === correctPassword) {
            document.getElementById("password-overlay").style.display = "none";
        } else {
            alert("パスワードが違います");
        }
    }
});
