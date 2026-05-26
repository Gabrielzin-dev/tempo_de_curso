document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // VALORES FIXOS DO CURSO
    // ==========================
    const totalMeses = 24;
    const mesesCursados = 18;
    const mesesRestantes = 6;

    // ==========================
    // FUNÇÃO: formatar meses
    // ==========================
    function formatarTempo(totalMeses) {

        const anos = Math.floor(totalMeses / 12);
        const meses = totalMeses % 12;

        let texto = "";

        if (anos > 0) {
            texto += anos === 1 ? "1 ano" : anos + " anos";
        }

        if (meses > 0) {
            if (texto !== "") texto += " e ";
            texto += meses === 1 ? "1 mês" : meses + " meses";
        }

        if (texto === "") {
            texto = "menos de 1 mês";
        }

        return texto;
    }

    // ==========================
    // STATUS FIXO
    // ==========================
    let statusCurso = "✅ Em andamento";

    // ==========================
    // PORCENTAGEM
    // ==========================
    let porcentagem = (mesesCursados / totalMeses) * 100;

    // Arredonda
    porcentagem = Math.round(porcentagem);

    // ==========================
    // EXIBIÇÃO
    // ==========================
    document.getElementById("tempoCurso").textContent =
        formatarTempo(mesesCursados);

    document.getElementById("tempoRestante").textContent =
        formatarTempo(mesesRestantes);

    document.getElementById("statusCurso").textContent =
        statusCurso;

    document.getElementById("porcentagemCurso").textContent =
        porcentagem + "%";

    document.getElementById("progressoLegenda").textContent =
        mesesCursados + " de " + totalMeses + " meses concluídos";

    // ==========================
    // BARRA DE PROGRESSO
    // ==========================
    const barra = document.getElementById("barraProgresso");

    setTimeout(function () {
        barra.style.width = porcentagem + "%";
    }, 200);

});