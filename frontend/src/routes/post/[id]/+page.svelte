<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown'
    import type {Post} from '$lib/types';
    export let data;
    export let post: Post = data.post;
    let content = post.attributes.content;
</script>

<div class="my-12 container">
    <a href="/" class="text-3xl">{`<`}</a>
    <h1 class="text-center text-3xl font-bold">{post.attributes.title}</h1> 
    <div class="my-8">
        <SvelteMarkdown  source={content}/>
    </div>
</div>