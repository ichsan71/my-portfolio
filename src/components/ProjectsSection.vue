<script setup lang="ts">
import { projects } from "@/data/portfolio";
</script>

<template>
  <section id="projects" class="py-20 sm:py-28">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-400"
        >
          Portfolio
        </p>
        <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Featured <span class="text-primary-400">Projects</span>
        </h2>
        <div class="mx-auto h-1 w-16 rounded-full bg-primary-500"></div>
        <p class="mt-4 text-gray-400 max-w-lg mx-auto">
          Production mobile applications I've built and shipped to real users.
        </p>
      </div>

      <!-- Projects -->
      <div class="space-y-16">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="group"
        >
          <div
            class="grid gap-8 lg:grid-cols-2 items-center"
            :class="index % 2 !== 0 ? 'lg:direction-rtl' : ''"
          >
            <!-- Image -->
            <div :class="index % 2 !== 0 ? 'lg:order-2' : ''">
              <div
                class="relative overflow-hidden rounded-2xl aspect-video bg-dark-800 border border-white/5"
              >
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"
                ></div>
                <!-- Role Badge -->
                <div class="absolute bottom-4 left-4">
                  <span
                    class="inline-block rounded-full bg-primary-600/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white"
                  >
                    {{ project.role }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div :class="index % 2 !== 0 ? 'lg:order-1' : ''">
              <h3
                class="mb-3 text-2xl font-bold text-white group-hover:text-primary-400 transition-colors"
              >
                {{ project.title }}
              </h3>
              <p class="mb-5 text-sm text-gray-400 leading-relaxed">
                {{ project.description }}
              </p>

              <!-- Key Features -->
              <div class="mb-5">
                <h4
                  class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3"
                >
                  Key Features
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="(feature, i) in project.features"
                    :key="i"
                    class="flex items-start gap-2 text-sm text-gray-400"
                  >
                    <svg
                      class="mt-0.5 h-4 w-4 shrink-0 text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-300"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Divider between projects -->
          <div
            v-if="index < projects.length - 1"
            class="mt-16 flex items-center justify-center"
          >
            <div class="h-px w-16 bg-white/10"></div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
