<script setup></script>

<template>
  <div class="wrapper">
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

      <h3>4. Datetime Formatting</h3>
      <p>en - {{ $d(new Date(), "short") }}</p>
      <p>ja-JP - {{ $d(new Date(), "short", "ja-JP") }}</p>
      <p>en - {{ $d(new Date(), "long", "en") }}</p>
      <p>ja-JP - {{ $d(new Date(), "long", "ja-JP") }}</p>

      <h3>5. Number Formatting</h3>
      <p>en - {{ $n(987654321, "currency") }}</p>
      <p>ja-JP - {{ $n(987654321, "currency", "ja-JP") }}</p>

      <p>en - {{ $n(987654321, "currency", { notation: "compact" }) }}</p>
      <p>
        ja-JP -
        {{ $n(987654321, "currency", "ja-JP", { notation: "compact" }) }}
      </p>

      <p>en - {{ $n(0.99123, "percent") }}</p>
      <p>ja-JP - {{ $n(0.99123, "percent") }}</p>

      <p>en - {{ $n(987654321.123123, "decimal") }}</p>
      <p>ja-JP - {{ $n(987654321.123123, "decimal", "ja-JP") }}</p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 40rem;
}
</style>
