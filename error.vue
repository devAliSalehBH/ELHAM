<template>
    <div class="error h-screen flex justify-center items-center flex-col gap-9 text-white bg-black ">
        <h2 class="text-5xl primary-font font-bold">
             Error {{error.statusCode}}
        </h2>
        <h2 class="text-5xl primary-font font-bold">
            {{error.statusMessage}}
        </h2>
        <button class="bg-red-500 py-2 px-4 rounded-3xl secondary font-bold" @click="$router.push('/')" >Back Home</button>
    </div>
</template>

<script setup>
defineProps(['error'])
</script>