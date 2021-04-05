let B7Validator = {
    handleSubmit:(event)=>{
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');

        B7Validator.clearError();

        for(let i=0; i < inputs.length; i++){
            let input = inputs[i];
            let check = B7Validator.checkInput(input);
            if (check !== true){
                send = false;
                // exibir o erro
                B7Validator.showerror(input,check);
            }
        }

        
        if (send){
            form.submit();
        }

    },
    checkInput:(input) => {
           let rules = input.getAttribute('data-rules');
           console.log(typeof rules);
           if (rules !== null){
                rules = rules.split("|");
                for (let k in rules){
                    val = rules[k].split("=");
                    switch(val[0]){
                        case 'required':
                            if (input.value == ''){
                                return 'Campo obrigatório';
                            }
                            break; 
                        case 'min':
                            if (input.value.length < val[1]){
                                return 'Campo tem que ter no mínimo ' + val[1] + ' caracteres';
                            }
                            break;
                        case 'email':
                            if (input.value != ''){
                                let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                                if (!regex.test(input.value.toLowerCase())){
                                    return 'E-mail inválido';
                                }
                            }
                            break;
                    }
                }
           }
           return true;
    },
    showerror:(input,erro) => {
        input.style.borderColor = '#ff0000';
        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = erro;
        input.parentElement.insertBefore(errorElement,input.ElementSibling);
    },
    clearError:() => {
        let errorElements = document.querySelectorAll('.error');
        let inputs = form.querySelectorAll('input');
        for(let i=0; i < inputs.length; i++){
            inputs[i].style = '';
            //input = inputs[i]
            //input.style.borderColor = 'black';
        }
        for (let i=0; i < errorElements.length; i++){
            errorElements[i].remove();
        }
    }
};


let form = document.querySelector('.b7validator');
form.addEventListener('submit', B7Validator.handleSubmit);