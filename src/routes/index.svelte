<!-- <script context="module">
	export const prerender = true; //
</script> -->



<svelte:head>
	<title>SvelteKit</title>

	<!-- <link rel="manifest" href="/manifest.json" />
	<meta name="description" content="PWA starter" />
	<meta name="theme-color" content="#2F3BA2" />

	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	<meta name="apple-mobile-web-app-title" content="PWA starter" />
	<link rel="apple-touch-icon" href="/images/icons/icon-152x152.png" />

	<link rel="icon" type="image/png" href="/favicon.png" /> -->
	<!--
		<link rel="stylesheet" href="/global.css" />
		<link rel="stylesheet" href="/build/bundle.css" />
		<script defer src="/build/bundle.js"></script>
	-->
</svelte:head>

<!--script>
//let pattern = "^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$";
let form = 'Contact';
let email;
let message;

let submission = "";
let error = "";

const submitForm = async() => {
	try {
		const submit = await fetch("/");

	const data = await submit.json();

	//console.log(data)

	submission = data;

	} catch(err) {
		error = err;
	}
}

//on:submit|preventDefault={submitForm}
</script-->

<script>
import { onMount } from 'svelte';
let root;
let form = 'Contact';
let email;
let message;

// `getElementsByTagName(selector)` or `getElementsByClassName(selector)`  returns a HTMLCollection of elements only. It is considered "live", meaning... ?
// `querySelectorAll(selector)` returns a HTMLCollection elements only. It returns a "static" list of CSS selectors.

// onMount(() => {
// 		const netlifyForm = root.querySelectorAll(`${form.toLowercase}`);
// 		console.log(netlifyForm) // returns `NodeList []`
// 		netlifyForm.style.backgroundColor = "red";
// });

function formAction(node) {

	if (node) {
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
		node.addEventListener('submit', (e) => {
			e.preventDefault();

			const node = e.currentTarget;
			const formData = 'form-name=' + node.name + '&' + serialize(node);
			const options = {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: formData
			};

			fetch('/', options)
				.then(function (response) {
					// note: do something:
					window.location.assign(node.action);
					//success_boolean = true;
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
	- From <a href="https://github.com/sw-yx/sveltekitnodes">https://github.com/sw-yx/sveltekitnodes</a>
</small>
</h1>




<!-- note: <pre>{JSON.stringify(submission)}</pre> -->

<!-- {#if !submission && !error} -->
<!-- on:submit|preventDefault={submitForm} -->
<!--
	id="{form.toLowerCase()}"
	action="#{form.toLowerCase()}"
	 -->
<form
	use:formAction
	name={form}
	action="/"
	netlify-honeypot="gotcha"
	netlify
	class="f5 f4-ns highlight system cf no-clutter">

	<input type="hidden" name="form-name" value={form} />
	<!-- - from: https://docs.netlify.com/forms/setup/#html-forms -->

		<!-- `name="subject"` only appreas on: app.netlify.com/sites/instantwebapp/settings/forms#form-notifications -->
		<input name="subject" type="hidden" value="InstantWebapp inquiry" />
		<input name="gotcha" class="visually-hidden" />
		<div class="mb4">
			<label for="email" class="f6 f5-ns ttu tracked-mega pl3">Address</label>
			<!-- simple client-side html form validation using email pattern: stackoverflow.com/questions/19605773/html5-email-validation/57993606#57993606
			unable to pass: `pattern={pattern}`
			-->

			<input
			bind:value={email}
			type="email"
			name="email"
			placeholder="your@email.com"
			required
			class=" input-reset br0 bn mt3 pa3 w-100 bg-white-80">

		</div>

		<div class="mb4">
			<label for="message" class="f6 f5-ns ttu tracked-mega pl3">Message</label>
			<!--  -->
			<textarea
			bind:value={message}
			name="message"
			rows="4"
			placeholder="Your name or business details&hellip;"
			required
			class="min-w-100 mw-100 input-reset br0 bn mt3 pa3 w-100 bg-white-80"></textarea>
			<!-- f5 f5-ns input-reset -->
		</div>

		<div class="fr cb cf mb3 mb6-ns mb3-m mb3-l bg-black ma0">
			<input
			class="transition input-reset pointer br0 f6 f5-ns b ph5 pv3 ba bw2-ns b--black white bg-cobalt-80 ttu tracked-mega hover-bg-near-black w-100 db b system"
			type="submit" value="Send">
		</div>
	</form>
<!-- {:else if message }
	<pre>Thanks for your message! Sam will reply to: <span style="font-weight:bold">{email}</span>!</pre>
{:else}
	<pre>
		{error}
	</pre>
{/if} -->


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