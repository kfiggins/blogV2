<script>
    /** @type {import('$lib/types').Posts} */  export let data;
  </script>

<div class="container mt-8">
  {#each data.posts as post}
  <div class="my-4">
      <a href={`/post/${post.id}`}><h3>{post.attributes.title}</h3></a>
      <p>{post.attributes.description}</p>
    </div>
  {/each}
</div>