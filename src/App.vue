<template>
  <div class="flex flex-col space-y-3">
    <img src="/four0four.jpg" alt="4o4-temp" class="w-[250px] rounded-xl" />
    <Skeleton class="h-[96px] w-[250px] rounded-xl" />
    <div class="space-y-2">
      <Skeleton class="h-4 w-[250px]" />
      <Skeleton class="h-4 w-[200px]" />
    </div>

    <p class="w-[240px] font-mono text-xs">
      La page que vous cherchez semble nous avoir filé entre les pattes. Elle
      fait peut-être une sieste dans un coin oublié de notre site web.
      <span class="font-bold">Revenez plus tard !</span>
    </p>
    <div class="font-mono text-xs">
      <a href="https://www.facebook.com/lesPetitsClochards/" target="_blank">
        <Badge>Facebook des Petits Clochards</Badge>
      </a>
    </div>

    <div class="font-mono text-xs">
      <a href="mailto:hello@lespetitsclochards.fr" target="_blank">
        <Badge>hello@lespetitsclochards.fr</Badge>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
</script>

<style lang="scss">
body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
