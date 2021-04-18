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
        console.log("ime: " + ime)
        console.log("email: " + email)
        console.log("phone: " + phone)
        console.log("pass: " + geslo1)
        console.log("pass2: " + geslo2)
        sign_up_user(ime, email, phone, geslo1)
    })
})

function sign_up_user(name, email, phone, pass){
    var xhr = new XMLHttpRequest();
        xhr.open("POST", url_reg);
        
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        
        xhr.onreadystatechange = function () {
           if (xhr.readyState === 4) {
              console.log(xhr.status);
              console.log(xhr.responseText);
           }};
        
        var data = `{
            "name": "` + name + `",
            "email": "` + email + `",
            "phone_number": "` + phone + `",
            "password": "` + pass + `"
        }`;
        
         
        xhr.send(data);  
        console.log(xhr.status);
        
    setTimeout(() => {
        if(xhr.status == 201 || xhr.status == 200){
            console.log("All good")
            uspesn_signup=true
            $("#home_nav").show();
            $("#re_nav").show(); 
            location.replace("index.html")
        }
        else{
            console.log("Neka napaka")
        }
    }, 1000);
}