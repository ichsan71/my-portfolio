<script setup lang="ts">
import { ref, computed } from "vue";
import { skills, skillGroups } from "@/data/portfolio";
import { useScrollReveal } from "@/composables/useScrollReveal";
import SkillCategory from "./SkillCategory.vue";

const sectionRef = ref<HTMLElement | null>(null);
const { isRevealed } = useScrollReveal(sectionRef, {
  threshold: 0.08,
  rootMargin: "0px 0px -60px 0px",
});

const groupedSkills = computed(() =>
  skillGroups.map((group) => ({
    group,
    skills: skills.filter((s) => s.category === group.key),
  })),
);
</script>

<template>
  <section
    id="skills"
    class="relative py-20 sm:py-28 bg-dark-800/50 overflow-hidden"
    ref="sectionRef"
  >
    <!-- Background radial glow -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 top-1/3 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/4 blur-3xl"
      ></div>
      <div
        class="absolute right-0 bottom-0 h-100 w-100 rounded-full bg-primary-600/3 blur-3xl"
      ></div>
    </div>

    <div class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-16 text-center" data-reveal-id="header">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-400 transition-all duration-700"
          :class="
            isRevealed('header')
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
          "
        >
          Tech Stack
        </p>
        <h2
          class="mb-4 text-3xl font-bold text-white sm:text-4xl transition-all duration-700 delay-100"
          :class="
            isRevealed('header')
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
          "
        >
          Technical <span class="text-primary-400">Skills</span>
        </h2>
        <div
          class="mx-auto h-1 w-16 rounded-full bg-primary-500 transition-all duration-700 delay-200"
          :class="
            isRevealed('header')
              ? 'scale-x-100 opacity-100'
              : 'scale-x-0 opacity-0'
          "
        ></div>
        <p
          class="mt-4 text-gray-400 max-w-lg mx-auto transition-all duration-700 delay-300"
          :class="
            isRevealed('header')
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
          "
        >
          Technologies and tools I use to build scalable mobile applications.
        </p>
      </div>

      <!-- Level Legend -->
      <div
        class="mb-12 flex flex-wrap items-center justify-center gap-5 text-xs transition-all duration-700 delay-400"
        data-reveal-id="legend"
        :class="
          isRevealed('legend')
            ? 'translate-y-0 opacity-100'
            : 'translate-y-4 opacity-0'
        "
      >
        <div
          class="flex items-center gap-2 rounded-full border border-white/6 bg-dark-800/60 px-3.5 py-1.5 backdrop-blur-sm"
        >
          <span
            class="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"
          ></span>
          <span class="text-gray-400">Expert</span>
        </div>
        <div
          class="flex items-center gap-2 rounded-full border border-white/6 bg-dark-800/60 px-3.5 py-1.5 backdrop-blur-sm"
        >
          <span
            class="inline-block h-2 w-2 rounded-full bg-primary-400 shadow-sm shadow-primary-400/50"
          ></span>
          <span class="text-gray-400">Advanced</span>
        </div>
        <div
          class="flex items-center gap-2 rounded-full border border-white/6 bg-dark-800/60 px-3.5 py-1.5 backdrop-blur-sm"
        >
          <span
            class="inline-block h-2 w-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50"
          ></span>
          <span class="text-gray-400">Intermediate</span>
        </div>
      </div>

      <!-- Grouped Skills -->
      <div class="grid gap-6 md:grid-cols-2 lg:gap-8">
        <SkillCategory
          v-for="({ group, skills: groupSkills }, index) in groupedSkills"
          :key="group.key"
          :group="group"
          :skills="groupSkills"
          :revealed="isRevealed(`cat-${group.key}`)"
          :base-delay="index * 120"
          :data-reveal-id="`cat-${group.key}`"
        />
      </div>
    </div>
  </section>
</template>
