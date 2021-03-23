<script>
export let font;
</script>

<tr>
  <td class="text-center">
    {#if font.isDiscouraged }👎🏼{/if}
    {#if font.isTopPick}⭐️{/if}
  </td>
  <td class="py-3" style={font.css}>{font.family}</td>
  <td class="py-3 text-xl" style={font.css}><slot></slot></td>
</tr>
