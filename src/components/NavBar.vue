<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { navLinks } from "@/data/portfolio";

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="
      isScrolled
        ? 'bg-dark-900/95 backdrop-blur-md shadow-lg shadow-black/10'
        : 'bg-transparent'
    "
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <a
          href="#home"
          class="text-xl font-bold text-white hover:text-primary-400 transition-colors"
        >
          ichsan<span class="text-primary-400">.</span>dev
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary-400 after:transition-all hover:after:w-full"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-gray-300 hover:text-white focus:outline-none"
          @click="toggleMenu"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-dark-800/95 backdrop-blur-md border-t border-white/5"
      >
        <div class="px-4 py-4 space-y-3">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors py-2"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>
