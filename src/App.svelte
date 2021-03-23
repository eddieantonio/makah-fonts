<script>
import Font from "./Font.svelte";
import FONT_DATABASE, { makeGoogleFontsURL } from "./font-database";
import MAKAH_ALPHABET from "./makah-alphabet";

let exampleSentence;

const googleFontsURL = makeGoogleFontsURL();
const EXAMPLE_SENTENCE = "ʔux̌u·ʔaƛa·k,  weʔič̓   šuʔuk̓ʷaƛ̓  ɫax̌";

changeTextToExample();

function changeTextToAlphabet() {
  exampleSentence = MAKAH_ALPHABET.join('');
}

function changeTextToExample() {
  exampleSentence = EXAMPLE_SENTENCE;
}
</script>

<svelte:head>
<link rel="stylesheet" href={googleFontsURL} />
</svelte:head>

<style>
input {
  font-family: "Times New Roman", "Times", serif;
}
</style>

<header class="mt-8 mx-8 mb-4">
  <h1 class="text-xl">Makah Font test</h1>
</header>

<div class="w-full">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <label> Example text:
      <input
        bind:value={exampleSentence}
        autocomplete="off"
        class="shadow border rounded w-full text-xl py-2 px-3 leading-tight focus:outline-none focus:ring transition"
      >
    </label>

    <button type="button" on:click|preventDefault={changeTextToAlphabet}>Alphabet</button>
    <button type="button" on:click|preventDefault={changeTextToExample}>Example</button>
  </form>
</div>

<main class="shadow rounded border-b border-gray-200 sm:rounded-lg mx-8 mb-8">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" />
        <th scope="col" class="text-left"> Font </th>
        <th scope="col" class="text-left"> Example </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-grat-200">
      {#each FONT_DATABASE as font}
        <Font font={font}>{exampleSentence}</Font>
      {/each}
    </tbody>
  <table>
</main>
