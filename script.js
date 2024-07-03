document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('dataForm');
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    // Função para carregar dados do localStorage e preencher a tabela
    function loadData() {
        const storedData = JSON.parse(localStorage.getItem('formData')) || [];
        storedData.forEach((data) => {
            const row = tableBody.insertRow();
            Object.values(data).forEach((cellData) => {
                const cell = row.insertCell();
                cell.textContent = cellData;
            });
        });
    }

    // Carregar dados ao iniciar a página
    loadData();

    // Função para adicionar dados na tabela e no localStorage
    function addData(event) {
        event.preventDefault();

        const formData = {
            numero: form.numero.value,
            ano: form.ano.value,
            data: form.data.value,
            observacao: form.observacao.value
        };

        // Adicionar nova linha na tabela
        const row = tableBody.insertRow();
        Object.values(formData).forEach((cellData) => {
            const cell = row.insertCell();
            cell.textContent = cellData;
        });

        // Salvar dados no localStorage
        const storedData = JSON.parse(localStorage.getItem('formData')) || [];
        storedData.push(formData);
        localStorage.setItem('formData', JSON.stringify(storedData));

        // Limpar o formulário
        form.reset();
    }

    // Adicionar evento de submit no formulário
    form.addEventListener('submit', addData);
});
