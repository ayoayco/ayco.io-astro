I have been building my own tiny web development ecosystem.

My web "terrarium" -- at least, that's how I think of it.

I _now_ have:

1. [McFly](https://mcfly.js.org) - a metaframework for web components. I describe it that way because the web development industry is still largely in a "component" paradigm. I am hoping to support a different paradigm though, which I _still_ cannot put into words at the moment. So let's keep to thinking "web components" for now.
2. [WCB](https://webcomponent.io) - a low-level reactivity system for... yeah, web components. There's a trade off between productivity & lightweight-ness here and it is somewhere between [Microsoft's FASTElement](https://github.com/microsoft/fast) & [Google's LitElement](https://github.com/lit/lit/). Though the other "knob" to balance the trade off, is building it generic so that devs can also use custom stuff, like now you can use [lit-html](https://codepen.io/ayoayco-the-styleful/pen/ZEwNJBR?editors=1010) with it.

Many things missing still, as is with all "terrariums", but building a model that represents the larger world allows me to understand web development in ways I never imagined I can.
