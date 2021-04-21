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
        login_user(email, geslo)
    })
})

function login_user(email, pass){
    var data = `{
        "email": "` + email + `",
        "password": "` + pass + `"
    }`;

    axios.post("/api/v1/login", data)
      .then((response) => {
        console.log(response);
        location.replace("index.html")
      }, (error) => {
        console.log(error);
      });
}