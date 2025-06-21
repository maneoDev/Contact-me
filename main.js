document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('.formulario');
  const button = form.querySelector('button');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Sending...';

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      form.reset();
      // Você pode colocar aqui um alerta, modal ou mensagem de confirmação
    }, 2000);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('.formulario');
  const button = form.querySelector('button');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    button.disabled = true;
    button.textContent = 'Sending...';

    const formData = {
      nome: form.nome.value,
      whatsapp: form.whatsapp.value,
      interesse: form.interesse.value
    };

    fetch("https://script.google.com/macros/s/AKfycbyweR0iqL7FqF1sU9IhN2LR0A3rwSWt2_VijBlDalxFf8RpGPkZG80Lrunwr6bSLE90/exec", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      form.reset();
      button.textContent = 'Send';
      button.disabled = false;
      alert("Informações enviadas com sucesso!");
    })
    .catch(error => {
      console.error(error);
      button.textContent = 'Send';
      button.disabled = false;
      alert("Erro ao enviar. Tente novamente.");
    });
  });
});
