const url_reg = "https://remajnder.rmk.cloud/api/v1/register"
const url_log = "https://remajnder.rmk.cloud/api/v1/login"
const url_vsi = "https://remajnder.rmk.cloud/api/v1/reminders"
const url_dodaj = "https://remajnder.rmk.cloud/api/v1/reminders"
let url_urejanje = "https://remajnder.rmk.cloud/api/v1/reminders/" // + reminderId
let url_brisanje = "https://remajnder.rmk.cloud/api/v1/reminders/" // + reminderId


$(document).ready(function(){
    id_vpisa = sessionStorage.getItem("id");
    name_vpisa = sessionStorage.getItem("name");
    email_vpisa = sessionStorage.getItem("email");
    console.log("Id: " + id_vpisa)
    console.log("Id: " + name_vpisa)
    console.log("Id: " + email_vpisa)
    
    $('#add_remajnder').click(function(){
        // dodajanje remajndr
        title = document.getElementById("title").value
        desc = document.getElementById("desc").value
        n_phone = document.getElementById("n_phone").checked
        n_email = document.getElementById("n_email").checked
        const date = new Date(); // DOBIM DATUM
        //RFC 3339 format
        const formatted = date.toISOString(); // SI SHRANIMO FORMAT


        console.log(title)
        console.log(desc)
        console.log(n_phone)
        console.log(n_email)

        // PRIKAZOVANJE SPOROCIL
        const div = document.createElement("div");
        div.className = "remajnder_class";
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.className = "time";
        p.innerHTML = '<p class="remajnder_formated_class">' + formatted + '</p>'
        div.innerHTML = '<h2 class="remajnder_title_class + ">' + title + "</h2>" + '<p class="remajnder_desc_class"> ' + desc + "</p>";
        div.appendChild(p);
        li.appendChild(div);

        document.getElementById("remajnders").appendChild(li);
        window.scrollTo(0, document.body.scrollHeight);

        dodaj_remajnder(title, desc, formatted, n_phone, n_email)

        
        // prazno
        document.getElementById("title").value = ""
        document.getElementById("desc").value = ""
        document.getElementById("n_phone").checked = false
        document.getElementById("n_email").checked = false

    })

    dobi_vse()

})


function dodaj_remajnder(title, desc, time, n_phone, n_email){
    var xhr = new XMLHttpRequest();
        xhr.open("POST", url_dodaj);
        xhr.withCredentials = true;
        
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin","*")
        
        xhr.onreadystatechange = function () {
           if (xhr.readyState === 4) {
              console.log(xhr.status);
              console.log(xhr.responseText);
           }};
        
        var data = `{
            "title": "` + title + `",
            "description": "` + desc + `",
            "time": "` + time + `",
            "notify_phone": "` + n_phone + `",
            "notify_email": "` + n_email + `"
        }`;
        
        xhr.send(data);  
       /* 
        setTimeout(() => {  
            if(xhr.status == 200 || xhr.status == 201){
                console.log("All good")
            }
            else{
                console.log("Neka napaka")
            }
        }, 1000);
        */
}

function dobi_vse(){
    console.log("Dobi vse")/*
    $.getJSON(url_vsi, function(result){
        console.log("res: " + result)
       prikazi_vse(result)
    })*/
    var xhr = new XMLHttpRequest();

    xhr.open('GET', "https://remajnder.rmk.cloud/api/v1/reminders", true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin","*")
    xhr.withCredentials = true;
    xhr.send(null);
    var result = xhr.response;
    // now you can access it's params:
    //console.log(result.data);
    console.log(xhr.response)
    console.log(xhr.responseText)
    prikazi_vse(result)
}

function prikazi_vse(data){
    for(i=0;i<data.length;i++){
        // PRIKAZOVANJE SPOROCIL
        const div = document.createElement("div");
        div.className = "remajnder_class";
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.className = "time";
        p.innerHTML = '<p class="remajnder_formated_class">' + data[i].formatted + '</p>'
        div.innerHTML = '<h2 class="remajnder_title_class + ">' + data[i].title + "</h2>" + '<p class="remajnder_desc_class"> ' + data[i].desc + "</p>";
        div.appendChild(p);
        li.appendChild(div);

        document.getElementById("remajnders").appendChild(li);
        window.scrollTo(0, document.body.scrollHeight);
    }

}
