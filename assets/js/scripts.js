function atualizarSelect() {
    var selectElement = document.getElementById("conta");
    var radioSelecionado = document.querySelector('input[name="flexRadioDefault"]:checked').id;

    // Limpa as opções do select
    selectElement.innerHTML = "";

    // Verifica qual rádio foi selecionado e altera as opções do select
    if (radioSelecionado === "flexRadioDefault1") {
        // Quando "Quero economizar energia" for selecionado, mantém as opções originais
        var option1 = new Option("Menos de R$200", "menos de 200");
        var option2 = new Option("R$200 a R$400", "200 a 400");
        var option3 = new Option("R$400 a R$600", "400 a 600");
        var option4 = new Option("Mais de R$800", "mais de 800");
        selectElement.add(option1);
        selectElement.add(option2);
        selectElement.add(option3);
        selectElement.add(option4);

        option3.selected = true;

    } else if (radioSelecionado === "flexRadioDefault2") {
        // Quando "Quero investir em energia" for selecionado, altera as opções
        var option1 = new Option("Tenho menos de R$5000 para investir", "ate 5000");
        var option2 = new Option("R$5000 a R$10000 para investir", "5000 a 10000");
        var option3 = new Option("R$10000 a R$20000 para investir", "10000 a 20000");
        var option4 = new Option("Mais de R$20000 para investir", "mais de 20000");
        selectElement.add(option1);
        selectElement.add(option2);
        selectElement.add(option3);
        selectElement.add(option4);

        option3.selected = true;

    }
}

// Chama a função para garantir que o select esteja correto no carregamento da página
atualizarSelect();