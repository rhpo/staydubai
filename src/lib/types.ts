

export type FormSubmission = {
    id: string;
    name: string;
    created_at: string;
    data: {
        [key: string]: any;
    };
}
