var critica = document.getElementById('critica');
var alerta = document.getElementById('alerta');

function alternarEstado(active, disable) {
    return function () {
        active.className = "defaut-active";
        disable.className = "";
    };
}

critica.onclick = alternarEstado(critica, alerta);
alerta.onclick = alternarEstado(alerta, critica);


document.getElementById('select-all').addEventListener('click', function () {
    var checkboxes = document.querySelectorAll('.custom_checkbox input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = true;
    });
});

document.getElementById('deselect-all').addEventListener('click', function () {
    var checkboxes = document.querySelectorAll('.custom_checkbox input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
});