<script lang="ts">
	export let name = '';
	export let onSubmit = (e: Event) => {
		e.preventDefault();
	};
</script>

<form {name} data-netlify="true" data-netlify-honeypot="bot-field" on:submit={onSubmit}>
	<!-- Required hidden fields -->
	<input type="hidden" name="form-name" value={name} />
	<input type="hidden" name="bot-field" />

	<!-- Your actual fields -->
	<slot />
</form>
