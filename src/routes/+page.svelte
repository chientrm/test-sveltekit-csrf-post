<div>
	<form method="POST">
		<label>
			<span>First name</span>
			<input type="test" name="first_name" required />
		</label>
		<label>
			<span>Last name</span>
			<input type="test" name="last_name" required />
		</label>
		<input type="submit" value="Save" />
	</form>
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
</style>
