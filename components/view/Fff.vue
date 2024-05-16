<template>
  <div
    id="fff"
    class="min-h-full bg-black text-white flex items-center justify-center"
  >
    <h1 class="title">Get in Touch</h1>
  </div>
</template>

<script setup>
const { $anime } = useNuxtApp();

onMounted(() => {
  $anime({
    targets: ".staggering-from-demo .el",
    translateX: 270,
    delay: $anime.stagger(100, { from: "center" }),
  });
});
</script>
