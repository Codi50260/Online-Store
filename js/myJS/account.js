function check(){
    fetch("http://localhost/HelloWorld/Online-Store/php/users")
        .then((response) => {
            if (response.ok) {
            return response.json();
            } else {
            throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                checkInfo(data, i);
            }
        })
        .catch((error) => console.error("FETCH ERROR:", error));

    function checkInfo(data, i){
        const user = data[i]

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (user.user_email == email && user.user_password == password){
            location.href = "home.html";
        }
    }
}