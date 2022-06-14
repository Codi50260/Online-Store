function check(){
    fetch("php/users")
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
            document.getElementById("form_submit").submit();
        }
    }
}

function checkName(){
    fetch("php/users")
        .then((response) => {
            if (response.ok) {
            return response.json();
            } else {
            throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                name(data, i);
            }
        })
        .catch((error) => console.error("FETCH ERROR:", error));

    function name(data, i){
        const user = data[i]

        if (user.logged_in == "True"){
            document.getElementById("username").innerHTML = user.user_name;

            document.getElementById("nameBottom").innerHTML = user.user_name;
            document.getElementById("emailBottom").innerHTML = user.user_email;
        }
    }
}

function signOut(){
    fetch("php/users")
        .then((response) => {
            if (response.ok) {
            return response.json();
            } else {
            throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                remove(data, i);
            }
        })
        .catch((error) => console.error("FETCH ERROR:", error));

    function remove(data, i){
        const user = data[i]

        if (user.logged_in == "True"){
            location.href = 'php/sign_out.php'
        }
    }
}

function fillDetails(){
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
                details(data, i);
            }
        })
        .catch((error) => console.error("FETCH ERROR:", error));

    function details(data, i){
        const user = data[i]

        if (user.logged_in == "True"){
            document.getElementById("name").value = user.user_name;
            document.getElementById("email").value = user.user_email;
        }
    }
}