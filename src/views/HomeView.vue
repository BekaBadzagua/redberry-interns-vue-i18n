<script setup></script>

<template>
  <div class="wrapper">
    <div class="centered">
      <h2>Simple Translations</h2>

      <p>
        example: <br />
        <span class="blue">advantages2.</span>
        <span class="green">all_cars_are_checked</span> <br />
        <span class="blue">advantages2.</span
        ><span class="red">big_texts.</span>
        <span class="green">all_cars_are_checked.body</span>
      </p>
    </div>
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
    <div class="centered">
      <h2>Simple Translations - version 2</h2>
      <p>
        example: <br />
        <span class="blue">advantages2.</span>
        <span class="green">all_cars_are_checked.</span>
        <span class="red">title</span> <br />
        <span class="blue">advantages2.</span>
        <span class="green">all_cars_are_checked.</span>
        <span class="red">body</span>
      </p>
    </div>
    <ul>
      <li>
        {{ $t("advantages2.all_cars_are_checked.title") }}<br />
        {{ $t("advantages2.all_cars_are_checked.body") }}
      </li>
      <li>
        {{ $t("advantages2.beast_leasing_offers.title") }}<br />
        {{ $t("advantages2.beast_leasing_offers.body") }}
      </li>
      <li>
        {{ $t("advantages2.fully_functional_cars.title") }}<br />
        {{ $t("advantages2.fully_functional_cars.body") }}
      </li>
      <li>
        {{ $t("advantages2.one_year_warranty.title") }}<br />
        {{ $t("advantages2.one_year_warranty.body") }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.centered {
  text-align: center;
  font-size: 18px;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
.green {
  color: green;
}
li {
  font-size: 20px;
  margin: 20px;
}
h1 {
  margin-top: 30px;
  text-align: center;
}
.wrapper {
  width: 56rem;
}
</style>
