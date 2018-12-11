---
title: Everything returns something
date: '2018-12-07T00:00:00.000Z'
summary: false
category: development
tags: [ javascript, react ]
---

If you will, open the developer tools of your browser (probably <kbd>cmd/ctrl</kbd> + <kbd>option</kbd> + <kbd>I</kbd>) and click on the Console tab. Now create a variable, something simple:

```js
const demo = true;
```

Now hit <kbd>Enter</kbd>. What do you see? Probably something like this:

```js{2}
const demo = true;
// undefined
```

If you've spent any time in the console, I'm sure you've seen that little "undefined" buddy before. But, if you're like me, you may not have every wondered why.