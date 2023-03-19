# House Store e-commerce 🛒

# **Projeto Pessoal 💻 **
 Fiz este projeto com intuito de fixar conceitos práticos e teóricos  que consumindo ao longo do bootcamp Labenu , pra mim é uma forma de me desenvolver como desenvolvedor e sempre estar praticando , buscando novas técnicas e fixando conteúdos.  Está 100 % responsivo , mas sofrerá mudanças futuramente.
 
 Conta com consumo de API   <a href='https://dummyjson.com/'> DummyJSON </a> , que contém  diversas informações como Produtos , Posts , Users , Comments  e outros. 
 Neste projeto foi utilizado os endpoints de Produtos , detalhes por meio do seu id, e Users para consumir dados como endereço ,nome,dados de cartão (fakes). 
 
 O projeto possuí as  páginas  Home, Carrinho, Detalhes e Error.
 possuí funcionalidades como Adicionar produto ao carrinho, Remover produto dom carrinho , aumentar quantidade , finalizar compra e outras que serão apontadas abaixo.
 

<a id="ancora"></a>
#  <b> Menu </b>  
- [O Projeto](#oprojeto)
- [Páginas do Projeto](#pages)
- [Funcionalidades](#funcionalidade)
- [CheckList](#checklist)
- [Agradecimentos](#agradecimentos)


<a id="oprojeto"></a>
# O Projeto   
### Deploy : https://house-store-ecommerce.vercel.app/

### Instalação:
#### Instalar pacotes e dependências 
``` 
npm install
```
#### Iniciar App
``` 
npm run start
```

###  Tecnlogias utilizadas :

![HTML](https://img.shields.io/badge/JSON-E34F26?style=for-the-badge&logo=&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
 - ```React```;
 - ```Axios```;
 - ```Chakra UI```;
 - ```React-router-dom```;
 - ```React useContext```;
 - ```Hooks e Custom hooks```;
 - ```React-icons```;
 - ```Components```

#
<a id="pages"></a>
## Páginas do Projeto modo Ligth e dark

### Página Home Desktop
![pastas](/my-ecommerce/src/assets/imagens%20READme/home.gif) ![pastas](/my-ecommerce/src/assets/imagens%20READme/dark.gif)

### Página Detalhes Desktop
![pastas](/my-ecommerce/src/assets/imagens%20READme/details.gif)

### Página carrinho Desktop
![pastas](/my-ecommerce/src/assets/imagens%20READme/confirmCompa.gif)
### Páginas  Mobile
![mobile](/my-ecommerce/src/assets/imagens%20READme/mobile.png) ![mobile](/my-ecommerce/src/assets/imagens%20READme/mobile2.png) ![mobile](/my-ecommerce/src/assets/imagens%20READme/mobile3.png) ![mobile](/my-ecommerce/src/assets/imagens%20READme/mobileCheckout.png) ![mobile](/my-ecommerce/src/assets/imagens%20READme/mobileCheckout2%5B.png) ![mobile](/my-ecommerce/src/assets/imagens%20READme/mobiledetails.png) ![mobile](/my-ecommerce/src/assets/imagens%20READme/mobileDetails2.png) ![mobile](/my-ecommerce/src/assets/imagens%20READme/mobileHome.png) ![mobile](/my-ecommerce/src/assets/imagens%20READme/mobileHomeLight.png) 










>  [Topo](#ancora)

<a id="funcionalidade"></a>

# Funcionalidades

 ## Filter por Marcas e Categoria
### ```Filter Marcas ``` 
 - Contém todas as marcas dos produtos na página Home.
### ```Filter Categoria ``` 
 - Contém as categorias  dos produtos na página Home.
 ### ```Filter Preços``` 
 -  Poderá selecionar valor máximo de busca na página Home .
## ```Input de Pesquisa``` 
 - Poderá pesquisar por qualquer produto pelo nome , marcas e categoria na página Home
## ![inputs](./my-ecommerce/src/assets/imagens%20READme/filters.gif)
##  ```Adicionar e remover itens do carrinho``` 
## ![inputs](./my-ecommerce/src/assets/imagens%20READme/carrinhoMEnu.gif)


>  [Topo](#ancora)

<a id="checklist"></a>

# CheckList 
-  **Gerais:**
	- [✔️] O site deve ter 4 páginas: Home, Detalhes ,Carrinho e Erro ;	
	- [✔️] Rotas para Home,Detalhes e Carrinho; 
	- [✔️] Caso houver algum erro nas Rotas existirá uma página de Erro; 
	- [✔️] botão de menu ao lado direito do input de pesquisa  , que terá um resumo dos items do carrinho que poderão ser alterados como quantidade e remoção do item.; 
- **Página Home:**
	- [✔️] Mostrar uma lista de Produtos ;
	- [✔️] Cada Produto será representado por um Card;
	- [✔️] Em cada card de Pokemon tem um botão para adicioná-lo ao carrinho  e um outro botão para acessar os detalhes do Produto;
	- [✔️] Terá o Header para input de pesquisa
	- [✔️] Terá o SiderBar  contendo os filtros de busca.
- **Página Carrinho**
	- [✔️] Terá resumo dos itens adicionados; 
	- [✔️] Os produtos vão conter Botôes para aumentar quantidade ou remover o item do carrinho.
	- [✔️]  Dados do usuário como nome, endereço, dados do cartão (fakes) 
	- [✔️] Botão para Finalizar compra;
	- [✔️] Botão para retornar a HomePage;
- **Página de Detalhes**
	- [✔️] Mostrar os detalhes do Produto selecionado, com informações descritas ;
	- [✔️] Botão de adiocionar ao carrinho; 
	- [✔️] Botão de retornar a HomePage; 
	- [✔️] Botão de ir para carrinho , que só aparece se houver ao menos um item no carrinho; 
	 
	
>  [Topo](#ancora)

<a id="observações"></a>
# Observações 
- O projeto sefrerá mudanças, como  estocagem , quando adicionao ao carrinho terá quantidade máxima. 
- Detalhes na responsivadade para ipad 

#
<a id="agradecimentos"></a>
# Agradecimentos 

Este projeto pra mim é uma forma de me desenvolver como desenvolvedor ,e sempre estar praticando , buscando novas tecnicas e fixando conteúdos. Agradeço á Labenu , Família e amigos, que são fundamentais para  trilhar essa carreira.
>  [Topo](#ancora)
#
