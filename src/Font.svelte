<script>
export let font;
</script>

<style>
:root{
  --emoji-width: 3em;
  --family-name-width: 12em;
  --sample-width: calc(100% - var(--emoji-width) - var(--family-name-width));
}

.emoji { width: var(--emoji-width) }
.family-name { width: var(--family-name-width) }
.sample { width: var(--sample-width) }
.sample-text {
  max-width: var(--sample-width);
}

.emoji, .family-name {
  vertical-align: top;
}
</style>

<tr>
  <td class="text-center emoji py-3">
    {#if font.isDiscouraged }👎🏼{/if}
    {#if font.isTopPick}⭐️{/if}
  </td>
  <td class="family-name py-3" style={font.css}>{font.family}</td>
  <td class="sample py-3 content">
    <p style={font.css} class="text-xl sample-text break-all"><slot></slot></p>
    {#if font.isDiscouraged}
    <details>
      <summary class="cursor-pointer">
        <span class="border-0 border-dotted border-b-2 ">Why</span>
      </summary>
      <ul class="list-disc ml-5">
        {#each font.comments as comment}
        <li>{comment}</li>
        {/each}
      </ul>
    </details>
    {/if}
  </td>
</tr>
