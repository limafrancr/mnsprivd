function meuShow(){
    let ul= document.querySelector('.navbar ul');
    if(ul.classList.contains("open")){
        ul.classList.remove("open")

        document.querySelector(".menu-icon img") .src = "opensxx.svg"
    }

    else{
        ul.classList.add("open")

        document.querySelector(".menu-icon img") .src = "fecharxx.svg"
    }
}

//Efeito maquina de escrever

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}

const titulo = document.querySelector('.escreva h2');
typeWrite(titulo);
//Fim efeito maquina de screver


//Formúlario

class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
    }
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando...";
    }
  
    async sendForm(event) {
      try {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }
  
    init() {
      if (this.form) this.formButton.addEventListener("click", this.sendForm);
      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });
  formSubmit.init();

 
  if (!localStorage.getItem ("cookiesAccepted")) {
    var cookieMessage = document.getElementById ('cookie-notification');
    var closeCookie = document.getElementById ('cookie-notification-close');
    cookieMessage.style.display = 'block';
    closeCookie.addEventListener ("click", function (e) {
      e.preventDefault ();
      localStorage.setItem ("cookiesAccepted", true);
      cookieMessage.style.display = 'none';
    });
  }


  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-094LHHCDTE');


