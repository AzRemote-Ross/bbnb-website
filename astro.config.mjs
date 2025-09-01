import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.bbnb.barbershop', // adjust to actual production domain
  integrations: [
    react(),
    tailwind({ applyBaseStyles: true })
  ]
});
