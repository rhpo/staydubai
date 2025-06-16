<script lang="ts">
	import Form from '$lib/components/Form.svelte';

	function submit(event: Event) {
		event.preventDefault();

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const name = formData.get('name') as string;
		const age = formData.get('age') as string;

		if (!name || !age) {
			alert('Please fill in all fields.');
			return;
		}

		const encoded = new URLSearchParams();
		encoded.append('form-name', 'contact');
		encoded.append('name', name);
		encoded.append('age', age);

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

<Form onSubmit={submit} name="humans">
	<input type="text" name="name" placeholder="Enter your name" required />
	<input type="number" name="age" placeholder="Enter your age" required />
	<button type="submit">Submit</button>
</Form>

<a href="/humans">Goto /Values</a>

<hr />
<p>Admin:</p>
<a href="./view">Goto /View</a>
