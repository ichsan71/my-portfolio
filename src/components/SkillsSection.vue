<script setup lang="ts">
import { ref, computed } from "vue";
import { skills } from "@/data/portfolio";

type Category =
  | "all"
  | "languages"
  | "mobile"
  | "architecture"
  | "tools"
  | "backend";

const activeCategory = ref<Category>("all");

const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Languages", value: "languages" },
  { label: "Mobile", value: "mobile" },
  { label: "Architecture", value: "architecture" },
  { label: "Tools", value: "tools" },
  { label: "Backend / API", value: "backend" },
];

const filteredSkills = computed(() => {
  if (activeCategory.value === "all") return skills;
  return skills.filter((s) => s.category === activeCategory.value);
});

const getLevelLabel = (level: number) => {
  if (level >= 90) return "Advanced";
  if (level >= 75) return "Proficient";
  if (level >= 60) return "Intermediate";
  return "Familiar";
};

const getLevelColor = (level: number) => {
  if (level >= 90) return "from-green-500 to-green-400";
  if (level >= 75) return "from-primary-500 to-primary-400";
  if (level >= 60) return "from-yellow-500 to-yellow-400";
  return "from-gray-500 to-gray-400";
};
</script>

<template>
  <section id="skills" class="py-20 sm:py-28 bg-dark-800/50">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-400"
        >
          Tech Stack
        </p>
        <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Technical <span class="text-primary-400">Skills</span>
        </h2>
        <div class="mx-auto h-1 w-16 rounded-full bg-primary-500"></div>
        <p class="mt-4 text-gray-400 max-w-lg mx-auto">
          Technologies and tools I use to build scalable mobile applications.
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="mb-12 flex flex-wrap items-center justify-center gap-2">
        <button
          v-for="cat in categories"
          :key="cat.value"
          class="rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all"
          :class="
            activeCategory === cat.value
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
              : 'bg-dark-800 text-gray-400 border border-white/5 hover:text-white hover:border-primary-500/50'
          "
          @click="activeCategory = cat.value"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Skills Grid -->
      <TransitionGroup
        tag="div"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0 scale-90"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-200"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-90"
      >
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="group rounded-xl bg-dark-800 border border-white/5 p-5 text-center transition-all hover:border-primary-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/5"
        >
          <p class="mb-3 text-sm font-semibold text-white">{{ skill.name }}</p>
          <!-- Progress Bar -->
          <div class="h-1.5 w-full rounded-full bg-dark-700 overflow-hidden">
            <div
              class="h-full rounded-full transition-all duration-700 bg-gradient-to-r"
              :class="getLevelColor(skill.level)"
              :style="{ width: skill.level + '%' }"
            ></div>
          </div>
          <p
            class="mt-2 text-xs font-medium"
            :class="
              skill.level >= 90
                ? 'text-green-400'
                : skill.level >= 75
                  ? 'text-primary-400'
                  : 'text-gray-500'
            "
          >
            {{ getLevelLabel(skill.level) }}
          </p>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>
