<script>
    /** @type {import('./$types').PageData} */  export let data;
    console.log(data)
  </script>

<div class="my-4">
    <h1 class="text-center text-3xl font-bold">My wonderful blog{data.posts.map(x => x.name)}</h1>
</div>