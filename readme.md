# Micro Split Test Library for Split Test

## Split test for developers

This is a micro library for split test in the browser. It's not integrated with any 
measurement tool (like google analytics), but it enables you to do so.

### Usage

Clone this repo and use SplitTest.js in your project.

```js
SplitTest.make({
    versionA: function() {
        document.getElementById("header").innerHTML = "I'm title one";    
    },

    versionX: function() {
        document.getElementById("header").innerHTML = "I'm a variation of title"
    } 
});
```

### Cookies

It store a cookie in the user browser with the version the user saw. Everytime the user goes back
to the page she will see the same variation.

### Full Example
```html
<html>
    <head>
        <title>Testing split test</title>
    </head>
    <body>
        <h1>No Split Test</h1>
        <p></p>
        <script src="SplitTest.js" ></script>
        <script type="text/javascript">
            SplitTest.make({
                versionA: function() {
                    document.querySelector("h1").textContent = "Version A";
                    document.querySelector("p").textContent = "Version A loaded";
                },

                versionB: function() {
                    document.querySelector("h1").textContent = "Version B";
                    document.querySelector("p").textContent = "Version B loaded";
                }
            });
        </script>
    </body>
</html>
```
