/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: { fetch: any }) {
	const res = await fetch('http://127.0.0.1:1337/api/posts?populate=*');
	const response = await res.json();
	return { posts: response.data };
}
