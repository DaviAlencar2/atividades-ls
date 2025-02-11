export function fillFields(data){
    const form = document.getElementById("cepForm");
    const fields = ["logradouro", "bairro", "localidade", "estado"];
    fields.forEach(field => {
        form.querySelector(`input[name='${field}']`).value = data[field];
    });
}

export function cepNotFound(){
    fillFields({logradouro: "", bairro: "", localidade: "", estado: "",});
    let cep = document.querySelector("input[name='cep']")
    cep.value = "";
    cep.placeholder = "CEP não encontrado❗";
    cep.style.borderColor = "red";
}

export function removeError(){
    let cep = document.querySelector("input[name='cep']")

   setTimeout(() => {
       cep.placeholder = "Digite outro CEP";
    }, 2800);   
    cep.style.borderColor = "";
}