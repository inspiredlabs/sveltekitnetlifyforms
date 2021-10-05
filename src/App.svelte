<script context="module">
	export const prerender = true; //
</script>

<h1>PWA/SvelteKit + Netlify Forms demo</h1>
<p>View <a href="https://github.com/sw-yx/sveltekitnetlifyforms">https://github.com/sw-yx/sveltekitnetlifyforms</a> for source</p>

<!-- "/src/routes/test-form.svelte" -->
<form
accept-charset=utf-8
method=POST enctype="application/x-www-form-urlencoded"
class="f5 f4-ns highlight system cf no-clutter"
name="Contact"
netlify-honeypot="gotcha"
netlify>
<!-- action="/done.html" // form data-netlify="true" -->
<!-- For each detected tag, it sets up a dedicated "form" which is pretty much an append-only schemaless document store of all submissions.
		- from: swyx.io/sveltekit-netlify-forms/
-->
	<input name="subject" type="hidden" value="InstantWebapp inquiry" />
	<input name="gotcha" class="visually-hidden" />
	<div class=mb4>
		<label for=email class="f6 f5-ns ttu tracked-mega pl3">Address</label>
		<input type=email name=email id=email class=" input-reset br0 bn mt3 pa3 w-100 bg-white-80" placeholder="your@email.com" required>
		<!--
		pattern="
			[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?
		" -->
	</div>

	<div class=mb4>
		<label for=message class="f6 f5-ns ttu tracked-mega pl3">Message</label>
		<textarea class="mw-100 input-reset br0 bn mt3 pa3 w-100 bg-white-80" id=message name=message rows=4 placeholder="Your name or business details&hellip;" style="min-width:100%;" required></textarea>
		<!-- f5 f5-ns input-reset -->
	</div>
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

		.bg-cobalt-10 {
			background-color:hsla(201, 75%, 36%, var(--one) );
		}
		.bg-cobalt-20 {
			background-color:hsla(201, 75%, 36%, var(--two) );
		}
		.bg-cobalt-80 {
			background-color:hsla(201, 75%, 36%, var(--eight) );
		}
		.bg-cobalt-90 {
			background-color:hsla(201, 75%, 36%, var(--nine) );
		}
		.bg-cobalt {
			background-color:hsla(201, 75%, 36%, var(--ten) );
		}
	</style>
	<div class="fr cb cf mb3 mb6-ns mb3-m mb3-l bg-black ma0">
		<input class="transition input-reset pointer br0 f6 f5-ns b ph5 pv3 ba bw2-ns b--black white bg-cobalt-80 ttu tracked-mega hover-bg-near-black w-100 db b system"
		type=submit value=Send>
	</div>
</form>


<style>
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
</style>