<script context="module">
  export const prerender = true;
</script>

<script>
	let form = 'Contact';
  let isSubmitting = false;

	function formAction(node) {
		let contactForm = document.getElementsByTagName("form")[0];
		console.log(contactForm);
    let formData = new FormData(contactForm);

		node.addEventListener("submit", (event) => {

		isSubmitting = true;

    return fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
				// note: do something:
				console.log("It works!");
        isSubmitting = false;
        contactForm.reset();
      })
      .catch((error) => {
        console.log(error);
        isSubmitting = false;
      });
		});
	};
</script>

<h1>SvelteKit + Netlify Forms demo
<small>
	- From <a href="https://github.com/sw-yx/sveltekitnodes">https://github.com/sw-yx/sveltekitnodes</a>
</small>
</h1>

<form
use:formAction|preventDefault
name={form}
netlify
netlify-honeypot="gotcha"
class="f5 f4-ns highlight system cf no-clutter">

	<!-- - from: https://docs.netlify.com/forms/setup/#html-forms -->
	<input type="hidden" name="form-name" value={form} />
  <input type="text" name="gotcha" class="visually-hidden" />
	<!-- `name="subject"` only appreas on: app.netlify.com/sites/instantwebapp/settings/forms#form-notifications -->
	<input name="subject" type="hidden" value="{form} inquiry" />

	<div class="mb4">
		<label for="email" class="f6 f5-ns ttu tracked-mega pl3">Address</label>
		<!-- bind:value={email} -->
		<input
		type="email"
		name="email"
		placeholder="your@email.com"
		required
		class=" input-reset br0 bn mt3 pa3 w-100 bg-white-80">

	</div>

	<div class="mb4">
		<label for="message" class="f6 f5-ns ttu tracked-mega pl3">Message</label>
		<!-- bind:value={message} -->
		<textarea
		name="message"
		rows="4"
		placeholder="Your name or business details&hellip;"
		required
		class="min-w-100 mw-100 input-reset br0 bn mt3 pa3 w-100 bg-white-80"></textarea>
		<!-- f5 f5-ns input-reset -->
	</div>

	{#if isSubmitting}
	<pre>Submitting</pre>
	{:else}
	<div class="fr cb cf mb3 mb6-ns mb3-m mb3-l bg-black ma0">
		<input
		class="transition input-reset pointer br0 f6 f5-ns b ph5 pv3 ba bw2-ns b--black white bg-cobalt-80 ttu tracked-mega hover-bg-near-black w-100 db b system"
		type="submit" value="Send">
	</div>
	{/if}
</form>

<style>
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