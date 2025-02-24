function redirecionarPagina() {
    // Obtém o valor selecionado
    var opcao = document.getElementById("passeios").value;

    // Verifica o valor e redireciona para o link correspondente
    if (opcao === "litoral") {
        window.location.href = "#litoral";
    } else if (opcao === "colosseum") {
        window.location.href = "https://www.coopculture.it/en/colosseo-e-shop.cfm";
    } else if (opcao === "great_wall_of_china") {
        window.location.href = "https://www.thegreatwall.com/";
    } else if (opcao === "machu_picchu") {
        window.location.href = "https://www.machupicchu.gob.pe/";
    } else if (opcao === "taj_mahal") {
        window.location.href = "https://www.tajmahal.gov.in/";
    } else if (opcao === "pyramids_of_giza") {
        window.location.href = "https://www.giza pyramids.org/";
    }
}