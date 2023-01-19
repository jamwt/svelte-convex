<script>
    import { addMessage } from "./backend";
    let author = '';
    let body = '';


    function handleClick(event) {
        addMessage(author, body);
    }
</script>

<input bind:value={author} />
<input bind:value={body} />
<button on:click={handleClick}>Submit</button>