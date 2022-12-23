export type PageData<T> = { data: T };

export type Author = {
	data: {
		id: number;
		attributes: AuthorAttributes;
	};
};

export type AuthorAttributes = {
	blocked: boolean;
	confirmed: boolean;
	createdAt: Date;
	updatedAt: Date;
	displayName: string;
	email: string;
	provider: string;
	username: string;
};

export type Posts = { posts: Post[] };

export type Post = {
	attributes: PostAttributes;
	id: number;
};

export type PostAttributes = {
	author: Author;
	title: string;
	description: string;
	content: string;
	createdAt: Date;
	publishedAt: Date;
	slug: string;
	updatedAt: Date;
};
