<script setup lang="ts">
import { experiences } from "@/data/portfolio";
</script>

<template>
  <section id="experience" class="py-20 sm:py-28">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-400"
        >
          Career Path
        </p>
        <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Professional <span class="text-primary-400">Experience</span>
        </h2>
        <div class="mx-auto h-1 w-16 rounded-full bg-primary-500"></div>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical Line -->
        <div
          class="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent md:left-1/2 md:-translate-x-px"
        ></div>

        <div class="space-y-12">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.id"
            class="relative"
          >
            <!-- Timeline Dot -->
            <div
              class="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2"
            >
              <div
                class="h-4 w-4 rounded-full border-2 border-primary-500 bg-dark-900"
              ></div>
            </div>

            <!-- Content Card -->
            <div
              class="ml-12 md:ml-0"
              :class="index % 2 === 0 ? 'md:pr-[54%]' : 'md:pl-[54%]'"
            >
              <div
                class="group rounded-2xl bg-dark-800 border border-white/5 p-6 transition-all hover:border-primary-500/20 hover:shadow-lg hover:shadow-primary-500/5"
              >
                <!-- Header -->
                <div
                  class="mb-4 flex flex-wrap items-start justify-between gap-2"
                >
                  <div>
                    <h3
                      class="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors"
                    >
                      {{ exp.role }}
                    </h3>
                    <p class="text-sm text-primary-400 font-medium">
                      {{ exp.company }}
                    </p>
                  </div>
                  <div class="text-right">
                    <span
                      class="inline-block rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-300"
                    >
                      {{ exp.type }}
                    </span>
                  </div>
                </div>

                <!-- Period & Location -->
                <div
                  class="mb-4 flex flex-wrap items-center gap-4 text-xs text-gray-500"
                >
                  <span class="inline-flex items-center gap-1.5">
                    <svg
                      class="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {{ exp.period }}
                  </span>
                  <span class="inline-flex items-center gap-1.5">
                    <svg
                      class="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {{ exp.location }}
                  </span>
                </div>

                <!-- Description -->
                <p class="mb-4 text-sm text-gray-400 leading-relaxed">
                  {{ exp.description }}
                </p>

                <!-- Achievements -->
                <ul class="mb-5 space-y-2">
                  <li
                    v-for="(achievement, i) in exp.achievements"
                    :key="i"
                    class="flex gap-2 text-sm text-gray-400"
                  >
                    <span
                      class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500"
                    ></span>
                    <span>{{ achievement }}</span>
                  </li>
                </ul>

                <!-- Tech Tags -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in exp.technologies"
                    :key="tech"
                    class="rounded-full bg-dark-900 px-3 py-1 text-xs font-medium text-gray-400 border border-white/5"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
