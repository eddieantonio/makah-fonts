<script>
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
      <tr>
        <td> Andika </td>
        <td style="font-family: Andika;">{exampleSentence}</td>
      </tr>
    </tbody>
  <table>
</main>
