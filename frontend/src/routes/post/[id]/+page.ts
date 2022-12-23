/** @type {import('$lib/types').Posts} */
export async function load({ params, fetch }: { params: any; fetch: any }) {
	const res = await fetch(`http://127.0.0.1:1337/api/posts/${params.id}?populate=*`);
	const response = await res.json();
	console.log(response);
	return { post: response.data };
}
