<script context="module">
  export const prerender = true;
</script>

<script>
	let form;
	let name = 'Contact';
	let submitted = false;
  let isSubmitting = false;
	//let id = `${String.fromCharCode(Math.floor((Math.random() * 26))+64).toLowerCase()}${String.fromCharCode(Math.floor((Math.random() * 26))+64).toLowerCase()}` //console.log(`${String.fromCharCode(num0+64).toLowerCase()}${String.fromCharCode(num1+64).toLowerCase()}`) // -from: stackoverflow.com/questions/36129721/convert-number-to-alphabet-letter

	//console.log(id)
	// let id = Math.floor((Math.random() * 26) + 9).toString(36);// from: stackoverflow.com/a/36129812


	const handleSubmit = (event) => {

		//let form = form; // document.getElementById(`${id}`) // returns a single element. As opposed to: `document.querySelectorAll("form")[0]`;
		let formData = new FormData(form);

		isSubmitting = true;

		return fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString(),
		})
			.then(() => {
				// note: do something:
				console.log("Form submitted!");
				submitted = true;
				isSubmitting = false;
			})
			.finally(() => {
				// note: do something: form.reset();
				console.log("It works!");
			})
			.catch((error) => {
				console.log(error);
				isSubmitting = false;
			});
		};
</script>

<h1>SvelteKit + Netlify Forms demo
<small>
	- From <a href="https://github.com/sw-yx/sveltekitnodes">https://github.com/sw-yx/sveltekitnodes</a>
</small>
</h1>

<form
on:submit|preventDefault={handleSubmit}
bind:this={form}
name={name}
netlify
netlify-honeypot="gotcha"
class="f5 f4-ns highlight system cf no-clutter">
{#if !submitted}
	<!-- - from: https://docs.netlify.com/forms/setup/#html-forms -->
	<input type="hidden" name="form-name" value={name} />
  <input type="text" name="gotcha" class="visually-hidden" />
	<!-- `name="subject"` only appreas on: app.netlify.com/sites/instantwebapp/settings/forms#form-notifications -->
	<input name="subject" type="hidden" value="{name} inquiry" />

	<div class="mb4">
		<label for="email" class="f6 f5-ns ttu tracked-mega pl3">Address</label>
		<!-- bind:value={email} -->
		<input
		type="email"
		name="email"
		placeholder="your@email.com"
		required
		class=" input-reset br0 bw1 b--transparent mt3 pa3 w-100 bg-white-80">

	</div>

	<div class="mb4">
		<label for="message" class="f6 f5-ns ttu tracked-mega pl3">Message</label>
		<!-- bind:value={message} -->
		<textarea
		name="message"
		rows="4"
		placeholder="Your name or business details&hellip;"
		required
		class="min-w-100 mw-100 input-reset br0 bw1 b--transparent mt3 pa3 w-100 bg-white-80"></textarea>
		<!-- f5 f5-ns input-reset -->
	</div>

	<div class="fr cb cf mb3 mb6-ns mb3-m mb3-l bg-black ma0">
		<input
		class="{ isSubmitting ? "no-select" : "pointer" } transition input-reset br0 f6 f5-ns b ph5 pv3 ba bw2-ns b--black white ttu tracked-mega hover-bg-near-black w-100 db b system"
		type="submit" value="Send">
	</div>

{:else}
<pre>Good one! Thank you, we'll reply to your message soon.</pre>
{/if}
</form>

<style>
	*:focus, *:active {
		border-color:black;
		transition: border-color 333ms ease-out;
	}
	/* NOT Inclusively Hidden: css-tricks.com/inclusively-hidden/ */
	.visually-hidden {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	.min-w-100 {
		min-width: 100%
	}

	/* DEBUG: MOVE THIS TO MAIN CSS
	@media screen and (min-width: 30em) {
		.min-w-100-ns {
			min-width: 100%
		}
	}

	@media screen and (min-width: 30em) and (max-width: 60em) {
		.min-w-100-m {
			min-width: 100%
		}
	}

	@media screen and (min-width: 60em) {
		.min-w-100-l {
			min-width: 100%
		}
	}*/
</style>