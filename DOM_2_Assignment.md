# Jack In The Box

Remember the old toy, the [jack-in-the-box](https://en.wikipedia.org/wiki/Jack-in-the-box)? Pretty creepy, huh? Well, we're going to make a virtual jack-in-the-box today.l

In this folder, you'll find an HTML and a CSS file. When you open the HTML file, you should see a header ("Where's Jack?"), a subheader ("5"), and an image of a closed box. Taking a look at the HTML for this, you'll see that we aren't actually using an `img` tag for this - we're using a `div` tag with the CSS property `background-image` applied to the class.

Your task is simple. Using the appropriate CSS classes and DOM manipulation, you're going to count down from 5. Start your count as soon as the page loads. Update your subheader _each second_ you count down. Once your countdown has reached 0, you're going to reveal Jack - surprise!

A couple tips:

- You'll definitely need to create and import a JavaScript file using the `script` tag.
- Applying a different CSS class to our image `div` with a different `background-image` is a sure way to get Jack to pop up! Combine your **DOM and CSS skills** to ensure that this happens without a hitch.
- You may need **two timers** - one for the countdown, and one for Jack himself.
