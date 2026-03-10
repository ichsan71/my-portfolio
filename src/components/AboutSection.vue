<script setup lang="ts">
import { aboutMe } from "@/data/portfolio";
</script>

<template>
  <section id="about" class="py-20 sm:py-28">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-400"
        >
          Get To Know Me
        </p>
        <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl">
          About <span class="text-primary-400">Me</span>
        </h2>
        <div class="mx-auto h-1 w-16 rounded-full bg-primary-500"></div>
      </div>

      <div class="grid gap-12 lg:grid-cols-5 items-start">
        <!-- Left - Visual Card -->
        <div class="lg:col-span-2 flex justify-center">
          <div class="relative w-full max-w-sm">
            <div
              class="absolute inset-0 rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 rotate-3 opacity-20"
            ></div>
            <div
              class="relative rounded-2xl bg-dark-800 border border-white/5 p-8 text-center"
            >
              <div class="text-7xl mb-6">📱</div>
              <h3 class="text-lg font-semibold text-white mb-1">
                {{ aboutMe.name }}
              </h3>
              <p class="text-primary-400 text-sm font-medium mb-4">
                {{ aboutMe.title }}
              </p>

              <!-- Quick Info -->
              <div class="space-y-3 text-left">
                <div class="flex items-center gap-3 text-sm">
                  <svg
                    class="h-4 w-4 text-primary-400 shrink-0"
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
                  <span class="text-gray-400">{{ aboutMe.location }}</span>
                </div>
                <div class="flex items-center gap-3 text-sm">
                  <svg
                    class="h-4 w-4 text-primary-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="text-gray-400">{{ aboutMe.email }}</span>
                </div>
                <div class="flex items-center gap-3 text-sm">
                  <svg
                    class="h-4 w-4 text-green-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="text-gray-400">{{ aboutMe.availability }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right - Content -->
        <div class="lg:col-span-3">
          <p class="mb-8 text-gray-400 leading-relaxed text-base">
            {{ aboutMe.bio }}
          </p>

          <!-- Highlight Cards -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            <div
              class="rounded-xl bg-dark-800 border border-white/5 p-4 text-center"
            >
              <p class="text-2xl font-bold text-primary-400">1+</p>
              <p class="text-xs text-gray-400 mt-1">Years Professional</p>
            </div>
            <div
              class="rounded-xl bg-dark-800 border border-white/5 p-4 text-center"
            >
              <p class="text-2xl font-bold text-primary-400">3+</p>
              <p class="text-xs text-gray-400 mt-1">Production Apps</p>
            </div>
            <div
              class="rounded-xl bg-dark-800 border border-white/5 p-4 text-center"
            >
              <p class="text-2xl font-bold text-primary-400">3.68</p>
              <p class="text-xs text-gray-400 mt-1">GPA / 4.0</p>
            </div>
          </div>

          <!-- What I do best -->
          <div class="space-y-3">
            <h4
              class="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4"
            >
              What I bring to the table
            </h4>
            <div class="grid gap-3 sm:grid-cols-2">
              <div class="flex items-start gap-3">
                <span
                  class="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary-500"
                ></span>
                <span class="text-sm text-gray-400"
                  >Cross-platform mobile development (Flutter & Native
                  Android)</span
                >
              </div>
              <div class="flex items-start gap-3">
                <span
                  class="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary-500"
                ></span>
                <span class="text-sm text-gray-400"
                  >Clean Architecture & scalable code patterns</span
                >
              </div>
              <div class="flex items-start gap-3">
                <span
                  class="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary-500"
                ></span>
                <span class="text-sm text-gray-400"
                  >End-to-end app lifecycle & Play Store / App Store
                  deployment</span
                >
              </div>
              <div class="flex items-start gap-3">
                <span
                  class="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary-500"
                ></span>
                <span class="text-sm text-gray-400"
                  >Cross-functional team collaboration & agile workflows</span
                >
              </div>
            </div>
          </div>

          <div class="mt-8">
            <a
              :href="aboutMe.resumeUrl"
              class="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-500 hover:-translate-y-0.5 shadow-lg shadow-primary-600/25"
            >
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
