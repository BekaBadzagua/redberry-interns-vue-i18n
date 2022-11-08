<script setup></script>

<template>
  <div>
    <div class="centered">
      <h2>Advanced Translations</h2>

      <h3>1. Named Interpolation</h3>
      <p>{{ $t("advanced.hello", { name: "Denji" }) }}</p>

      <h3>2. List Interpolation</h3>
      <p>
        {{
          $t("advanced.best_captains", [
            "Sōsuke Aizen",
            "Kenpachi Zaraki",
            "Mayuri Kurotsuchi",
            "Shunsui Kyōraku",
            "Gin Ichimaru",
          ])
        }}
      </p>
      <p>
        learn more about interpolation here:
        <a href="https://vue-i18n.intlify.dev/guide/essentials/syntax.html"
          >link</a
        >
      </p>

      <h3>3. Pluralization</h3>

      <p>0 - {{ $tc("advanced.apple", 0) }}</p>
      <p>1 - {{ $tc("advanced.apple", 1) }}</p>
      <p>2 - {{ $tc("advanced.apple", 7) }}</p>
      <p>
        learn more about pluralization here:
        <a
          href="https://vue-i18n.intlify.dev/guide/essentials/pluralization.html"
          >Link</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped></style>
