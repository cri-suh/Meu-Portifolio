

document.querySelector('.bt-form').addEventListener('click', function(event) {
    event.preventDefault();

    //Campos
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    //Erros
    const nameErro = document.getElementById('nameErro');
    const emailErro = document.getElementById('emailErro');
    const subjectErro = document.getElementById('subjectErro');
    const messageErro = document.getElementById('messageErro');

    let hasError = false;

    if (nameInput.value.trim() === '' || nameInput.value.lenght > 5) {
        nameErro.style.display = 'block';
        hasError = true;
    } else {
        nameErro.style.display = 'none';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value)) {
        emailErro.style.display = "block";
        emailInput.style.borderColor = "red"; 
    } else {
        emailErro.style.display = "none";
        emailInput.style.borderColor = "green"

    }

    if (subjectInput.value.trim() === '' || subjectInput.value.length > 50) {
        subjectErro.style.display = 'block';
        subjectErro.textContent = subjectInput.value.trim() === '' ? 'O campo assunto não pode ficar vazio.' : 'Máximo 50 caracteres';
        hasError = true;
    } else {
        subjectErro.style.display = 'none';
    }

    if (messageInput.value.trim() === '' || messageInput.value.length > 300) {
        messageErro.style.display = 'block';
        messageErro.textContent = messageInput.value.trim() === '' ? 'O campo não pode ficar vazio':'Máximo 50 caracteres';
        hasError = true;
    } else {
        messageErro.style.display = 'none';
    }

    if (!hasError) {
        alert('Formulário enviado com sucesso!');
        this.submit();
    }
});