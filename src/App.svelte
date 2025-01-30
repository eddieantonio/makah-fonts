<script>
import Font from "./Font.svelte";
import GraphemeSplitter from "./GraphemeSplitter.svelte";
import FONT_DATABASE from "./font-database";
import { CHARACTER_SET, ALPHABET } from "./makah-alphabet";

let writingSample;

// HACK: this **should** call makeGoogleFontsURL() but that yields a 403
// response if given a Referer: header... for some reason?
const googleFontsURL = "./fonts.css";

// This is a meaningless sentence in Makah, but it does present some common
// problem characters, such as «ʔ», «x̌», «ƛ̓», «ɫ», and «č̓».
// A rough translation is "Hello, he is sleeping, I will see you" 🥴
const EXAMPLE_SENTENCE = "ʔux̌u·ʔaƛa·k,  weʔič̓   šuʔuk̓ʷaƛ̓  ɫ, serifax̌";

const COMMON_PROBLEM_CHARACTERS = "ʔ x̌ č̓  k̓ʷ ƛ̓ ɫ ŋ";

changeTextToExample();

function changeTextToCharacterSet() {
  writingSample = CHARACTER_SET.join('');
}

function changeTextToAlphabet() {
  writingSample = ALPHABET;
}

function changeTextToExample() {
  writingSample = EXAMPLE_SENTENCE;
}

function changeTextToProblemChars() {
  writingSample = COMMON_PROBLEM_CHARACTERS;
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

<div class="w-full shadow-md pb-2 my-6 px-8">
  <form class="mb-4">
    <label> Example text:
      <input
        bind:value={writingSample}
        autocomplete="off"
        class="shadow border rounded w-full text-xl py-2 px-3 leading-tight focus:outline-none focus:ring transition"
      >
    </label>

    <fieldset>
      <button type="button" on:click={changeTextToExample}
        class="my-2 bg-blue-500 focus:bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring"
        >Example sentence</button>
      <button type="button" on:click={changeTextToAlphabet}
        class="my-2 bg-blue-500 focus:bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring"
        >Alphabet</button>
      <button type="button" on:click={changeTextToCharacterSet}
        class="my-2 bg-blue-500 focus:bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring"
        >Full character set</button>
      <button type="button" on:click={changeTextToProblemChars}
        class="my-2 bg-blue-500 focus:bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring"
        >Common problem characters</button>
    </fieldset>
  </form>

  <aside class="mb-4 text-sm">
    <h2 class="font-bold mb-2"> Glossary </h2>
    <dl>
      <dt class="ml-1">👎🏼</dt>
      <dd class="ml-8"> Font is discouraged. See "why" for an explanation. </dd>
      <dt class="ml-1">⭐️</dt>
      <dd class="ml-8"> Font is a <strong>top-pick</strong>. You should use this font! </dd>
    </dl>
  </aside>
</div>

<main class="w-full overflow-y-hidden box-border">
  <div class="mx-8 mb-8">
    <table class="min-w-full shadow rounded border-b border-gray-200 divide-y divide-gray-200 rounded-lg">
      <colgroup>
        <col span="1" style="width: 3em">
        <col span="1" style="width: max-content">
        <col span="1">
      </colgroup>

      <thead class="bg-gray-50">
        <tr>
          <th scope="col" />
          <th scope="col" class="text-left"> Font </th>
          <th scope="col" class="text-left"> Example </th>
        </tr>
      </thead>

      <tbody class="bg-white divide-y divide-grat-200">
        {#each FONT_DATABASE as font}
          <Font font={font}><GraphemeSplitter text={writingSample} /></Font>
        {/each}
      </tbody>
    <table>
  </div>
</main>
