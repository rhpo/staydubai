<script lang="ts">
	import type { FormSubmission } from '$lib/types';

	export let data: FormSubmission[] = [];
</script>

{#if data.length > 0}
	<ul>
		{#each data as item}
			<li>
				<a href="./{item.id}">
					<strong>ID:</strong>{item.id},
					<strong>Name:</strong>
					{item.name}
				</a>
			</li>
		{/each}
	</ul>
{:else}
	<p>No submissions yet.</p>
{/if}
