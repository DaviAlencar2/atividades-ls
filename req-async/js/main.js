function fillFields(data){
    const form = document.getElementById("cepForm");
    const fields = ["logradouro", "bairro", "localidade", "estado"];
    fields.forEach(field => {
        form.querySelector(`input[name='${field}']`).value = data[field];
    });
}

function fetchCep(){
    const btn = document.getElementById("btnCep");
    btn.addEventListener("click", async () => {
        try {
            let cep = document.querySelector("input[name='cep']").value;
            const url = `https://viacep.com.br/ws/${cep}/json/`;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }

            const data = await response.json();
            if (data.erro) {
                throw new Error('CEP não encontrado');
            }

            console.log(data);
            fillFields(data);
        } catch (error) {
            console.error(error);
            cepNotFound();
        }
    });
}

function cepNotFound(){
    fillFields({logradouro: "", bairro: "", localidade: "", estado: ""});
    alert("CEP não encontrado");
}

fetchCep();