
form = document.querySelector(".form");

form.addEventListener('submit', function (e) {

    e.preventDefault();

    var campos = [
        document.querySelector("#data"),
        document.querySelector("#quantidade"),
        document.querySelector("#valor")
    ];

    var tbody = document.querySelector("tbody");
    var tr = document.createElement('tr');
    campos.forEach( function (campo) {
    
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    
    });
    
    tdVolume = document.createElement("td");
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.append(tdVolume);
    tbody.appendChild(tr);
    
    campos[0].value = "";
    campos[1].value = "";
    campos[2].value = "";

});

