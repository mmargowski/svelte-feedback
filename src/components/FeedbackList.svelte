<script>
  import {FeedbackStore} from "../stores"
  import FeedbackItem from "./FeedbackItem.svelte";
  import {fade, scale} from "svelte/transition"
</script>

{#each $FeedbackStore as fb (fb.id)}
<div in:scale out:fade>
  <FeedbackItem item={fb} />
</div>
{/each}