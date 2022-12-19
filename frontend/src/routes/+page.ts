/** @type {import('$lib/types').Posts} */
export async function load({ fetch }: { fetch: any }) {
	const res = await fetch('http://127.0.0.1:1337/api/posts?populate=*');
	const response = await res.json();
	console.log(response);
	return { posts: response.data };
}
