//console.log("Dela")
const url_reg = "https://remajnder.rmk.cloud/api/v1/register"
const url_log = "https://remajnder.rmk.cloud/api/v1/login"
const url_vsi = "https://remajnder.rmk.cloud/api/v1/reminders"
const url_dodaj = "https://remajnder.rmk.cloud/api/v1/reminders"
let url_urejanje = "https://remajnder.rmk.cloud/api/v1/reminders/" // + reminderId
let url_brisanje = "https://remajnder.rmk.cloud/api/v1/reminders/" // + reminderId

let uspesn_signup = false

$(document).ready(function(){
    $("#home_nav").hide();
    $("#re_nav").hide(); 
    $('#btn_signup').click(function(){
        ime = document.getElementById("ime_signup").value
        email = document.getElementById("email_signup").value
        phone = document.getElementById("phone_signup").value
        geslo1 = document.getElementById("password_signup").value
        geslo2 = document.getElementById("password_signup2").value
        sign_up_user(ime, email, phone, geslo1)
    })
})

function sign_up_user(name, email, phone, pass){
    var data = `{
        "name": "` + name + `",
        "email": "` + email + `",
        "phone_number": "` + phone + `",
        "password": "` + pass + `"
    }`;

    axios.post("/api/v1/register", data)
      .then((response) => {
        console.log(response);
        location.replace("login.html")
      }, (error) => {
        console.log(error);
      });
}