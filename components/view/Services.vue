<template>
  <div id="services" class="bg-black text-white min-h-screen">
    <div class="item-1 min-h-screen bg-purple-600">
      <div class="item-2 min-h-screen bg-white">
        <div class="item-3 min-h-screen bg-purple-600">
          <div
            class="item-4 min-h-screen overflow-hidden flex justify-center flex-col gap-4 items-center bg-black"
          >
            <div
              class="ask top-0 fixed right-20 px-5 py-3 rounded-b-2xl bg-gray-400 font-semibold"
            >
              Ask for Quatation
            </div>
            <p class="primary-font opacity-85">Our Services</p>
            <h2 class="primary-font text-4xl font-bold main-text">
              UI/UX Design
            </h2>
            <div class="platform flex gap-10 opacity-85 py-5">
              <div class="item not-active">Web</div>
              <div class="item active">App</div>
              <div class="item not-active">Dash</div>
            </div>
            <div
              class="bg-gradient-to-r bg-grid to-yellow-600 opacity-55 via-gray-500 from-gray-700 min-w-[700px] mt-44 min-h-24 fixed z-10"
            ></div>
            <div class="img flex px-80 gap-5 items-center">
              <div
                class="flex items-center left-btn justify-center max-w-10 max-h-10 min-w-10 min-h-10 rounded-full z-30 mb-3 bg-white"
              >
                <Icon name="ic:baseline-arrow-back" color="black" />
              </div>
              <div
                class="flex items-center max-h-80 z-20 justify-center"
                v-for="i in 4"
              >
                <img
                  class="max-h-64"
                  :class="`phone-${i}`"
                  src="/img/phone4.png"
                  alt=""
                />
              </div>

              <div
                class="flex items-center right-btn justify-center max-w-10 max-h-10 min-w-10 min-h-10 rounded-full z-30 mb-3 bg-white"
              >
                <Icon name="ic:baseline-arrow-forward" color="black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $gsap, $ScrollTrigger } = useNuxtApp();

onMounted(() => {
  function btn(del, item, xFrom) {
    let tl = $gsap.timeline({
      scrollTrigger: {
        trigger: item,
        toggleActions: "restart none restart none",
      },
    });
    tl.from(
      item,
      {
        x: xFrom,
        duration: 0.5,
        opacity: 0,
      },
      `+=${del}`
    ).to(item, {
      x: 0,
      duration: 0.5,
      opacity: 1,
    });
  }
  function grid(duration, item, y) {
    let tl = $gsap.timeline({
      scrollTrigger: {
        trigger: item,
        toggleActions: "restart none restart none",
      },
    });
    tl.from(
      item,
      {
        y: y,

        scaleX: 0,
        duration: duration,
        opacity: 0.5,
      },
      "+=1"
    ).to(item, {
      y: 0,
      maxWidth: "700px",
      duration: duration,
      opacity: 1,
    });
  }
  function phon(del, item, y) {
    let tl = $gsap.timeline({
      scrollTrigger: {
        trigger: item,
        toggleActions: "restart none restart none",
      },
    });
    tl.from(
      item,
      {
        y: y,
        duration: 0.3,
        opacity: 0,
      },
      `+=${del}`
    ).to(item, {
      y: 0,
      duration: 0.3,
      opacity: 1,
    });
  }
  function DtU(duration, item, y) {
    let tl = $gsap.timeline({
      scrollTrigger: {
        trigger: item,
        toggleActions: "restart restart restart restart",
      },
    });
    tl.from(
      item,
      {
        y: y,
        duration: duration,
        opacity: 0,
      },
      "+=1"
    ).to(item, {
      y: 0,
      duration: duration,
      opacity: 1,
    });
  }
  function anim(duration, item) {
    let tl = $gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: item,

        scrub: duration * 2.5,
      },
    });

    tl.from(item, {
      y: "+=50",
      duration: duration * 0.5,
      opacity: 0.5,
    })
      .to(item, {
        y: "0",
        duration: duration * 0.5,
        opacity: 1,
      })

      .to(item, {
        y: "-=50",
        duration: duration * 0.5,
      });
  }
  let dur = 0.5;
  let del = 1.1;
  for (let i = 0; i <= 4; i++) {
    anim(`${dur}`, `.item-${i + 1}`);
    phon(del, `.phone-${i}`, 113);
    dur += 0.5;
    del += 0.1;
  }
  DtU("0.5", ".main-text", 40);
  DtU("0.5", ".platform", 200);
  grid("0.3", ".bg-grid", 52);
  btn(2, ".left-btn", 50);
  btn(2, ".right-btn", -50);
  DtU("1", ".ask", -50);
});
</script>
