const url_reg = "https://remajnder.rmk.cloud/api/v1/register"
const url_log = "https://remajnder.rmk.cloud/api/v1/login"
const url_vsi = "https://remajnder.rmk.cloud/api/v1/reminders"
const url_dodaj = "https://remajnder.rmk.cloud/api/v1/reminders"
let url_urejanje = "https://remajnder.rmk.cloud/api/v1/reminders/" // + reminderId
let url_brisanje = "https://remajnder.rmk.cloud/api/v1/reminders/" // + reminderId

let uspesn_login = false

$(document).ready(function(){
    $("#home_nav").hide();
    $("#re_nav").hide(); 
    $('#btn_login').click(function(){
        email = document.getElementById("email_login").value
        geslo = document.getElementById("password_login").value
        console.log("email: " + email)
        console.log("pass: " + geslo)
        login_user(email, geslo)
    })
})

function login_user(email, pass){
    var xhr = new XMLHttpRequest();
        xhr.open("POST", url_log);
        
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        
        xhr.onreadystatechange = function () {
           if (xhr.readyState === 4) {
              console.log(xhr.status);
              console.log(xhr.responseText);
           }};
        
        var data = `{
            "email": "` + email + `",
            "password": "` + pass + `"
        }`;
        
        xhr.send(data);  
        setTimeout(() => {  
            if(xhr.status == 200 || xhr.status == 201){
                console.log("All good")
                uspesn_login=true
                $("#home_nav").show();
                $("#re_nav").show(); 
            }
            else{
                console.log("Neka napaka")
            }
        }, 2000);
}