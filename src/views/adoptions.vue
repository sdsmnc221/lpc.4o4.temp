<template>
  <div class="adoptions flex flex-col space-y-3 p-8">
    <img
      src="/voyage-del-accuel.jpg"
      alt="Le voyage de l'accueil"
      class="w-[720px] md:w-[320px] rounded-xl"
    />

    <div class="m-auto flex flex-col space-y-3 w-72">
      <p class="font-mono text-xs mt-4">
        <span class="font-bold">
          Nous ne sommes ni un refuge ni une SPA, mais une association avec des
          moyens limités.
        </span>
      </p>

      <p class="font-mono text-xs mt-2">
        Nos chats s'épanouissent dans un réseau limité de familles d'accueil
        dévouées. Nous accueillons aussi plusieurs dizaines de chats très
        craintifs dans un environnement adapté.
      </p>

      <p class="font-mono text-xs mt-2">
        Si vous avez l'amour et la patience nécessaires pour offrir un foyer à
        l'un de nos petits protégés,
        <span class="font-bold">contactez-nous</span>. Nous vous guiderons dans
        cette belle aventure de confiance et d'amour.
      </p>

      <div class="font-mono text-xs">
        <a href="tel:+33642804318" target="_blank">
          <Badge>06 42 80 43 18 (Mme Bonniot)</Badge>
        </a>
      </div>

      <div class="font-mono text-xs">
        <a
          href="https://lespetitsclochards.fillout.com/pre-adoption"
          target="_blank"
        >
          <Badge>Formulaire pour préavis d'adoption (sans stresse !)</Badge>
        </a>
      </div>

      <div class="font-mono text-xs">
        <a href="mailto:lespetitsclochards91@gmail.com" target="_blank">
          <Badge>lespetitsclochards91@gmail.com</Badge>
        </a>
      </div>

      <div class="font-mono text-xs">
        <a
          href="https://lespetitsclochards.fillout.com/chatmille-accueil"
          l
          target="_blank"
        >
          <Badge>Devenons Chat'mille d'Accueil</Badge>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Badge } from "@/components/ui/badge";
</script>

<style lang="scss" scoped></style>
