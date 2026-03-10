<script setup lang="ts">
withDefaults(
  defineProps<{
    screenshot: string;
    alt?: string;
    size?: "sm" | "md" | "lg";
  }>(),
  {
    size: "md",
  },
);

const sizeClasses: Record<string, string> = {
  sm: "w-[160px]",
  md: "w-[200px] sm:w-[220px]",
  lg: "w-[240px] sm:w-[280px]",
};
</script>

<template>
  <div class="phone-mockup relative mx-auto" :class="sizeClasses[size]">
    <!-- Outer glow -->
    <div
      class="absolute -inset-3 rounded-[3rem] bg-white/2 blur-xl pointer-events-none"
    ></div>

    <!-- Phone Frame -->
    <div
      class="relative rounded-[2.2rem] bg-linear-to-b from-gray-600 via-gray-700 to-gray-800 p-0.75 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5),0_0_40px_-8px_rgba(0,0,0,0.3)]"
    >
      <div class="relative rounded-[2.05rem] bg-[#1a1a2e] overflow-hidden">
        <!-- Dynamic Island -->
        <div class="absolute top-2.5 left-1/2 z-20 -translate-x-1/2">
          <div class="h-5.5 w-22.5 rounded-full bg-black"></div>
        </div>

        <!-- Side buttons (visual only) -->
        <div
          class="absolute top-18 -left-0.75 z-30 h-8 w-0.75 rounded-l bg-gray-600"
        ></div>
        <div
          class="absolute top-27.5 -left-0.75 z-30 h-14 w-0.75 rounded-l bg-gray-600"
        ></div>
        <div
          class="absolute top-40 -left-0.75 z-30 h-14 w-0.75 rounded-l bg-gray-600"
        ></div>
        <div
          class="absolute top-27.5 -right-0.75 z-30 h-16 w-0.75 rounded-r bg-gray-600"
        ></div>

        <!-- Screen -->
        <div
          class="relative overflow-hidden bg-black"
          style="aspect-ratio: 9 / 19.5"
        >
          <!-- Screen content -->
          <img
            :src="screenshot"
            :alt="alt || 'App screenshot'"
            class="h-full w-full object-cover object-top"
            loading="lazy"
          />

          <!-- Screen reflection -->
          <div
            class="absolute inset-0 bg-linear-to-br from-white/6 via-transparent to-transparent pointer-events-none"
          ></div>
        </div>

        <!-- Home Indicator -->
        <div class="absolute bottom-1.5 left-1/2 z-20 -translate-x-1/2">
          <div class="h-1 w-25 rounded-full bg-white/20"></div>
        </div>
      </div>
    </div>
  </div>
</template>
