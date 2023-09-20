function agenda() {
   let contatoNovo;
   let lista = [ 
      ["Rodrigo Coutinho", "(24) 99999-9999","3000798", "aaaaa@sdsfsdaf"],
      ["Rodrigo Lima", "(24) 88888 8888", "484664", "dfssfd@jhglglhk"],
      ["Lucas Lima","(21) 77777 7171", "466556", "gsdfghf@jhk"]
   ];
   let select;
   let nome;
   let dataNasc;
   let numero;
   let email;
   let contador = 1;
   let ativo = true;
   let excluir;
   
   function adicionarContato() {
      
      nome = prompt("Digite o nome do contato");
      dataNasc = prompt("Digite a data de nascimento");
      numero = prompt("Telefone do contato");
      email = prompt("Digite o e-mail do contato");
      contatoNovo = [nome, numero, dataNasc, email, true];
      lista.push(contatoNovo);
      alert("Contato Salvo");
   }
   function listarContatos() {
      resposta = "";
      for(let i=0; i<lista.length; i++){
         contato = lista[i];
         resposta = resposta + (`${i+1}- ${contato[0]}`) + "\n";
         let opcao = prompt(resposta);
      }
   }
   function excluirContato (){
      lista.splice (1,1);
   }
   

   
   while (select != 4) {
      select = parseInt(prompt("Agenda telefônica!! \n \n1. Adicionar Novo Contato \n2. Exibir Lista \n3. Excluir Contato "));
     
      switch (select) {
         case 1:
            adicionarContato();
            break;
         case 2:
            listarContatos();
            break;

            case 3: 
            excluirContato();
            
           
         default:
            alert("Opção inválida, escolha uma opção válida");
            agenda();
      }
   }


}
agenda();
