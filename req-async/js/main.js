import { fillFields, cepNotFound, removeError } from "./utils.js";

function fetchCep(){
    const btn = document.getElementById("btnCep");
   
    btn.addEventListener("click", async () => {
        try {
            let cep = document.querySelector("input[name='cep']").value;
            removeError();
            const url = `https://viacep.com.br/ws/${cep}/json/`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error("CEP não encontrado");
            }

            const data = await response.json();

            if (data.erro) {
                throw new Error("CEP não encontrado");
            }

            fillFields(data);
        } catch (error) {
            cepNotFound();
        }
    });
}

fetchCep();