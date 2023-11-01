<template>
    <div class="">
        <h1>Raio das bordas</h1>

        <button class="m-4 p-4 bg-red-400 rounded-sm">
            Botão com rounded sm
        </button>

        <button class="m-4 p-4 bg-red-400 rounded">
            Botão com rounded default
        </button>

        <button class="m-4 p-4 bg-red-400 rounded-3xl">
            Botão com rounded 3xl
        </button>

        <div class="">
            <span class="bg-green-400 w-32 h-32 block m-4 rounded-full text-center pt-12 font-bold">
                Circular
            </span>

            <span class="bg-green-400 w-40 h-20 block m-4 rounded-full text-center pt-6 font-bold">
                Pílula
            </span>
        </div>

        <div class="bg-blue-500 p-3 grid grid-cols-3 justify-between text-center divide-x-2 divide-red-600">
            <div class="m-4 p-8">teste</div>
            <div class="m-4 p-8">teste</div>
            <div class="m-4 p-8">teste</div>
        </div>


        <div>
            <select class="test">
                <option value="">teste</option>
            </select>

            <select class="appearance-none">
                <option value="">teste</option>
            </select>

            <input type="text outline-none">
        </div>
    </div>
</template>

<style>
.test{
    appearance: none;
}
</style>