// src/routes/+page.server.ts
import type { PageServerLoad } from './$types';
import {NETLIFY_TOKEN as token, NETLIFY_SITE_ID as siteId} from '$env/static/private';
import type { FormSubmission } from '$lib/types';


export const load: PageServerLoad = async ({ params }) => {
    const formName = params.id;

    if (!formName) {
        console.error('Form name is required');
        return { submissions: [] };
    }

    // 1. Fetch all forms to get the form ID of 'contact'
    const formRes = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/forms`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const forms = await formRes.json();
    const form = forms.find((f: FormSubmission) => f.name === formName);

    if (!form) {
        console.error('Form not found');
        return { submissions: [] };
    }

    // 2. Fetch submissions for the form
    const submissionsRes = await fetch(
        `https://api.netlify.com/api/v1/forms/${form.id}/submissions`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    const submissions = await submissionsRes.json();

    return {
        submissions
    };
};
