window.onload = function(){
    atualizarCodigoPostal();
};

function atualizarCodigoPostal(){
    var paisSelecionado = document.getElementById("pais").value;
    var telefoneInput = document.getElementById("telefone");
    var codigoPostal = "";

    switch (paisSelecionado){
        case "brasil":
            codigoPostal = "+55";
            break;
        case "eua":
            codigoPostal = "+1";
            break;
    }
    telefoneInput.value = codigoPostal;
}

function verificarForcaSenha() {
    var senha = document.getElementById("senha").value;
    var forcaSenha = document.getElementById("forcaSenha");

    var forca = 0;

    if (senha.length >= 8){
        forca++
    }
    if(/[a-z]/.test(senha) && /[A-Z]/.test(senha)){
        forca++;
    }
    if (/[0-9]/.test(senha)){
        forca++;
    }
    if (/[^a-zA-Z0-9]/.test(senha)){
        forca++;
    }
    
    switch(forca){
        case 0:
        case 1:
            forcaSenha.textContent = "Senha fraca";
            forcaSenha.className = "forca-senha-msg forca-senha-vermelho";
            break;
        case 2:
            forcaSenha.textContent = "Senha razoavelmente forte";
            forcaSenha.className = "forca-senha-msg forca-senha-amarelo";
        case 3:
            forcaSenha.textContent = "Senha forte";
            forcaSenha.className = "forca-senha-msg forca-senha-verde";
            break;
    }
}

function tpggleSenhaVisibility(){
    var senhaInput=document.getElementById("senha");
    var togglePassword=document.getElementById("togglePassword");

    if (senhaInput.type==="password"){
        senhaInput.type="text";
        togglePassword.textContent = "Ocultar";
    }else{
        senhaInput.type="password";
        togglePassword.textContent = "Mostrar";
    }
}

document.getElementById("senha").addEventListener("input", verificarForcaSenha);