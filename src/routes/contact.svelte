<script context="module">
	export const prerender = true; //
</script>

<svelte:head>
	<title>SvelteKit</title>
</svelte:head>

<script>
//let pattern = "^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$";

let email;
let message;
let success_boolean = false;

const handleSubmit = () => {

	let netlifyForm = document.getElementById('netlify-form');

	if (netlifyForm) {
		const serialize = function (form) {
			var field,
				l,
				s = [];

			if (typeof form == 'object' && form.nodeName == 'FORM') {
				var len = form.elements.length;

				for (var i = 0; i < len; i++) {
					field = form.elements[i];
					if (
						field.name &&
						!field.disabled &&
						field.type != 'button' &&
						field.type != 'file' &&
						field.type != 'hidden' &&
						field.type != 'reset' &&
						field.type != 'submit'
					) {
						if (field.type == 'select-multiple') {
							l = form.elements[i].options.length;

							for (var j = 0; j < l; j++) {
								if (field.options[j].selected) {
									s[s.length] = encodeURIComponent(field.name) + '=' + encodeURIComponent(field.options[j].value);
								}
							}
						} else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
							s[s.length] = encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value);
						}
					}
				}
			}
			return s.join('&').replace(/%20/g, '+');
		};
		netlifyForm.addEventListener('submit', (e) => {
			e.preventDefault();

			const theForm = e.currentTarget;
			const formData = 'form-name=' + theForm.name + '&' + serialize(theForm);
			const options = {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: formData
			};

			fetch('/', options)
				.then(function (response) {
					// note: do something: window.location.assign(theForm.action);
					success_boolean = true;
				})
				.catch(function (error) {
					console.log(error);
				});
		});
	}
}

</script>

<h1>SvelteKit + Netlify Forms demo
<small>
	- From <a href="https://github.com/sw-yx/sveltekitnetlifyforms">https://github.com/sw-yx/sveltekitnetlifyforms</a>
</small>
</h1>
<!-- "/src/routes/test-form.svelte" -->
<form
id="netlify-form"
on:submit|preventDefault={handleSubmit}
accept-charset=utf-8
method=POST enctype="application/x-www-form-urlencoded"
class="f5 f4-ns highlight system cf no-clutter"
name="contact"
netlify-honeypot="gotcha"
netlify>
<!-- action="/done.html" // form data-netlify="true" -->
<!-- For each detected tag, it sets up a dedicated "form" which is pretty much an append-only schemaless document store of all submissions.
		- from: swyx.io/sveltekit-netlify-forms/
-->


<input type="hidden" name="form-name" value="contact" />
<!-- - from: https://docs.netlify.com/forms/setup/#html-forms -->

	<input name="subject" type="hidden" value="InstantWebapp inquiry" />
	<input name="gotcha" class="visually-hidden" />
	<div class="mb4">
		<label for="email" class="f6 f5-ns ttu tracked-mega pl3">Address</label>
		<!-- simple client-side html form validation using email pattern: stackoverflow.com/questions/19605773/html5-email-validation/57993606#57993606
		unable to pass: `pattern={pattern}`
		-->
		<input bind:value={email} type="email" name="email" class=" input-reset br0 bn mt3 pa3 w-100 bg-white-80" placeholder="your@email.com" required>

	</div>

	<div class="mb4">
		<label for="message" class="f6 f5-ns ttu tracked-mega pl3">Message</label>
		<textarea
		bind:value={message}
		class="min-w-100 mw-100 input-reset br0 bn mt3 pa3 w-100 bg-white-80"
		id="message"
		name="message"
		rows="4"
		placeholder="Your name or business details&hellip;"
		required></textarea>
		<!-- f5 f5-ns input-reset -->
	</div>

	{#if !success_boolean}
	<div class="fr cb cf mb3 mb6-ns mb3-m mb3-l bg-black ma0">
		<input
		class="transition input-reset pointer br0 f6 f5-ns b ph5 pv3 ba bw2-ns b--black white bg-cobalt-80 ttu tracked-mega hover-bg-near-black w-100 db b system"
		type="submit" value="Send">
	</div>
	{/if}
	{#if success_boolean}✅{/if}
</form>



<!--style>
/*
<form accept-charset="utf-8" method="POST" enctype="application/x-www-form-urlencoded" class="f5 f4-ns highlight" name="contact" action="/done"><input type="hidden" name="form-name" value="contact">
    <input name="subject" type="hidden" value="Change Artisan">
    <input name="gotcha" class="dn">
    <div class="mb4">
      <label for="email" class="f6 f5-ns ttu gray tracked b system pl3">Address</label>
      <input type="email" name="email" id="email" class="input-reset br0 bn pa3 w-100 bg-white-90" placeholder="your@email.com" pattern="[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" required="">
    </div>

    <div class="mb4">
      <label for="message" class="f6 f5-ns ttu gray tracked b system pl3 ">Message</label>
      <textarea class="input-reset br0 bn pa3 mw-100 bg-white-90" id="message" name="message" rows="4" placeholder="I'd like to take a course with Alessandro, " style="min-width:100%;" required=""></textarea>
    </div>
    <div class="fr cb cf mb3 mb6-ns">
      <input class="input-reset pointer mv2 br0 f6 f5-ns b ph5 pv3 ba bw2-ns b--black white bg-dark-gray ttu tracked-mega hover-bg-near-black w-100 db b system" type="submit" value="Send">
    </div>
  </form>
*/
</style-->
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