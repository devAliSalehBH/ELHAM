<template>
  <footer class="fixed bottom-0 mb-5 flex w-full px-16">
    <div class="lang w-1/3 text-start text-white flex items-center">
      <div
        class="border border-white flex gap-4 items-center rounded-3xl px-5 py-2"
      >
        <div>EN</div>
        <Icon
          name="fluent-mdl2:caret-down-solid-8"
          class="size-2"
          color="white"
        />
      </div>
    </div>
    <div class="nav w-1/3 text-center text-white flex gap-3 justify-center">
      <button @click="navigateUp()">UP</button>
      <button @click="navigateDown()">DOWN</button>
    </div>
    <div class="media-button flex items-center justify-end w-1/3 md:hidden">
      <Icon name="mdi-light:eject" size="18" color="white" />
    </div>
    <div class="media w-1/3 text-end hidden md:flex items-center justify-end">
      <div class="flex gap-6">
        <div class="cursor-pointer" v-for="item in media">
          <Icon :name="item.icon" size="18" color="white" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
let currentPage = 0;
const pages = [
  { path: "/" },
  { path: "/#process" },
  { path: "/#services" },
 
];
const media = [
  {
    icon: "fa6-brands:facebook-f",
    path: "",
  },
  {
    icon: "fa6-brands:x-twitter",
    path: "",
  },
  {
    icon: "fa6-brands:instagram",
    path: "",
  },
  {
    icon: "fa6-brands:snapchat",
    path: "",
  },
];
const route = useRoute();
const navigateUp = () => {
  for (let i = 0;i<pages.length;i++){
    console.log(route.fullPath , pages[i].path )
    if (`${pages[i].path}` == route.fullPath && i>0){
      navigateTo(pages[i-1].path)
    }
  }
};
const navigateDown = () => {

  for (let i = 0;i<pages.length;i++){
    console.log(route.fullPath , pages[i].path )
    if (`${pages[i].path}` == route.fullPath && i+1 < pages.length){
      navigateTo(pages[i+1].path)
    }
  }
};
</script>
