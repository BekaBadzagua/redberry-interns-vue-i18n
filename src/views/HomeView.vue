<script setup></script>

<template>
  <div>
    <h1>Simple Translations</h1>

    <ul>
      <li>
        {{ $t("advantages.all_cars_are_checked") }}<br />
        {{ $t("advantages.big_texts.all_cars_are_checked") }}
      </li>
      <li>
        {{ $t("advantages.beast_leasing_offers") }}<br />
        {{ $t("advantages.big_texts.beast_leasing_offers") }}
      </li>
      <li>
        {{ $t("advantages.fully_functional_cars") }}<br />
        {{ $t("advantages.big_texts.fully_functional_cars") }}
      </li>
      <li>
        {{ $t("advantages.one_year_warranty") }}<br />
        {{ $t("advantages.big_texts.one_year_warranty") }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  font-size: 20px;
  margin: 20px;
}
h1 {
  margin-top: 30px;
  text-align: center;
}
</style>
