import type { Action } from '@sveltejs/kit';

export const POST: Action = async ({ request }) => {
	const form = await request.formData().then((formData) => ({
		first_name: formData.get('first_name')! as string,
		last_name: formData.get('last_name')! as string
	}));
	console.log(form);
};
