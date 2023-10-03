<template>
  <div class="rounded-lg shadow-lg m-4 py-4 bg-green-800 lg:bg-green-800 md:bg-blue-800">
    <h1 class="text-center font-bold text-green-200">Exercicio 1</h1>
  </div>

  <div class="rounded-lg shadow-lg m-4 py-4 bg-green-800 lg:bg-green-800 md:bg-blue-800">
    <h1 class="text-center font-bold text-green-200">Exercicio 2</h1>

    <div class="container bg-purple-700 m-4 border-box p-10 border-2 border-purple-300">
      <p class="text-center font-bold text-green-200">border-box</p>
    </div>

     <div class="container bg-teal-400 m-4 box-content p-10 border-2 border-green-300">
      <p class="text-center font-bold text-green-200" >box content</p>
    </div>
  </div>

  <div class="flex justify-center m-4">
    
    <div class="inline-block mx-2 p-2 rounded-lg shadow-lg bg-green-800 lg:bg-green-800 md:bg-blue-800">
      <h1 class="text-center font-bold text-green-200">Inline Block</h1>
    </div>
    
    <div class="inline-block mx-2 p-2 rounded-lg shadow-lg bg-green-800 lg:bg-green-800 md:bg-blue-800">
      <h1 class="text-center font-bold text-green-200">Inline Block</h1>
    </div>
  </div>

  <div class="container rounded-lg shadow-lg m-auto py-4 bg-green-800 lg:bg-green-800 md:bg-blue-800">

    <div class="m-auto flex justify-center">
      <div class="inline-block bg-purple-300 p-2 m-2 rounded-lg">
          Exercicio 3
      </div>

      <div class="inline-block bg-red-300 p-2 m-2 rounded-lg">
          Exercicio 3
      </div>

      <div class="inline-block bg-blue-300 p-2 m-2 rounded-lg">
          Exercicio 3
      </div>
    </div>

  </div>

  <div class="overflow-hidden rounded-lg shadow-lg m-4 h-16 bg-green-800 lg:bg-green-800 md:bg-blue-800">
    <p>OverFlow-hidden</p>
    <p>OverFlow-hidden</p>
    <p>OverFlow-hidden</p>
    <p>OverFlow-hidden</p>
    <p>OverFlow-hidden</p>
    <p>OverFlow-hidden</p>
    <p>OverFlow-hidden</p>
    <p>OverFlow-hidden</p>
  </div>

   <div class="overflow-auto rounded-lg shadow-lg m-4 h-16 bg-green-800 lg:bg-green-800 md:bg-blue-800">
    <p>OverFlow-auto</p>
    <p>OverFlow-auto</p>
    <p>OverFlow-auto</p>
    <p>OverFlow-auto</p>
    <p>OverFlow-auto</p>
    <p>OverFlow-auto</p>
    <p>OverFlow-auto</p>
    <p>OverFlow-auto</p>
  </div>

  <div class="overflow-x-auto rounded-lg shadow-lg m-4 h-16 bg-green-800 lg:bg-green-800 md:bg-blue-800">
    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  </div>

  <div class="overflow-y-auto rounded-lg shadow-lg m-4 h-16 bg-green-800 lg:bg-green-800 md:bg-blue-800">
    <p>OverFlow-auto-y</p>
    <p>OverFlow-auto-y</p>
    <p>OverFlow-auto-y</p>
    <p>OverFlow-auto-y</p>
    <p>OverFlow-auto-y</p>
    <p>OverFlow-auto-y</p>
    <p>OverFlow-auto-y</p>
    <p>OverFlow-auto-y</p>
  </div>


<!--Positions-->

<!--Absoluta-->
<div class="relative font-bold text-pink-200 p-2 m-4 rounded-lg bg-pink-600" >
  Relativa
  <div class="absolute top-0 right-0 bg-fuchsia-500">
    Absoluta
  </div>
</div>

<div class="container relative h-24 font-bold text-purple-200 bg-purple-600 m-4 rounded-lg justify-center flex">
  
  <div class="absolute top-0 right-0 h-16 bg-blue-100 text-blue-800 p-2 my-4 rounded-lg">
    <p>Exercício 3</p>
  </div>
</div>

<!--Visible-->

<div class="rounded-lg hidden shadow-lg m-4 h-16 bg-green-800 lg:bg-green-800 md:bg-blue-800" >
Hidden. Retira do HTML.
</div>

<div class="rounded-lg invisible shadow-lg m-4 h-16 bg-green-800 lg:bg-green-800 md:bg-blue-800" >
Invisible. Conta suas margens e alturas
</div>

<!--Visible-->

<div class="container relative">
  <div class="bg-red-600 h-20 w-20 p-6 absolute z-10">na frente</div>
  <div class="bg-red-300 h-20 w-20 p-6 absolute m-4 z-1">atrás</div>
</div> 

<div>
  <p>.</p>
  <p>.</p>
  <p>.</p>
  <p>.</p>
  <p>.</p>
  <p>.</p>
  <p>.</p>
  <p>.</p>
  <p>.</p>
  <p>.</p>
</div>

<!--Exercicio 4-->

<div class="w-24 bg-gray-900 z-100">


  <div class="bg-blue-600 h-20 w-20 p-6 m-4 absolute">na frente</div>
  <div class="bg-purple-300 h-20 w-20 p-6 m-8 absolute">atrás</div>
  <div class="bg-blue-400 h-20 w-20 p-6  m-12 absolute">atrás</div>
  <div class="bg-purple-800 h-20 w-20 p-6  m-16 absolute">atrás</div>
</div>


</template>