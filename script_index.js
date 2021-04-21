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

    $("#basicDate").flatpickr({
        enableTime: true,
        dateFormat: "F, d Y H:i"
    });


    $('#add_remajnder').click(function(){
        // dodajanje remajndr
        title = document.getElementById("title").value
        desc = document.getElementById("desc").value
        n_phone = document.getElementById("n_phone").checked
        n_email = document.getElementById("n_email").checked
        datum = document.getElementById("basicDate").value
        var ate = moment(datum).utc().format();

        // PRIKAZOVANJE SPOROCIL
        const div = document.createElement("div");
        div.className = "remajnder_class";
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.className = "time";
        p.innerHTML = '<p class="remajnder_formated_class">' + ate + '</p>'
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
    axios.post("/api/v1/reminders", {
        title : title,
        description: desc,
        time: time,
        notify_phone: n_phone,
        notify_email: n_email
    })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
}

function dobi_vse(){
    axios.get("/api/v1/reminders")
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);

    prikazi_vse(response.data)
  });
}

function prikazi_vse(data){
    for(i=0;i<data.length;i++){
        // PRIKAZOVANJE SPOROCIL
        const div = document.createElement("div");
        div.className = "remajnder_class";
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.className = "time";
        p.innerHTML = '<p class="remajnder_formated_class">' + data[i].time + '</p>'
        div.innerHTML = '<h2 class="remajnder_title_class + ">' + data[i].title + "</h2>" + '<p class="remajnder_desc_class"> ' + data[i].description + "</p>";
        div.appendChild(p);
        li.appendChild(div);

        document.getElementById("remajnders").appendChild(li);
        window.scrollTo(0, document.body.scrollHeight);
    }

}
