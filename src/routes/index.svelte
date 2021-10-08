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

<script>
//let pattern = "^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$";

// Note: JS form submission: https://www.youtube.com/watch?v=jpKbyiQsj3k
let email;
let message;

let submission = "";
let error = "";


const submitForm = async() => {
	try {
		const submit = await fetch("/api/submit", {
		method: "POST",
		body: JSON.stringify({
			email,
			message
		})
	});

	const data = await submit.json();

	//console.log(data)

	submission = data;

	} catch(err) {
		error = err;
	}
}

</script>

<h1>SvelteKit + Netlify Forms demo
<small>
	- From <a href="https://github.com/sw-yx/sveltekitnetlifyforms">https://github.com/sw-yx/sveltekitnetlifyforms</a>
</small>
</h1>

<!-- note: <pre>{JSON.stringify(submission)}</pre> -->

{#if !submission && !error}
	<form
	on:submit|preventDefault={submitForm}
	name="Contact"
	netlify-honeypot="gotcha"
	netlify
	class="f5 f4-ns highlight system cf no-clutter">

	<input type="hidden" name="form-name" value="Contact" />
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
{:else if message }
	<pre>Thanks for your message! Sam will reply to: <span style="font-weight:bold">{email}</span>!</pre>
{:else}
	<pre>
		{error}
	</pre>
	<!-- add human readable: `em@il.com` -->
{/if}


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