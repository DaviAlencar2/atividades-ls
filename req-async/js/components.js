function createInputFields(){
    const body = document.querySelector("body");
    body.className = "flex flex-col items-center justify-center h-screen bg-gray-100";

    const fields = ["logradouro", "bairro", "localidade", "estado"];
    const form = document.createElement("form");
    form.id = "cepForm";
    form.className = "bg-white p-6 rounded-lg shadow-md w-1/4 mx-auto";

    //div que vai encapsular o input do cep e o botao
    const inputBtnContainer = document.createElement("div");
    inputBtnContainer.id = "inputBtnContainer";
    inputBtnContainer.className = "flex flex-col items-center mb-4";

    const inputCep = document.createElement("input");
    inputCep.name = "cep";
    inputCep.placeholder = "Digite o CEP: ";
    inputCep.className = "border border-gray-300 p-2 rounded mb-2 w-full";

    const btnCep = document.createElement("button");
    btnCep.id = "btnCep";
    btnCep.textContent = "Buscar CEP";
    btnCep.type = "button";
    btnCep.className = "bg-blue-500 text-white p-2 rounded w-full";

    inputBtnContainer.appendChild(inputCep);
    inputBtnContainer.appendChild(btnCep);

    form.appendChild(inputBtnContainer);

    fields.forEach(field => {
        const input = document.createElement("input");
        input.name = field;
        input.placeholder = `${field}`;
        input.className = "border border-gray-300 p-2 rounded mb-2 w-full";
        form.appendChild(input);
    });

    document.body.appendChild(form);
}

createInputFields();