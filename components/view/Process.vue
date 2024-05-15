<template>
  <div
    id="process"
    class="flex min-h-screen flex-col gap-10 justify-center py-12 bg-sky-950"
  >
    <p
      class="primary-font mx-auto text-center w-auto text-4xl md:text-5xl lg:text-6xl font-extrabold text-white [text-shadow:_2px_4px_7px_rgb(0_0_0/_40%)]"
    >
      Our Process
    </p>
    <div class="flex w-full md:px-28 justify-around">
      <div class="proc y-animation-hidden" v-for="(item, i) in proc">
        <div
          class="flex flex-col gap-5"
          :class="clsx(i == 0 ? 'items-start lg:items-center':i == 4 ? 'items-end lg:items-center':'items-center')"
        >
          <div
            class="fixed bottom-0 rounded-3xl p-5 bg-gradient-to-r from-purple-500 to-indigo-400 mb-32 w-60 mx-0 opacity-90 text-white"
            :class="clsx(item.isActive ? 'card-show' : 'card-hidden')"
          >
            <p class="text-center opacity-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem natus sunt vero aperi
            </p>
          </div>
          <div class="text-center items-center primary-font text-white">
            {{ item.name }}
          </div>
          <div
            @click="showInfo(i)"
            class="w-16 h-16 rounded-full cursor-pointer flex justify-center items-center shadow-[0px_0px_33px_rgb(200_92_255/_70%)]"
            :class="
              clsx(
                item.isActive
                  ? 'bg-white text-black'
                  : 'bg-gradient-to-l from-purple-800 to-purple-50'
              )
            "
          >
            <Icon
              :name="item.icon"
              class="size-7"
              :class="clsx(item.isActive ? `text-black` : `text-white`)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="btn y-animation-hidden flex w-full justify-center">
      <button class="border py-4 px-10 rounded-2xl text-white font-semibold">
        Get In Touch
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import clsx from "clsx";
let proc = ref([
  {
    name: "Ideate",
    icon: "mdi:lightbulb-outline",
    isActive: false,
  },
  {
    name: "Define",
    icon: "mdi:chart-line",
    isActive: false,
  },
  {
    name: "Design",
    icon: "mdi:grid-large",
    isActive: false,
  },
  {
    name: "Build",
    icon: "mdi:monitor-shimmer",
    isActive: false,
  },
  {
    name: "Deploy",
    icon: "mdi:check-bold",
    isActive: false,
  },
]);
const showInfo = (index) => {
  console.log(index);
  for (let i = 0; i < 5; i++) {
    console.log(proc.value[index].name);
    if (i == index) {
      if (proc.value[i].isActive == true) {
        proc.value[i].isActive = false;
      } else {
        proc.value[i].isActive = true;
      }
    } else {
      proc.value[i].isActive = false;
    }
  }
};
</script>

<style>
.card-hidden {
  opacity: 0;
  filter: brightness(5px);
  transform: translateY(40%);
  transition: all 300ms;
}
.card-show {
  opacity: 0.8;
  filter: blur(0);
  transform: translateY(0) rotate(0deg);
  transition: all 300ms;
}
</style>
