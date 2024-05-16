<template>
  <ViewMain />
  <ViewProcess />
  <ViewServices />
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  const Yobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("y-animation-show");
      } else {
        entry.target.classList.remove("y-animation-show");
      }
    });
  });
  const Xobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("x-animation-show");
      } else {
        entry.target.classList.remove("x-animation-show");
      }
    });
  });
  const YhiddenElements = document.querySelectorAll(".y-animation-hidden");
  YhiddenElements.forEach((el) => Yobserver.observe(el));
  const XhiddenElements = document.querySelectorAll(".x-animation-hidden");
  XhiddenElements.forEach((el) => Xobserver.observe(el));
});

// const elements = document.querySelectorAll(".y-animation-hidden");
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("y-animation-show");
//       console.log("s1");
//     } else {
//       entry.target.classList.add("y2-animation-show"); // Add scrolling animation class
//       entry.target.classList.remove("y-animation-show");
//       console.log("s2");
//     }
//   });
// // });

// elements.forEach((element) => observer.observe(element));
// let lastScrollingPos = 0;
// // Remove scrolling animation class when scrolling stops (optional)
// window.addEventListener("scroll", () => {
//   if (window.scrollY < lastScrollingPos) {
//     // Check if scrolled back to top
//     elements.forEach((element) =>
//       element.classList.remove("y2-animation-show")
//     );
//     console.log("remove");
//   }
//   lastScrollingPos = window.scrollY;
// });
</script>

<style>
html {
  scroll-behavior: smooth;
  overflow: hidden;
}
</style>
