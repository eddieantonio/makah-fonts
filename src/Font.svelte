<script>
export let font;
</script>

<tr style={font.css}>
  <td>{font.family}</td>
  <td><slot></slot></td>
</tr>
