var counterResult = 0

function enviar(Email, EmailConfirm, Password, PasswordConfirm) { 
  if (Email.length > 7 && EmailConfirm.length > 7 && Password.length > 7 && PasswordConfirm.length > 7) {
    if (Email.toUpperCase() == EmailConfirm.toUpperCase() && Password == PasswordConfirm) {
      var letras = Password.split("")
      var form = document.querySelector('#form-container')
      counterResult++
      form.innerHTML += "<div class='row' id='result'>"
        + "<div class='col'>"
        + `<p> ${counterResult} Login feito com Sucesso!!<p>`
        + "\n"
        + `<p>Seu email: ${Email}</p>`
        + "\n"
        + `<p>Sua Senha: ${letras[0]} ${letras[1]} ${letras[2]} * * *</p>`
        + "</div>"
        + "</div>"
    }
  }
}

function limpar() {
  for(i = 0; i < counterResult; i++){
    var result = document.getElementById('result')
    result.remove()
  }
  counterResult = 0
}