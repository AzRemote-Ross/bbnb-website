import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://www.bbnb.barbershop', // adjust to actual production domain
  integrations: [
    react(),
    tailwind({ applyBaseStyles: true })
  ]
});
