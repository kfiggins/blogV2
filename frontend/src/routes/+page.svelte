<script>
    /** @type {import('$lib/types').Posts} */  export let data;
  </script>

{#each data.posts as post}
<div class="my-4">
    <h1 class="text-center text-3xl font-bold"></h1>
    <h3>{post.attributes.title}</h3>
    <h5>By: {post.attributes.author.data.attributes.displayName}</h5>
    <p>{post.attributes.content}</p>
</div>
{/each}