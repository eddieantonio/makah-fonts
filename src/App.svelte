<script>
import Font from "./Font.svelte";

let exampleSentence = "ʔux̌u·ʔaƛa·k,  weʔič̓   šuʔuk̓ʷaƛ̓  ɫax̌"
</script>

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
      <Font fontName="Andika">{exampleSentence}</Font>
      <Font fontName="Times">{exampleSentence}</Font>
      <Font fontName="Comic Sans MS">{exampleSentence}</Font>
      <Font fontName="Tahoma">{exampleSentence}</Font>
      <Font fontName="Calibri">{exampleSentence}</Font>
      <Font fontName="Lucida Sans Unicode">{exampleSentence}</Font>
      <Font fontName="Papyrus">{exampleSentence}</Font>
      <Font fontName="Trebuchet MS">{exampleSentence}</Font>
      <Font fontName="Montserrat">{exampleSentence}</Font>
      <Font fontName="Cambria">{exampleSentence}</Font>
    </tbody>
  <table>
</main>
