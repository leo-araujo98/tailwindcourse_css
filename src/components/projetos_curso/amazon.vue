<template>
  <body>
    <header>
      <div class="grid text-white">
        <!--HEADER SUPERIOR-->
        <div
          class="flex flex-wrap md:flex-no-wrap bg-darkblue-950 px-2 py-1 items-center"
        >
          <div
            class="py-1 px-2 md:border border-gray-700 hover:border-white rounded-none"
          >
            <i class="fas fa-bars text-2xl"></i>
          </div>

          <div
            class="flex mx-2 py-2 border border-transparent hover:border-white"
          >
            <img src="../../../img/amazon_logo.png" alt="" class="h-7" />
            <span class="text-xs pl-1 pt-1">.com.br</span>
          </div>

          <div
            class="w-full md:w-auto flex-grow md:ml-3 mr:0 pt-1 order-2 md:order-none"
          >
            <form action="" class="flex">
              <select class="hidden md:block text-xs text-gray-700 bg-gray-100 hover:bg-gray-300 rounded-tl rounded-bl border-r border-gray-500">
                <option class="p-6" value="">Livros</option>
              </select>

              <input
                type="text"
                class="p-2 flex-grow rounded-l md:rounded-none"
              />

              <button
                class="px-4 bg-gold-100 hover:bg-gold-200 rounded-tr rounded-br"
              >
                <i class="fas fa-search text-darkblue-900 text-xl mt-1"></i>
              </button>
            </form>
          </div>

          <div
            class="hidden md:block ml-1 pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2"
          >
            <p class="leading-3">Olá,faça seu login</p>
            <p class="font-extrabold">
              Contas e Listas<i class="pl-1 fas fa-chevron-down"></i>
            </p>
          </div>

          <div
            class="hidden md:block pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2"
          >
            <p class="leading-3">Devoluções</p>
            <p class="font-extrabold">e Pedidos</p>
          </div>

          <div
            class="hidden md:block pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2"
          >
            <p class="leading-3">Experimente</p>
            <p class="font-extrabold">
              Prime<i class="pl-1 fas fa-chevron-down"></i>
            </p>
          </div>

          <div
            class="p-2 border border-transparent hover:border-white rounded-sm absolute right-1 top-0 mr-2 mt-2 md:mr-0 md:top-0 md:relative order-1 md:order-none md:flex"
          >
            <i class="fas fa-shopping-cart flex text-2xl md:mr-2"></i>
            <span
              class="bold text-gold-200 text-base absolute top-0 left-0 -mt-1 ml-4 text-center w-6 h-6 bg-darkblue-600 rounded-full"
              >0</span
            >
            <span class="hidden md:flex text-xs font-extrabold">Carrinho</span>
          </div>
        </div>

        <!-- HEADER INTERMEDIARIO -->

        <div class="flex bg-darkblue-600 text-sm px-2 py-1 items-center">
          <div class="address-container">
            <div class="mr-1">
              <i class="fas fa-map-marker-alt text-xl"></i>
            </div>
            <div class="flex md:block leading-tight text-xs">
              <p class="mx-1 md:mx-0">Olá</p>
              <p class="font-bold">Selecione o endereço</p>
            </div>
          </div>

          <div class="hidden md:block">
            <nav>
              <ul class="flex ml-10 text-sm">
                <li class="item-nav-mid">
                  <a href="">Mais Vendidos</a>
                </li>
                <li class="item-nav-mid">
                  <a href="">Livros</a>
                </li>
                <li class="item-nav-mid">
                  <a href="">Ofertas do Dia</a>
                </li>
                <li class="item-nav-mid">
                  <a href="">Atendimento ao Cliente</a>
                </li>
                <li class="item-nav-mid">
                  <a href="">Eletrônicos</a>
                </li>
                <li class="item-nav-mid">
                  <a href="">Ideias para Presente</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="flex text-black px-4 text-xs border-b border-gray-100 pt-1">
          <a href="" class="block md:hidden py-2 font-bold">
            <i class="fas fa-chevron-left"></i> Todos os Departamentos
          </a>

          <ul class="hidden md:flex">
            <li class="item-nav-inf">
              <a class="font-semibold" href="">Livros</a>
            </li>
            <li class="item-nav-inf">
              <a class="font-semibold" href="">Pesquisa avançada</a>
            </li>
            <li class="item-nav-inf">
              <a class="font-semibold" href="">Mais vendidos</a>
            </li>
            <li class="item-nav-inf">
              <a class="font-semibold" href="">Pré-venda e Lançamentos</a>
            </li>
            <li class="item-nav-inf">
              <a class="font-semibold" href="">Livros em Oferta</a>
            </li>
            <li class="item-nav-inf">
              <a class="font-semibold" href="">Inglês e outras Línguas</a>
            </li>
            <li class="item-nav-inf">
              <a class="font-semibold" href="">Loja Geek</a>
            </li>
            <li class="item-nav-inf">
              <a class="font-semibold" href="">Universitários e Acadêmicos</a>
            </li>
            <li class="item-nav-inf">
              <a class="font-semibold" href="">Didáticos e Escolares</a>
            </li>
            <li class="item-nav-inf">
              <a class="font-semibold" href="">Loja Infantil</a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <main>
      <div class="grid grid-cols-6">
        <!--NAVBAR ESQUERDA -->
        <div class="col-span-1 hidden md:block pl-2 my-2 border-r border-gray-300 text-xs">
          <h3 class="font-bold mb-1">Destaque em livros</h3>
          <ul class="pl-2 mb-2">
            <li class="text-gray-800 hover:text-orange-650">
              <a href="">Indicações Amazon</a>
            </li>

            <li class="text-gray-800 hover:text-orange-650">
              <a href="">Livros em Oferta</a>
            </li>

            <li class="text-gray-800 hover:text-orange-650">
              <a href="">Mais Vendidos do Mês</a>
            </li>

            <li class="text-gray-800 hover:text-orange-650">
              <a href="">Pré-venda e Lançamentos</a>
            </li>

            <li class="text-gray-800 hover:text-orange-650">
              <a href="">Livros Exclusivos Amazon</a>
            </li>
          </ul>

          <h3 class="font-bold">Páginas Especiais</h3>
          <ul class="pl-2 mb-2">
            <li class="text-gray-800 hover:text-orange-650">
              <a href="#">Livros Clássicos</a>
            </li>
            <li class="text-gray-800 hover:text-orange-650">
              <a href="#">Livros Que Viraram Filmes</a>
            </li>
            <li class="text-gray-800 hover:text-orange-650">
              <a href="#">Livros Infantis</a>
            </li>
            <li class="text-gray-800 hover:text-orange-650">
              <a href="#">Loja Geek</a>
            </li>
          </ul>

          <h3 class="font-bold">Livros Educacionais</h3>
          <ul class="pl-2 mb-2">
            <li class="text-gray-800 hover:text-orange-650">
              <a href="#">Didáticos e Escolares</a>
            </li>
            <li class="text-gray-800 hover:text-orange-650">
              <a href="#">Estudo e Ensino de Idiomas</a>
            </li>
            <li class="text-gray-800 hover:text-orange-650">
              <a href="#">Examos e Concursos</a>
            </li>
            <li class="text-gray-800 hover:text-orange-650">
              <a href="#">Importados para Exames</a>
            </li>
            <li class="text-gray-800 hover:text-orange-650">
              <a href="#">Universitários e Acadêmicos</a>
            </li>
          </ul>
          <h3 class="font-bold">Kindle</h3>
          <ul class="pl-2 mb-2">
            <li class="text-gray-800 hover:text-orange-650">
              <a href="#">Acessórios Kindle</a>
            </li>
            <li class="text-gray-800 hover:text-orange-650">
              <a href="#">Comprar Kindle</a>
            </li>
            <li class="text-gray-800 hover:text-orange-650">
              <a href="#">eBooks em Inglês</a>
            </li>
            <li class="text-gray-800 hover:text-orange-650">
              <a href="#">eBooks em Oferta</a>
            </li>
            <li class="text-gray-800 hover:text-orange-650">
              <a href="#">Kindle Unlimited</a>
            </li>
            <li class="text-gray-800 hover:text-orange-650">
              <a href="#">Todos os eBooks</a>
            </li>
          </ul>
        </div>

         <!--CONTEÚDO DO SITE -->
        <div class="col-span-6 md:col-span-5 p-2">
            <div class="flex flex-col">
              <!-- TÍTULO DO SITE -->
              <div class="text-center">
                <h2 class="text-2xl font-bold md:text-3xl md:font-semibold pb-2">Loja de Livros</h2>
                <ul class="flex flex-wrap md:flex-no-wrap justify-center text-sm px-4 md:px-0 pb-2">
                  <li>
                    <a href="" class="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Livros em Oferta</a>
                  </li>
                  <li>
                    <a href="" class="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Livros em Oferta</a>
                  </li>
                  <li>
                    <a href="" class="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Livros em Oferta</a>
                  </li>
                  <li>
                    <a href="" class="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Livros em Oferta</a>
                  </li>
                  <li>
                    <a href="" class="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Livros em Oferta</a>
                  </li>
                  <li>
                    <a href="" class="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Livros em Oferta</a>
                  </li>
                  <li>
                    <a href="" class="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Livros em Oferta</a>
                  </li>
                  <li>
                    <a href="" class="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">Livros em Oferta</a>
                  </li>
                </ul>
                <div class="h-2 border-b shadow-md"></div>
              </div>
              <!--PROMOÇÔES E CATEGORIAS -->

              <div class="hidden md:block my-6">
                <img src="img/banner_promo.jpg" alt="Promoções">
              </div>

              <div class="flex flex-col md:flex-row items-center my-8 py-1">
                <p class="font-bold mb-2 md:mb-0 md:w-3/4 text-center md:border-r-2 border-gray-300 leading-5 pr-2 mt-10 md:mt-0">Assine o Amazon Prime para ter benefícios de leitura com o Prime Reading,frete GRÁTIS sem valor mínimo de compra e muito mais. Apenas R$9,90/Mês.</p>

                <a href="" class="btn-amazon-prime">Teste GRÁTIS por 30 dias</a>
              </div>

              <!--Categorias-->

              <div class="flex flex-col px-6 pb-8 border-b border-gray-300">
                <h3 class="text-center md:text-left text-xl font-bold mb-4">Encontre ofertas por categorias</h3>

                <ul class="flex flex-wrap md:flex-no-wrap px-2 text-xs font-bold">

                  <li class="text-center mx-3 mb-4 md:mb-0">
                    <img src="img/cat1.jpg" alt="Todas as Ofertas" class="rounded w-full md:w-75px mb-2 mx-auto">
                  </li>

                  <li class="text-center mx-3 mb-4 md:mb-0">
                    <img src="img/cat2.jpg" alt="Todas as Ofertas" class="rounded w-full md:w-75px mb-2 mx-auto">
                  </li>

                  <li class="text-center mx-3 mb-4 md:mb-0">
                    <img src="img/cat3.jpg" alt="Todas as Ofertas" class="rounded w-full md:w-75px mb-2 mx-auto">
                  </li>

                  <li class="text-center mx-3 mb-4 md:mb-0">
                    <img src="img/cat4.jpg" alt="Todas as Ofertas" class="rounded w-full md:w-75px mb-2 mx-auto">
                  </li>

                  <li class="text-center mx-3 mb-4 md:mb-0">
                    <img src="img/cat5.jpg" alt="Todas as Ofertas" class="rounded w-full md:w-75px mb-2 mx-auto">
                  </li>

                  <li class="text-center mx-3 mb-4 md:mb-0">
                    <img src="img/cat6.jpg" alt="Todas as Ofertas" class="rounded w-full md:w-75px mb-2 mx-auto">
                  </li>

                  <li class="text-center mx-3 mb-4 md:mb-0">
                    <img src="img/cat7.jpg" alt="Todas as Ofertas" class="rounded w-full md:w-75px mb-2 mx-auto">
                  </li>

                  <li class="text-center mx-3 mb-4 md:mb-0">
                    <img src="img/cat8.jpg" alt="Todas as Ofertas" class="rounded w-full md:w-75px mb-2 mx-auto">
                  </li>

                  <li class="text-center mx-auto mb-4 md:mb-0">
                    <img src="img/cat9.jpg" alt="Todas as Ofertas" class="rounded w-full md:w-75px mb-2 mx-auto">
                  </li>

                </ul>
              </div>

              <!--Catálogo de produtos-->
              <div class="flex flex-col">
                <div class="flex justify-between py-2 px-4 text-sm">
                  <p>Mostrando 1-32 de 122 Resultados</p>
                  <div class="flex md:flex-none">
                    <span>Ordernar por</span>
                    <select class="bg-gray-300 pr-4 md:pr-12 ml-3 rounded-sm border border-gray-600 text-xs px-1">
                      <option value="">Destaques</option>
                    </select>
                  </div>
                </div>
                <div class="flex flex-wrap border border-gray-300 divide-x divide-gray-300 mb-10">
                   <div class="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <img src="img/livro1.jpg" alt="" class="h-210px place-self-center p-2">
                    <p class="text-red-700 mt-10">R$ 26,30</p>
                    <p class="text-sm mb-2">De: <span class="line-through">R$ 63,60</span> (58% off)</p>
                    <p class="text-xs text-gray-700 mb-2">Termina em 2:09:42</p>
                    <a href="" class="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">Em Busca De Sentido</a>
                    <p class="text-sm mb-8">Esta oferta é exclusiva para menbros do <a href="" class="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a></p>
                    <button class="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                   </div>

                   <div class="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <img src="img/livro2.jpg" alt="" class="h-210px place-self-center p-2">
                    <p class="text-red-700 mt-10">R$ 26,30</p>
                    <p class="text-sm mb-2">De: <span class="line-through">R$ 63,60</span> (58% off)</p>
                    <p class="text-xs text-gray-700 mb-2">Termina em 2:09:42</p>
                    <a href="" class="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">Em Busca De Sentido</a>
                    <p class="text-sm mb-8">Esta oferta é exclusiva para menbros do <a href="" class="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a></p>
                    <button class="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                   </div>

                   <div class="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <img src="img/livro3.jpg" alt="" class="h-210px place-self-center p-2">
                    <p class="text-red-700 mt-10">R$ 26,30</p>
                    <p class="text-sm mb-2">De: <span class="line-through">R$ 63,60</span> (58% off)</p>
                    <p class="text-xs text-gray-700 mb-2">Termina em 2:09:42</p>
                    <a href="" class="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">Em Busca De Sentido</a>
                    <p class="text-sm mb-8">Esta oferta é exclusiva para menbros do <a href="" class="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a></p>
                    <button class="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                   </div>

                   <div class="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <img src="img/livro4.jpg" alt="" class="h-210px place-self-center p-2">
                    <p class="text-red-700 mt-10">R$ 26,30</p>
                    <p class="text-sm mb-2">De: <span class="line-through">R$ 63,60</span> (58% off)</p>
                    <p class="text-xs text-gray-700 mb-2">Termina em 2:09:42</p>
                    <a href="" class="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">Em Busca De Sentido</a>
                    <p class="text-sm mb-8">Esta oferta é exclusiva para menbros do <a href="" class="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a></p>
                    <button class="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                   </div>

                   <div class="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <img src="img/livro5.jpg" alt="" class="h-210px place-self-center p-2">
                    <p class="text-red-700 mt-10">R$ 26,30</p>
                    <p class="text-sm mb-2">De: <span class="line-through">R$ 63,60</span> (58% off)</p>
                    <p class="text-xs text-gray-700 mb-2">Termina em 2:09:42</p>
                    <a href="" class="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">Em Busca De Sentido</a>
                    <p class="text-sm mb-8">Esta oferta é exclusiva para menbros do <a href="" class="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a></p>
                    <button class="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                   </div>

                   <div class="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <img src="img/livro6.jpg" alt="" class="h-210px place-self-center p-2">
                    <p class="text-red-700 mt-10">R$ 26,30</p>
                    <p class="text-sm mb-2">De: <span class="line-through">R$ 63,60</span> (58% off)</p>
                    <p class="text-xs text-gray-700 mb-2">Termina em 2:09:42</p>
                    <a href="" class="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">Em Busca De Sentido</a>
                    <p class="text-sm mb-8">Esta oferta é exclusiva para menbros do <a href="" class="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a></p>
                    <button class="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                   </div>

                   <div class="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <img src="img/livro7.jpg" alt="" class="h-210px place-self-center p-2">
                    <p class="text-red-700 mt-10">R$ 26,30</p>
                    <p class="text-sm mb-2">De: <span class="line-through">R$ 63,60</span> (58% off)</p>
                    <p class="text-xs text-gray-700 mb-2">Termina em 2:09:42</p>
                    <a href="" class="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">Em Busca De Sentido</a>
                    <p class="text-sm mb-8">Esta oferta é exclusiva para menbros do <a href="" class="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a></p>
                    <button class="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                   </div>

                   <div class="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                    <img src="img/livro8.jpg" alt="" class="h-210px place-self-center p-2">
                    <p class="text-red-700 mt-10">R$ 26,30</p>
                    <p class="text-sm mb-2">De: <span class="line-through">R$ 63,60</span> (58% off)</p>
                    <p class="text-xs text-gray-700 mb-2">Termina em 2:09:42</p>
                    <a href="" class="text-sm text-blue-600 hover:underline hover:text-orange-650 mb-2">Em Busca De Sentido</a>
                    <p class="text-sm mb-8">Esta oferta é exclusiva para menbros do <a href="" class="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a></p>
                    <button class="text-xs bg-gray-200 border border-gray-600 rounded-sm py-1">Saiba mais</button>
                   </div>
                </div>
              </div>
            </div>
        </div>       
      </div>
    </main>

    <footer class="flex flex-col text-white">
      <div class="py-4 text-center bg-darkblue-600 hover:bg-darkblue-500 text-sm">
      <p>Voltar ao início</p>
    </div>
    <div class="flex flex-wrap md:flex-no-wrap md:justify-around py-10 px-10 md:px-20 bg-darkblue-700">
      <div class="w-1/2 md:w-auto mb-4 md:mb-0">
        <h4 class="font-bold mb-2">Conheça-nos</h4>
        <ul class="text-xs w-3/4">
          <li class="mb-2 text-gray-400 hover:underline leading-4">
            <a href="#">Informações corporativas</a>
          </li>
          <li class="mb-2 text-gray-400 hover:underline leading-4">
            <a href="#">Carreiras</a>
          </li>
          <li class="mb-2 text-gray-400 hover:underline leading-4">
            <a href="#">Comunicados à imprensa</a>
          </li>
          <li class="mb-2 text-gray-400 hover:underline leading-4">
            <a href="#">Comunidade</a>
          </li>
        </ul>
      </div>
      <div class="w-1/2 md:w-auto mb-4 md:mb-0">
        <h4 class="font-bold mb-2">Ganhe dinheiro conosco</h4>
        <ul class="text-xs w-3/4">
          <li class="mb-2 text-gray-400 hover:underline leading-4">
            <a href="#">Publique seus livros</a>
          </li>
          <li class="mb-2 text-gray-400 hover:underline leading-4">
            <a href="#">Seja um associado</a>
          </li>
          <li class="mb-2 text-gray-400 hover:underline leading-4">
            <a href="#">Venda na Amazon</a>
          </li>
        </ul>
      </div>
      <div class="w-1/2 md:w-auto mb-4 md:mb-0">
        <h4 class="font-bold mb-2">Conheça-nos</h4>
        <ul class="text-xs w-3/4">
          <li class="mb-2 text-gray-400 hover:underline leading-4">
            <a href="#">Sua conta</a>
          </li>
          <li class="mb-2 text-gray-400 hover:underline leading-4">
            <a href="#">Frete e prazo de entrega</a>
          </li>
          <li class="mb-2 text-gray-400 hover:underline leading-4">
            <a href="#">Devoluções e reembolsos</a>
          </li>
          <li class="mb-2 text-gray-400 hover:underline leading-4">
            <a href="#">Gerencie seu conteúdo e dispositivos</a>
          </li>
          <li class="mb-2 text-gray-400 hover:underline leading-4">
            <a href="#">Ajuda</a>
          </li>
        </ul>
      </div>
      <div class="w-1/2 md:w-auto mb-4 md:mb-0">
        <h4 class="font-bold mb-2">Pagamentos</h4>
        <ul class="text-xs w-3/4">
          <li class="mb-2 text-gray-400 hover:underline leading-4">
            <a href="#">Amazon e COVID-19</a>
          </li>
          <li class="mb-2 text-gray-400 hover:underline leading-4">
            <a href="#">Cartões de crédito e Boleto</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- FOOTER INTERMEDIÁRIO -->
    <div class="hidden md:flex flex-col items-center bg-darkblue-700 border-t border-gray-700 pt-6 pb-4">
      <img src="img/amazon_logo.png" alt="Amazon" class="w-20">
      <ul class="flex flex-wrap justify-center text-xs pt-4 text-gray-400 w-3/4">
        <li class="px-2 border-r border-gray-600 hover:underline">
          <a href="#">Austrália</a>
        </li>
        <li class="px-2 border-r border-gray-600 hover:underline">
          <a href="#">Alemanha</a>
        </li>
        <li class="px-2 border-r border-gray-600 hover:underline">
          <a href="#">Canadá</a>
        </li>
        <li class="px-2 border-r border-gray-600 hover:underline">
          <a href="#">China</a>
        </li>
        <li class="px-2 border-r border-gray-600 hover:underline">
          <a href="#">Cingapura</a>
        </li>
        <li class="px-2 border-r border-gray-600 hover:underline">
          <a href="#">Espanha</a>
        </li>
        <li class="px-2 border-r border-gray-600 hover:underline">
          <a href="#">Estados Unidos</a>
        </li>
        <li class="px-2 border-r border-gray-600 hover:underline">
          <a href="#">França</a>
        </li>
        <li class="px-2 border-r border-gray-600 hover:underline">
          <a href="#">Holanda</a>
        </li>
        <li class="px-2 border-r border-gray-600 hover:underline">
          <a href="#">Índia</a>
        </li>
        <li class="px-2 border-r border-gray-600 hover:underline">
          <a href="#">Itália</a>
        </li>
        <li class="px-2 border-r border-gray-600 hover:underline">
          <a href="#">Japão</a>
        </li>
        <li class="px-2 border-r border-gray-600 hover:underline">
          <a href="#">México</a>
        </li>
        <li class="px-2 border-r border-gray-600 hover:underline">
          <a href="#">Emirados Árabes Unidos</a>
        </li>
        <li class="px-2 border-r border-gray-600 hover:underline">
          <a href="#">Reino Unido</a>
        </li>
        <li class="px-2 border-r border-gray-600 hover:underline">
          <a href="#">Turquia</a>
        </li>
      </ul>
      <div class="flex text-xs">
        <span class="text-gray-600 mr-2">E não esqueça:</span>
        <a href="#" class="text-gray-400 hover:underline">Amazon Web Services</a>
      </div>
    </div>
    <!-- FOOTER INFERIOR -->
    <div class="flex flex-col items-center bg-darkblue-950 text-xs pt-8 md:pt-2">
      <div class="flex flex-col md:flex-row mb-10">
        <ul class="flex">
          <li class="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
            <a href="#">Condições de Uso</a>
          </li>
          <li class="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
            <a href="#">Notificação de Privacidade</a>
          </li>
          <li class="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
            <a href="#">Cookies</a>
          </li>
          <li class="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
            <a href="#">Anúncios Baseados em Interesses</a>
          </li>
        </ul>
        <span class="text-center md:text-left mt-8 md:mt-0 ml-4 text-gray-600">&copy; Amazon.com, Inc. ou suas afiliadas</span>
      </div>
      <p class="item-footer-inf">Amazon Serviços de Varejo do Brasil Ltda. | CNPJ 15.436.940/0001-03</p>
      <p class="item-footer-inf">Av. Juscelino Kubischeck, 2041, Torre E, 18º andar - São Paulo <a href="#" class="text-blue-800">Fale conosco</a></p>
      <p class="item-footer-inf">Formas de pagamento aceits: cartões de crédito (Visa, Mastercard, Elo e American Express) e boleto.</p>
    </div>
    </footer>
  </body>
</template>
