<script>
import Font from "./Font.svelte";
import FONT_DATABASE, { makeGoogleFontsURL } from "./font-database";

let exampleSentence = "ʔux̌u·ʔaƛa·k,  weʔič̓   šuʔuk̓ʷaƛ̓  ɫax̌";
const googleFontsURL = makeGoogleFontsURL();

</script>
<svelte:head>
<link rel="stylesheet" href={googleFontsURL} />
</svelte:head>

<header>
  <h1>Makah Font test</h1>
</header>

<form>
  <label> Sample text: <input bind:value={exampleSentence}></label>
</form>

<main>
  <table>
    <thead>
      <tr>
        <th> Font </th>
        <th> Example </th>
      </tr>
    </thead>
    <tbody>
      {#each FONT_DATABASE as font}
        <Font font={font}>{exampleSentence}</Font>
      {/each}
    </tbody>
  <table>
</main>
