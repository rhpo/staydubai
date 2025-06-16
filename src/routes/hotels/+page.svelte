<script lang="ts">
	import Form from '$lib/components/Form.svelte';

	function submit(event: Event) {
		event.preventDefault();

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const value1 = formData.get('value1') as string;
		const value2 = formData.get('value2') as string;

		if (!value1 || !value2) {
			alert('Please fill in all fields.');
			return;
		}

		const encoded = new URLSearchParams();
		encoded.append('form-name', 'contact');
		encoded.append('value1', value1);
		encoded.append('value2', value2);

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encoded.toString()
		})
			.then(() => {
				alert('Form submitted!');
				form.reset();
			})
			.catch((error) => {
				alert('Submission failed.');
				console.error(error);
			});
	}
</script>

<Form onSubmit={submit} name="value-form">
	<input type="text" name="value1" placeholder="Enter value 1" required />
	<input type="text" name="value2" placeholder="Enter value 2" required />
	<button type="submit">Submit</button>
</Form>
