<template>
  <!--NAVBAR/-->
  <header>
    <div class="flex fixed bg-black w-full px-3 md:px-20 py-4">
      <div class="select-none container flex items-center mx-auto">

        <div class="">
          <a href="#">
            <img
              src="img/spotify-logo.png"
              alt="spotify"
              class="w-20 md:w-125px"
            />
          </a>
        </div>

        <div class="flex justify-end flex-1 md:hidden text-white text-3xl">
          <i class="fas fa-bars"></i>
        </div>

        <div class="items-end flex-1 text-white font-bold hidden md:flex">
          <nav class="flex-1">
            <ul class="flex flex-1 justify-end">
              <li class="px-4">
                <a class="hover:text-hoverspt text-sm" href="#">Premium</a>
              </li>
              <li class="px-4">
                <a class="hover:text-hoverspt text-sm" href="#">Ajuda</a>
              </li>
              <li class="px-4">
                <a class="hover:text-hoverspt text-sm" href="#">Baixar</a>
              </li>

              <span class="border-r border-white"></span>

              <li class="px-4">
                <a class="hover:text-hoverspt text-sm" href="#"
                  >Incscrever-se</a
                >
              </li>
              <li class="px-4">
                <a class="hover:text-hoverspt text-sm" href="#">Log In</a>
              </li>
            </ul>
          </nav>
        </div>
        
      </div>
    </div>
  </header>

  <!--CONTENT/-->

<div class="">
    
      <div class="select-none flex flex-col justify-center text-center bg-spotify-theme-mobile md:bg-spotify-theme bg-banner-mobile md:bg-banner bg-195% md:bg-175% bg-purple-main text-green-main py-40 px-4"> 
            <h1 class="text-5xl md:text-9xl mb-10 font-bold max-w-4xl mx-auto leading-none">
                Escutar muda tudo
            </h1>
            <p class="text-md md:text-lg mb-10">
                Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.
            </p>
            <a class="bg-green-main text-purple-main hover:bg-white text=purple-main text-sm rounded-full px-10 py-3 uppercase font-bold max-w-xl mx-auto tracking-widest transition duration-500" href="">Obtenha o Spotify Free</a>
        </div>

</div>
  <!--FOOTER /-->

  <footer>
    <div class="grid grid-cols-1 md:grid-cols-6 bg-black text-white p-4 md:p-20">

      <div class="md:col-span-1 pt-10 md:pt-0">
        <a href="#">
          <img src="img/spotify-logo.png" alt="" class="w-20 md:w-132px">
        </a>
      </div>

      <div class="md:col-span-1 pt-10 md:pt-4">
        <h3 class="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5" >Empresa</h3>

        <ul>
          <li class="mb-5" >
            <a href="#">Sobre</a>
          </li>

          <li class="mb-5" >
            <a href="#">Empregos</a>
          </li>

          <li class="mb-5" >
            <a href="#">For the Record</a>
          </li>
        </ul>

      </div>

      <div class="md:col-span-1 pt-10 md:pt-4">

        <h3 class="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5" >Comunidades</h3>

        <ul>
          <li class="mb-5" >
            <a href="#">Para Artistas</a>
          </li>

          <li class="mb-5" >
            <a href="#">Desenvolvedores</a>
          </li>

          <li class="mb-5" >
            <a href="#">Publicidade</a>
          </li>

          <li class="mb-5" >
            <a href="#">Investidores</a>
          </li>

          <li class="mb-5" >
            <a href="#">Fornecedores</a>
          </li>
        </ul>
      </div>

      <div class="md:col-span-1 pt-10 md:pt-4">
        <h3 class="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5" >Links Úteis</h3>

        <ul>
          <li class="mb-5" >
            <a href="">Ajuda</a>
          </li>

          <li class="mb-5" >
            <a href="">Player da Web</a>
          </li>

          <li class="mb-5" >
            <a href="">Aplicativo móvel grátis</a>
          </li>
        </ul>
      </div>

      <div class="md:col-span-2 pt-10 md:pt-4">
        <ul class="flex md:justify-end">
          <li class="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2" >
            <a href="#" class="fab fa-instagram"></a>
          </li>

          <li class="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2" >
            <a href="#" class="fab fa-twitter"></a>
          </li>

          <li class="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2" >
            <a href="#" class="fab fa-facebook-f"></a>
          </li> 
        </ul>
      </div>

      <div class="md:col-span-4 mt-20">
        <ul>
          <li class="inline-block text-xs text-gray-600 mr-4">
            <a href="#">Legal</a>
          </li>

          <li class="inline-block text-xs text-gray-600 mr-4">
            <a href="#">Centro de Privacidade</a>
          </li >

          <li class="inline-block text-xs text-gray-600 mr-4">
            <a href="#">Política de Privacidade</a>
          </li>

          <li class="inline-block text-xs text-gray-600 mr-4">
            <a href="#">Cookies</a>
          </li>

          <li class="inline-block text-xs text-gray-600 mr-4">
            <a href="#">Sobre anúncios</a>
          </li>
        </ul>
      </div>

      <div class="md:col-span-2 mt-20">
        <p class="flex justify-end text-gray-500 text-xs">&copy; 2023 Spotify AB</p>
      </div>

    </div>
  </footer>


</template>
