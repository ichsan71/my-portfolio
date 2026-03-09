<script setup lang="ts">
import { education } from "@/data/portfolio";
</script>

<template>
  <section id="education" class="py-20 sm:py-28 bg-dark-800/50">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-400"
        >
          Academic Background
        </p>
        <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl">
          <span class="text-primary-400">Education</span>
        </h2>
        <div class="mx-auto h-1 w-16 rounded-full bg-primary-500"></div>
      </div>

      <!-- Education Card -->
      <div class="mx-auto max-w-3xl">
        <div
          class="relative overflow-hidden rounded-2xl bg-dark-800 border border-white/5 p-8"
        >
          <!-- Decoration -->
          <div
            class="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary-500/5 blur-3xl"
          ></div>

          <div class="relative">
            <!-- University -->
            <div class="flex items-start gap-4 mb-6">
              <div
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-2xl"
              >
                🎓
              </div>
              <div>
                <h3 class="text-xl font-semibold text-white">
                  {{ education.degree }}
                </h3>
                <p class="text-primary-400 font-medium">
                  {{ education.university }}
                </p>
                <p class="text-sm text-gray-500 mt-1">
                  {{ education.location }} · Graduated
                  {{ education.graduationDate }}
                </p>
              </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="rounded-xl bg-dark-900 border border-white/5 p-4">
                <p class="text-2xl font-bold text-primary-400">
                  {{ education.gpa }}
                </p>
                <p class="text-sm text-gray-400">Cumulative GPA</p>
              </div>
              <div class="rounded-xl bg-dark-900 border border-white/5 p-4">
                <p class="text-lg font-bold text-primary-400 leading-tight">
                  🏅 Rector's
                </p>
                <p class="text-sm text-gray-400">{{ education.scholarship }}</p>
              </div>
            </div>

            <!-- Relevant Coursework -->
            <div>
              <h4
                class="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400"
              >
                Relevant Coursework
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="course in education.coursework"
                  :key="course"
                  class="rounded-full bg-primary-500/10 px-3 py-1.5 text-xs font-medium text-primary-300"
                >
                  {{ course }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
