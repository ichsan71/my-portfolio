<script setup lang="ts">
import { achievements } from "@/data/portfolio";
</script>

<template>
  <section id="achievements" class="py-20 sm:py-28">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-400"
        >
          Recognition
        </p>
        <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Awards & <span class="text-primary-400">Achievements</span>
        </h2>
        <div class="mx-auto h-1 w-16 rounded-full bg-primary-500"></div>
      </div>

      <!-- Achievements Grid -->
      <div class="grid gap-6 sm:grid-cols-2">
        <div
          v-for="item in achievements"
          :key="item.id"
          class="group relative overflow-hidden rounded-2xl bg-dark-800 border border-white/5 p-6 transition-all hover:border-primary-500/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/5"
        >
          <!-- Glow Effect -->
          <div
            class="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-primary-500/5 blur-2xl transition-all group-hover:bg-primary-500/10"
          ></div>

          <div class="relative flex gap-4">
            <!-- Icon -->
            <!-- <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-2xl"
            >
              {{ getIcon(item.icon) }}
            </div> -->

            <!-- Content -->
            <div>
              <p class="text-xs font-medium text-primary-400 mb-1">
                {{ item.year }}
              </p>
              <h3
                class="text-base font-semibold text-white group-hover:text-primary-400 transition-colors"
              >
                {{ item.title }}
              </h3>
              <p class="mt-1 text-sm text-gray-400">{{ item.event }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
