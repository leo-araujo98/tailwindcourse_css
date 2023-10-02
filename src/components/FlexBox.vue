<template>

    <h3 class="text-center font-bold text-red-800 mt-12">Flex Box</h3>

    <div class="flex flex-row bg-red-300 m-8 rounded-lg overflow-auto">
        <div class="bg-red-600 p-6 m-2">1</div>
        <div class="bg-red-600 p-6 m-2" >2</div>
        <div class="bg-red-600 p-6 m-2" >3</div>
    </div>

     <div class="flex flex-col bg-blue-300 m-8 rounded-lg">
        <div class="bg-blue-600 p-6 m-2">1</div>
        <div class="bg-blue-600 p-6 m-2" >2</div>
        <div class="bg-blue-600 p-6 m-2" >3</div>
    </div>

    <div class="flex flex-row-reverse bg-green-300 m-8 rounded-lg overflow-auto">
        <div class="bg-green-600 p-6 m-2">1</div>
        <div class="bg-green-600 p-6 m-2" >2</div>
        <div class="bg-green-600 p-6 m-2" >3</div>
    </div>

    <div class="flex flex-col-reverse bg-pink-300 m-8 rounded-lg">
        <div class="bg-pink-600 p-6 m-2">1</div>
        <div class="bg-pink-600 p-6 m-2" >2</div>
        <div class="bg-pink-600 p-6 m-2" >3</div>
    </div>

    <!-- Exercício 5 -->
    <div class="flex flex-wrap flex-col bg-pink-300 m-8 rounded-lg p-2">
        <h3 class="text-center font-bold text-red-800">Exercício 5</h3>
        
        <div class="bg-pink-600 p-6 m-2 rounded-lg">1</div>
        <div class="bg-green-600 p-6 m-2 rounded-lg">2</div>
        <div class="bg-purple-600 p-6 m-2 rounded-lg">3</div>
        <div class="bg-yellow-600 p-6 m-2 rounded-lg">4</div>
        <div class="bg-blue-600 p-6 m-2 rounded-lg">5</div>
        <div class="bg-gray-600 p-6 m-2 rounded-lg">6</div>
      
    </div>

     <!-- Order -->

    <div class=" bg-pink-300 m-8 rounded-lg p-2">
        <h3 class="text-center font-bold text-red-800">Order</h3>

        <div class="flex flex-wrap flex-col">
            <div class="bg-pink-600 p-6 m-2 rounded-lg order-last">1</div>
            <div class="bg-green-600 p-6 m-2 rounded-lg order-5">2</div>
            <div class="bg-purple-600 p-6 m-2 rounded-lg order-4">3</div>
            <div class="bg-yellow-600 p-6 m-2 rounded-lg order-3">4</div>
            <div class="bg-blue-600 p-6 m-2 rounded-lg order-2">5</div>
            <div class="bg-gray-600 p-6 m-2 rounded-lg order-first">6</div>
        </div>
    </div>


    <div class=" bg-pink-300 m-8 rounded-lg p-2">
        <h3 class="text-center font-bold text-red-800">Exercício 6</h3>

        <div class="flex flex-wrap flex-col">
            <div class="bg-pink-600 p-6 m-2 rounded-lg order-last lg:order-first">Menu</div>
            <div class="bg-green-600 p-6 m-2 rounded-lg order-5">Fale Conosco</div>
            <div class="bg-purple-600 p-6 m-2 rounded-lg order-first lg:order-last">Financeiro</div>
            
        </div>
    </div>
    
</template>