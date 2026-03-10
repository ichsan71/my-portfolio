<script setup lang="ts">
import type { Skill } from "@/types";

defineProps<{
  skill: Skill;
  delay?: number;
  revealed?: boolean;
}>();

const levelStyles: Record<string, string> = {
  Expert: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Advanced: "bg-primary-500/10 text-primary-400 border-primary-500/20",
  Intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

const iconMap: Record<string, string> = {
  kotlin:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
  dart: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  compose:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg",
  android:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  swift:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  ios: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg",
  architecture:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg",
  pattern:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg",
  lifecycle:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
  androidstudio:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
  vscode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  xcode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  api: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  graphql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  json: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
};
</script>

<template>
  <div
    class="skill-card group relative flex flex-col items-center gap-2.5 rounded-xl border border-white/6 bg-dark-800/60 px-3 py-4 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.03] hover:border-primary-500/30 hover:bg-dark-800/90 hover:shadow-xl hover:shadow-primary-500/8"
    :class="[
      revealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
    ]"
    :style="{ transitionDelay: revealed ? `${delay ?? 0}ms` : '0ms' }"
  >
    <!-- Hover glow overlay -->
    <div
      class="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br from-primary-500/0 via-primary-500/0 to-primary-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-primary-500/4 group-hover:via-transparent group-hover:to-primary-400/4"
    ></div>

    <!-- Tech Icon -->
    <div
      class="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-white/6 to-white/3 ring-1 ring-white/8 transition-all duration-300 group-hover:from-white/10 group-hover:to-white/6 group-hover:ring-primary-500/20 group-hover:shadow-md group-hover:shadow-primary-500/10"
    >
      <img
        v-if="iconMap[skill.icon]"
        :src="iconMap[skill.icon]"
        :alt="skill.name"
        class="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
      <span v-else class="text-sm font-semibold text-gray-400">{{
        skill.name.charAt(0)
      }}</span>
    </div>

    <!-- Skill Name -->
    <span
      class="relative text-center text-xs font-medium leading-tight text-gray-300 transition-colors duration-300 group-hover:text-white"
    >
      {{ skill.name }}
    </span>

    <!-- Level Badge -->
    <span
      class="relative shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider transition-all duration-300 group-hover:shadow-sm"
      :class="levelStyles[skill.level]"
    >
      {{ skill.level }}
    </span>
  </div>
</template>

<style scoped>
.skill-card {
  transition-property:
    transform, opacity, box-shadow, border-color, background-color;
  transition-duration: 500ms, 500ms, 300ms, 300ms, 300ms;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
