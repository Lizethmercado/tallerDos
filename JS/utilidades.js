function crearTabla() {
    var tabla = document.createElement("table");
    tabla.setAttribute("border", "1");

    var rows = [
        [
            { imgSrc: "imagen1.jpg", boton1: "Hamburguer food", boton2: "Source code", boton3: "Preview demo" },
            { imgSrc: "imagen2.jpg", boton1: "French fries (chips)", boton2: "menu bar", boton3: "Preview demo" },
            { imgSrc: "imagen3.jpg", boton1: "Hot dog", boton2: "Menu bar", boton3: "Preview demo" }
        ],
        [
            { imgSrc: "imagen4.png", boton1: "Sausage and chips", boton2: "Source demo", boton3: "Preview demo" },
            { imgSrc: "imagen5.jpg", boton1: "Ice cream", boton2: "Menu bar", boton3: "Preview demo" },
            { imgSrc: "imagen6.jpg", boton1: "Fried chicken", boton2: "Source demo", boton3: "Preview demo" }
        ]
    ];
         
    for (var i = 0; i < rows.length; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < rows[i].length; j++) {
            var cell = document.createElement("td");

            var img = document.createElement("img");
            img.src = "../tallerPractico3/recursos/imagenes/" + rows[i][j].imgSrc;
            img.alt = "";
            img.width = 250;
            img.height = 200;

            cell.appendChild(img);

            var text = document.createElement("p");
            text.textContent = rows[i][j].text;
            cell.appendChild(text);

            var botonContainer = document.createElement("div");
            botonContainer.style.display = "inline";

            var boton1 = document.createElement("button");
            boton1.textContent = rows[i][j].boton1;
            botonContainer.appendChild(boton1);

            var boton2 = document.createElement("button");
            boton2.textContent = rows[i][j].boton2;
            botonContainer.appendChild(boton2);

            var boton3 = document.createElement("button");
            boton3.textContent = rows[i][j].boton3;
            botonContainer.appendChild(boton3);

            cell.appendChild(botonContainer);

            row.appendChild(cell);
        }
        tabla.appendChild(row);
    }

    document.body.appendChild(tabla);
}