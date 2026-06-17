const canos = document.querySelectorAll(".cano");

canos.forEach(cano => {

    const status = cano.dataset.status;
    const icon = cano.querySelector(".status-icone");

    if(status === "concluido") {
        icon.textContent = "✔";
    }

    if(status === "ativo") {
        icon.textContent = "⭐";
    }

    if(status === "bloqueado") {
        icon.textContent = "🔒";
    }

});