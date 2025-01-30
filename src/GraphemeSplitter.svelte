<script>
import GraphemeSplitter from './vendor/grapheme-splitter';
export let text;

const splitter = new GraphemeSplitter();
</script>

{#each splitter.splitGraphemes(text) as cluster}<span>{ cluster }</span>{/each}
