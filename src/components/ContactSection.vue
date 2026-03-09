<script setup lang="ts">
import { ref } from "vue";
import { aboutMe } from "@/data/portfolio";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1000));
  isSubmitting.value = false;
  isSubmitted.value = true;
  form.value = { name: "", email: "", message: "" };

  setTimeout(() => {
    isSubmitted.value = false;
  }, 3000);
};
</script>

<template>
  <section id="contact" class="py-20 sm:py-28 bg-dark-800/50">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Get In <span class="text-primary-400">Touch</span>
        </h2>
        <div class="mx-auto h-1 w-16 rounded-full bg-primary-500"></div>
        <p class="mt-4 text-gray-400 max-w-lg mx-auto">
          Have a project in mind or want to work together? Feel free to reach
          out!
        </p>
      </div>

      <div class="grid gap-12 md:grid-cols-2">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h3 class="mb-6 text-xl font-semibold text-white">
              Let's build something great together!
            </h3>
            <p class="text-gray-400 leading-relaxed">
              I'm always open to discussing new projects, mobile app
              development, or opportunities to be part of your team. Whether you
              need a mobile engineer or want to collaborate on an exciting
              product — let's connect!
            </p>
          </div>

          <!-- Contact Cards -->
          <div class="space-y-4">
            <div
              class="flex items-center gap-4 rounded-xl bg-dark-800 border border-white/5 p-4"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-400"
              >
                <svg
                  class="h-5 w-5"
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
              </div>
              <div>
                <p class="text-sm text-gray-500">Email</p>
                <a
                  :href="'mailto:' + aboutMe.email"
                  class="text-sm font-medium text-white hover:text-primary-400 transition-colors"
                >
                  {{ aboutMe.email }}
                </a>
              </div>
            </div>

            <div
              class="flex items-center gap-4 rounded-xl bg-dark-800 border border-white/5 p-4"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-400"
              >
                <svg
                  class="h-5 w-5"
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
              </div>
              <div>
                <p class="text-sm text-gray-500">Location</p>
                <p class="text-sm font-medium text-white">
                  {{ aboutMe.location }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <form @submit.prevent="handleSubmit" class="space-y-5">
          <div>
            <label
              for="name"
              class="mb-2 block text-sm font-medium text-gray-300"
              >Name</label
            >
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              placeholder="Your name"
              class="w-full rounded-xl bg-dark-800 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            />
          </div>

          <div>
            <label
              for="email"
              class="mb-2 block text-sm font-medium text-gray-300"
              >Email</label
            >
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="your@email.com"
              class="w-full rounded-xl bg-dark-800 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            />
          </div>

          <div>
            <label
              for="message"
              class="mb-2 block text-sm font-medium text-gray-300"
              >Message</label
            >
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              placeholder="Tell me about your project..."
              class="w-full resize-none rounded-xl bg-dark-800 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full rounded-xl bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-500 hover:shadow-primary-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isSubmitting" class="inline-flex items-center gap-2">
              <svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              Sending...
            </span>
            <span v-else>Send Message</span>
          </button>

          <!-- Success Message -->
          <Transition
            enter-active-class="transition duration-300"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-if="isSubmitted"
              class="rounded-xl bg-green-500/10 border border-green-500/20 p-4 text-center"
            >
              <p class="text-sm font-medium text-green-400">
                ✓ Message sent successfully! I'll get back to you soon.
              </p>
            </div>
          </Transition>
        </form>
      </div>
    </div>
  </section>
</template>
