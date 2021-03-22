<script>
export let font;
</script>

<tr>
  <td>
    {#if font.isDiscouraged }👎🏼{/if}
    {#if font.isTopPick}⭐️{/if}
  </td>
  <td style={font.css}>{font.family}</td>
  <td style={font.css}><slot></slot></td>
</tr>
