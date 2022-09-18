## Deno React `renderToString` Demo
This is a minimal example of using React in Deno and rendering a React component
into a HTML string.


## Running it yourself
```bash
# You may need to run this if you try to open the sources in your editor and
# some some errors
$ make cache

$ make run
```


## Example Output
```html
<div class="class-name-foo"><p>Count is <!-- -->0</p><p>IP is <!-- -->unknown</p><p>Random number is <!-- -->0.9431874610921576</p><p><div style="outline:1px dashed;padding:5px;margin:5px"><p>This is a child component</p><p>Label is <!-- -->a</p></div><div style="outline:1px dashed;padding:5px;margin:5px"><p>This is a child component</p><p>Label is <!-- -->b</p></div></p></div>
```

And with pretty printing,
```html
<div class="class-name-foo">
  <p>Count is
    <!-- -->0
  </p>
  <p>IP is
    <!-- -->unknown
  </p>
  <p>Random number is
    <!-- -->0.9431874610921576
  </p>
  <p>
    <div style="outline:1px dashed;padding:5px;margin:5px">
      <p>This is a child component</p>
      <p>Label is
        <!-- -->a
      </p>
    </div>
    <div style="outline:1px dashed;padding:5px;margin:5px">
      <p>This is a child component</p>
      <p>Label is
        <!-- -->b
      </p>
    </div>
  </p>
</div>
```


## How it works
There's a bit of implicit magic happening to make it work and not to see errors
in your editor when opening the sources.

First the `deno.json` config needs the following,
```json
{
  "importMap": "import_map.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}
```

And secondly the `import_map.json` needs,
```json
{
  "imports": {
    "react/jsx-runtime": "https://deno.land/x/lume@v1.11.4/deps/react_runtime.ts"
  }
}
```

To render the components to a HTML string, in `main.ts`, we can do,
```typescript
import React from "npm:react";
import { renderToString } from "npm:react-dom/server";
import App from "./App.tsx";

const html = renderToString(React.createElement(App));
console.log(html);
```

Alternatively, we could also rename `main.ts` to `main.tsx`, which allows usage
of `JSX` syntax,
```diff
  import React from "npm:react";
  import { renderToString } from "npm:react-dom/server";
  import App from "./App.tsx";

- const html = renderToString(React.createElement(App));
+ const html = renderToString(<App />);
  console.log(html);
```
