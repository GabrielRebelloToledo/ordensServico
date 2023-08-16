var usuarios;
var objetivo;
var oberservacoesGerais;
var ordemServico;

function gerarOS(){
	
usuarios = document.getElementById('usuarios').value;
objetivo = document.getElementById('objetivo').value;
oberservacoesGerais = document.getElementById('oberservacoesGerais').value;


ordemServico = "Usuário(s) participante(s): " + usuarios + "\n" + "Objetivo(s): " + objetivo + "\n" + "Açõe(s): " + oberservacoesGerais;

document.getElementById('resultado').value = ordemServico;
var ordem = document.getElementById("osgerada").style.display = "block";
var novaOrdem = document.getElementById("botaoNovaOrdem").style.display = "block";
var botaoGerar = document.getElementById("botaoGerarOS").style.display = "none"
}



function novaOS(){
	
usuarios = document.getElementById('usuarios').value = '';
objetivo = document.getElementById('objetivo').value = '';
oberservacoesGerais = document.getElementById('oberservacoesGerais').value = '';


ordemServico = '';

document.getElementById('resultado').value = ordemServico;
var ordem = document.getElementById("osgerada").style.display = "none";
var novaOrdem = document.getElementById("botaoNovaOrdem").style.display = "none";
var botaoGerar = document.getElementById("botaoGerarOS").style.display = "block"
}



function copiarTexto() {
       const textToCopy = document.getElementById('resultado');

    const text = 'Texto a ser copiado'; // Aqui você define o texto que deseja copiar

    // Define o valor do input oculto como o texto a ser copiado
    textToCopy.value = text;
    
    // Seleciona o texto no input
    textToCopy.select();

    try {
      // Executa o comando de cópia para copiar o texto selecionado para a área de transferência
      document.execCommand('copy');
      alert('Texto copiado para a área de transferência com sucesso!');
    } catch (err) {
      alert('Erro ao copiar o texto para a área de transferência. Por favor, copie manualmente.');
    }
  }



  