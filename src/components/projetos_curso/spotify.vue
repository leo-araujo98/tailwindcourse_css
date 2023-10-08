<template>
  <!--NAVBAR/-->
  <header>
    <div class="flex fixed bg-black w-full px-3 md:px-20 py-4">
      <div class="container flex items-center mx-auto">

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
    
      <div class="bg-purple-main bg-footer-texture flex flex-col justify-center text-center bg-195% md:bg-175% text-green-main py-40 px-4"> 
            <h1>
                Escutar muda tudo
            </h1>
            <p>
                Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.
            </p>
            <a href="">Obtenha o Spotify Free</a>
        </div>

</div>
  <!--FOOTER /-->
</template>

<script setup>
</script>

<!--style scoped>
.spotify-theme-mobile {
    background: url(/src/assets/imgs/spotify/bursts-mobile.svg);
    width: 100%;
    height: 100%;
    z-index: 0;
    @apply bg-cover bg-fixed bg-center bg-purble-main
}

.spotify-theme {
    background: url(/src/assets/imgs/spotify/bursts.svg);
    width: 100%;
    @apply bg-cover bg-fixed bg-center bg-purble-main
}
</style-->

