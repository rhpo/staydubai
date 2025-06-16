// src/routes/+page.server.ts
import type { PageServerLoad } from './$types';
import {NETLIFY_TOKEN as token, NETLIFY_SITE_ID as siteId} from '$env/static/private';



export const load: PageServerLoad = async () => {
	// const formName = process.env.NETLIFY_FORM_NAME;

	// 1. Fetch all forms to get the form ID of 'contact'
	const formRes = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/forms`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});
	const forms = await formRes.json();

	if (!forms) {
		console.error('Forms not found');
		return { submissions: [] };
	}

    return forms;

};
