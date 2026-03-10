<script setup lang="ts">
import type { Skill, SkillGroup } from "@/types";
import SkillCard from "./SkillCard.vue";

defineProps<{
  group: SkillGroup;
  skills: Skill[];
  revealed?: boolean;
  baseDelay?: number;
}>();

const groupIcons: Record<string, string> = {
  zap: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  smartphone: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  layers: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  wrench: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  server: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
};
</script>

<template>
  <div
    class="skill-category rounded-2xl border border-white/5 bg-linear-to-br from-dark-800/80 to-dark-800/40 p-5 backdrop-blur-sm transition-all duration-700 ease-out sm:p-6"
    :class="[
      revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
    ]"
    :style="{ transitionDelay: `${baseDelay ?? 0}ms` }"
  >
    <!-- Category Header -->
    <div class="mb-5 flex items-center gap-3">
      <div
        class="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-primary-500/15 to-primary-600/10 text-primary-400 ring-1 ring-primary-500/15 transition-all duration-300"
        v-html="groupIcons[group.icon] || groupIcons['code']"
      ></div>
      <div>
        <h3 class="text-sm font-semibold text-white">{{ group.title }}</h3>
        <p class="text-xs text-gray-500">{{ group.description }}</p>
      </div>
    </div>

    <!-- Divider -->
    <div
      class="mb-4 h-px bg-linear-to-r from-white/6 via-white/3 to-transparent"
    ></div>

    <!-- Skills Grid -->
    <div class="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
      <SkillCard
        v-for="(skill, i) in skills"
        :key="skill.name"
        :skill="skill"
        :revealed="revealed"
        :delay="(baseDelay ?? 0) + 80 + i * 60"
      />
    </div>
  </div>
</template>

<style scoped>
.skill-category {
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
