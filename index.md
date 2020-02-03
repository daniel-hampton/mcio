---
home: true
heroImage: /cow.png
heroText: The Galaxy Awaits
tagline: Join the adventure
actionText: Get Started 🚀
actionLink: /tutorials/
features:
- title: Simplicity First
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Vue-Powered
  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
- title: Performant
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2018-present Me
---

# Vue Press Example

## Introduction
Hello and welcome to this initial test of the VuePress package.

Current user:
<ClientOnly>
    <FirebaseUser />
</ClientOnly>

Here is the galaxy:
![A Galaxy](./milky-way.jpg)


```python
print('Hello World!')
```


```typescript
interface coffee = {
    coffee: number, 
    [key: string]: any
    }
const test: coffee = {coffee: 3, hello: 'world'}
```

```sh{4,7,17}
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

## Recent Posts
<RecentPosts />