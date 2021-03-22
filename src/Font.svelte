<script>
export let font;
</script>

<svelte:head>
{#if font.isAvailableOnGoogleFonts}
  <link rel="stylesheet" href={font.googleFontsURL} />
{/if}
</svelte:head>

<tr style={font.css}>
  <td>{font.family}</td>
  <td><slot></slot></td>
</tr>
