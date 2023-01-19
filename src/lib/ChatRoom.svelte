<script>
    import { messages } from "./backend";
</script>
<ul>
    {#each $messages as message}
    <li class:optimistic="{message.optimistic}"><strong>{message.author}</strong>: {message.body}</li>
    {/each}
</ul>

<style>
    .optimistic {
        color: gray;
    }
</style>