# Started

The easiest way to try `Strview.js` is to use the Hello World example. You can open it in a new tab of your browser and follow the examples to learn some basic usage. You can use `strview.global.js` under the CDN version. Using this file will expose `Strview` globally, and you can call it directly.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strview.js</title>
</head>

<body>
    <div id="app"></div>
    <script src="https://cdn.jsdelivr.net/npm/strview@1.8.0/dist/strview.global.js"></script>
    <script>
        Strview.createView({
            el: "#app",
            data: {
                msg: 'Hello World'
            },
            template: `<p>{msg}</p>`,
        });
    </script>
</body>

</html>

```
As shown below：

<demo-1/>