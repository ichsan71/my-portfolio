<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { projects } from "@/data/portfolio";
import PhoneMockup from "@/components/PhoneMockup.vue";
import type { Project } from "@/types";

// Intersection Observer for scroll-triggered animations
const visibleProjects = ref<Set<number>>(new Set());

const observerCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    const id = Number(entry.target.getAttribute("data-project-id"));
    if (entry.isIntersecting) {
      visibleProjects.value.add(id);
    }
  });
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px",
  });

  document.querySelectorAll("[data-project-id]").forEach((el) => {
    observer?.observe(el);
  });
});

onUnmounted(() => {
  observer?.disconnect();
});

// Active screenshot index per project
const activeScreenshots = ref<Record<number, number>>({});

const getActive = (project: Project): number => {
  return activeScreenshots.value[project.id] ?? 0;
};

const setActive = (projectId: number, index: number) => {
  activeScreenshots.value[projectId] = index;
};

const shot = (project: Project, index: number): string => {
  return project.screenshots[index] ?? "";
};

// Mouse parallax for device area
const mousePositions = ref<Record<number, { x: number; y: number }>>({});

const handleMouseMove = (e: MouseEvent, projectId: number) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  mousePositions.value[projectId] = { x, y };
};

const handleMouseLeave = (projectId: number) => {
  mousePositions.value[projectId] = { x: 0, y: 0 };
};

const getParallax = (projectId: number, intensity: number = 1) => {
  const pos = mousePositions.value[projectId] ?? { x: 0, y: 0 };
  return {
    transform: `translate(${pos.x * 8 * intensity}px, ${pos.y * 6 * intensity}px)`,
  };
};

const getDeviceTilt = (projectId: number) => {
  const pos = mousePositions.value[projectId] ?? { x: 0, y: 0 };
  return {
    transform: `perspective(1200px) rotateY(${pos.x * 5}deg) rotateX(${-pos.y * 3}deg)`,
  };
};

// Project number formatter
const projectNum = (index: number): string => {
  return String(index + 1).padStart(2, "0");
};
</script>

<template>
  <section id="projects" class="relative overflow-hidden">
    <!-- Section top divider -->
    <div
      class="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent"
    ></div>

    <!-- Section Header -->
    <div class="pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <p
            class="mb-4 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-primary-400"
          >
            <span class="h-1 w-1 rounded-full bg-primary-400"></span>
            Featured Work
          </p>
          <h2
            class="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]"
          >
            Products I've
            <span
              class="bg-linear-to-r from-primary-400 via-primary-300 to-blue-400 bg-clip-text text-transparent"
            >
              Shipped
            </span>
          </h2>
          <p
            class="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
          >
            Production mobile applications designed, built, and deployed for
            real users across enterprise and consumer markets.
          </p>
        </div>
      </div>
    </div>

    <!-- Project Showcases -->
    <div class="space-y-0">
      <article
        v-for="(project, index) in projects"
        :key="project.id"
        :data-project-id="project.id"
        class="project-showcase relative"
      >
        <!-- Full-width project section -->
        <div
          class="relative py-20 sm:py-28 lg:py-36 transition-all duration-[1.2s] ease-out"
          :class="[
            visibleProjects.has(project.id) ? 'opacity-100' : 'opacity-0',
            index % 2 === 0 ? 'bg-transparent' : 'bg-white/1',
          ]"
        >
          <!-- Background gradient per project -->
          <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              class="absolute top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br opacity-[0.04] blur-[100px] transition-all duration-1000"
              :class="[
                project.color,
                index % 2 === 0 ? '-right-48' : '-left-48',
              ]"
            ></div>
          </div>

          <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <!-- Content Side (5 cols) -->
              <div
                class="lg:col-span-5 space-y-8 transition-all duration-1000 delay-200"
                :class="[
                  visibleProjects.has(project.id)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12',
                  index % 2 !== 0 ? 'lg:order-2' : '',
                ]"
              >
                <!-- Project Number + Role -->
                <div class="flex items-center gap-4">
                  <span
                    class="text-5xl sm:text-6xl font-black text-white/[0.04] leading-none tracking-tighter"
                  >
                    {{ projectNum(index) }}
                  </span>
                  <div>
                    <span
                      class="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400"
                    >
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-gradient-to-r"
                        :class="project.color"
                      ></span>
                      {{ project.role }}
                    </span>
                  </div>
                </div>

                <!-- Title & Subtitle -->
                <div>
                  <h3
                    class="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-3"
                  >
                    {{ project.title }}
                  </h3>
                  <p class="text-lg text-gray-500 font-medium">
                    {{ project.subtitle }}
                  </p>
                </div>

                <!-- Description -->
                <p class="text-gray-400 leading-[1.8] text-[0.9rem]">
                  {{ project.description }}
                </p>

                <!-- Features -->
                <ul class="space-y-3.5">
                  <li
                    v-for="(feature, i) in project.features"
                    :key="i"
                    class="flex items-start gap-3 transition-all duration-700"
                    :class="
                      visibleProjects.has(project.id)
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-6'
                    "
                    :style="{ transitionDelay: `${500 + i * 120}ms` }"
                  >
                    <span
                      class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r"
                      :class="project.color"
                    ></span>
                    <span class="text-sm text-gray-400 leading-relaxed">{{
                      feature
                    }}</span>
                  </li>
                </ul>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2 pt-2">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-1.5 text-[11px] font-medium text-gray-500 transition-all duration-300 hover:border-primary-500/20 hover:text-primary-400 hover:bg-primary-500/[0.04]"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Device Mockup Side (7 cols) -->
              <div
                class="lg:col-span-7 relative transition-all duration-1000 delay-[400ms]"
                :class="[
                  visibleProjects.has(project.id)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-20',
                  index % 2 !== 0 ? 'lg:order-1' : '',
                ]"
                @mousemove="handleMouseMove($event, project.id)"
                @mouseleave="handleMouseLeave(project.id)"
              >
                <!-- Device Stage -->
                <div
                  class="relative flex items-center justify-center min-h-[500px] sm:min-h-[600px]"
                  style="perspective: 1200px"
                >
                  <!-- Ambient glow -->
                  <div
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-br opacity-[0.06] blur-[80px] transition-all duration-700"
                    :class="project.color"
                    :style="getParallax(project.id, 0.3)"
                  ></div>

                  <!-- Secondary ambient -->
                  <div
                    class="absolute top-1/3 left-1/3 h-[200px] w-[200px] rounded-full bg-primary-500/[0.03] blur-[60px] transition-all duration-700"
                    :style="getParallax(project.id, -0.5)"
                  ></div>

                  <!-- Phone Layout with screenshots -->
                  <div
                    v-if="project.screenshots.length > 0"
                    class="relative w-full flex items-center justify-center transition-transform duration-700 ease-out"
                    :style="getDeviceTilt(project.id)"
                  >
                    <!-- Multi-screenshot layout -->
                    <template v-if="project.screenshots.length >= 2">
                      <!-- Left secondary phone -->
                      <div
                        class="hidden md:block absolute z-0 transition-all duration-700 ease-out cursor-pointer"
                        :class="[
                          visibleProjects.has(project.id)
                            ? 'opacity-60 translate-x-0'
                            : 'opacity-0 translate-x-12',
                        ]"
                        style="
                          left: 4%;
                          transform: translateZ(-80px) rotateY(12deg)
                            scale(0.82);
                        "
                        :style="getParallax(project.id, 0.4)"
                        @click="setActive(project.id, 0)"
                      >
                        <div
                          class="transition-all duration-500 hover:scale-105 hover:opacity-90"
                        >
                          <PhoneMockup
                            :screenshot="
                              shot(project, getActive(project) === 0 ? 1 : 0)
                            "
                            :alt="`${project.title} secondary screen`"
                            size="md"
                          />
                        </div>
                        <!-- Reflection -->
                        <div
                          class="mt-2 mx-auto w-[85%] h-[60px] bg-gradient-to-b from-white/[0.02] to-transparent rounded-b-2xl blur-sm"
                        ></div>
                      </div>

                      <!-- Center hero phone -->
                      <div
                        class="relative z-20 transition-all duration-700 ease-out"
                        :class="
                          visibleProjects.has(project.id)
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 translate-y-8 scale-95'
                        "
                        :style="getParallax(project.id, 0.15)"
                      >
                        <div
                          class="transition-all duration-500 hover:-translate-y-2"
                        >
                          <PhoneMockup
                            :screenshot="shot(project, getActive(project))"
                            :alt="`${project.title} main screen`"
                            size="lg"
                          />
                        </div>
                        <!-- Floor shadow -->
                        <div
                          class="mt-4 mx-auto w-[60%] h-6 rounded-full blur-xl bg-gradient-to-r opacity-20"
                          :class="project.color"
                        ></div>
                      </div>

                      <!-- Right secondary phone -->
                      <div
                        class="hidden md:block absolute z-0 transition-all duration-700 ease-out cursor-pointer"
                        :class="[
                          visibleProjects.has(project.id)
                            ? 'opacity-60 -translate-x-0'
                            : 'opacity-0 -translate-x-12',
                        ]"
                        style="
                          right: 4%;
                          transform: translateZ(-80px) rotateY(-12deg)
                            scale(0.82);
                        "
                        :style="getParallax(project.id, 0.4)"
                        @click="
                          setActive(
                            project.id,
                            project.screenshots.length >= 3 ? 2 : 1,
                          )
                        "
                      >
                        <div
                          class="transition-all duration-500 hover:scale-105 hover:opacity-90"
                        >
                          <PhoneMockup
                            :screenshot="
                              shot(
                                project,
                                project.screenshots.length >= 3
                                  ? getActive(project) === 2
                                    ? 1
                                    : 2
                                  : getActive(project) === 1
                                    ? 0
                                    : 1,
                              )
                            "
                            :alt="`${project.title} secondary screen`"
                            size="md"
                          />
                        </div>
                        <!-- Reflection -->
                        <div
                          class="mt-2 mx-auto w-[85%] h-[60px] bg-gradient-to-b from-white/[0.02] to-transparent rounded-b-2xl blur-sm"
                        ></div>
                      </div>
                    </template>

                    <!-- Single screenshot -->
                    <template v-else>
                      <div
                        class="relative z-20 transition-all duration-700 ease-out"
                        :class="
                          visibleProjects.has(project.id)
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 translate-y-8 scale-95'
                        "
                        :style="getParallax(project.id, 0.15)"
                      >
                        <div
                          class="transition-all duration-500 hover:-translate-y-2"
                        >
                          <PhoneMockup
                            :screenshot="shot(project, 0)"
                            :alt="`${project.title} screen`"
                            size="lg"
                          />
                        </div>
                        <div
                          class="mt-4 mx-auto w-[60%] h-6 rounded-full blur-xl bg-gradient-to-r opacity-20"
                          :class="project.color"
                        ></div>
                      </div>
                    </template>
                  </div>

                  <!-- Placeholder for no screenshots (MazGo) -->
                  <div
                    v-else
                    class="relative z-20 transition-all duration-700 ease-out"
                    :class="
                      visibleProjects.has(project.id)
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-95'
                    "
                    :style="getDeviceTilt(project.id)"
                  >
                    <!-- Styled placeholder phone -->
                    <div class="relative mx-auto w-[240px] sm:w-[280px]">
                      <div
                        class="absolute -inset-3 rounded-[3rem] bg-white/[0.02] blur-xl pointer-events-none"
                      ></div>
                      <div
                        class="relative rounded-[2.2rem] bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 p-[3px] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5)]"
                      >
                        <div
                          class="relative rounded-[2.05rem] bg-[#1a1a2e] overflow-hidden"
                        >
                          <div
                            class="absolute top-2.5 left-1/2 z-20 -translate-x-1/2"
                          >
                            <div
                              class="h-[22px] w-[90px] rounded-full bg-black"
                            ></div>
                          </div>
                          <div
                            class="relative overflow-hidden bg-gradient-to-br"
                            :class="project.color"
                            style="aspect-ratio: 9 / 19.5"
                          >
                            <div
                              class="flex h-full items-center justify-center p-10"
                            >
                              <div class="text-center">
                                <div
                                  class="text-6xl mb-5 opacity-90 drop-shadow-lg"
                                >
                                  📱
                                </div>
                                <p
                                  class="text-white text-xl font-bold mb-1 drop-shadow"
                                >
                                  {{ project.title }}
                                </p>
                                <p class="text-white/70 text-sm">
                                  {{ project.subtitle }}
                                </p>
                                <div
                                  class="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-white/90 text-xs font-medium"
                                >
                                  <span
                                    class="h-1.5 w-1.5 rounded-full bg-white animate-pulse"
                                  ></span>
                                  Coming Soon
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="absolute bottom-1.5 left-1/2 z-20 -translate-x-1/2"
                          >
                            <div
                              class="h-[4px] w-[100px] rounded-full bg-white/20"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Floor shadow -->
                    <div
                      class="mt-4 mx-auto w-[60%] h-6 rounded-full blur-xl bg-gradient-to-r opacity-20"
                      :class="project.color"
                    ></div>
                  </div>

                  <!-- Screenshot dots -->
                  <div
                    v-if="project.screenshots.length > 1"
                    class="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 flex items-center gap-2 rounded-full bg-dark-900/80 backdrop-blur-sm border border-white/[0.06] px-3 py-2"
                  >
                    <button
                      v-for="(_, i) in project.screenshots"
                      :key="i"
                      class="h-2 rounded-full transition-all duration-300 focus:outline-none"
                      :class="
                        getActive(project) === i
                          ? 'w-7 bg-gradient-to-r ' + project.color
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      "
                      @click="setActive(project.id, i)"
                      :aria-label="`View screenshot ${i + 1}`"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section divider -->
        <div
          v-if="index < projects.length - 1"
          class="relative h-px mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div
            class="h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
          ></div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.project-showcase {
  will-change: transform, opacity;
}
</style>
