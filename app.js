fuction criaCartao(categoria,pergunta,resposta){
 let container = document.getElementById('conteiner')
 let cartao = document.createElement('article')
 cartao.className = 'cartao'
 cartao.innerHTML = ´                     <div class="cartao__conteudo__pergunta">
                            O que é CSS?
                        </div>                        
                       <div class="cartao__conteudo__resposta">
                            O CSS é uma linguagem de estilização.
                         </div>
                        </div>
 ´
}   