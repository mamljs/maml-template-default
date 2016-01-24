# Prerequisites

`maml` has been tested with OS X, and it is the recommended operating system.

However, it should also work with Linux without problem.

Windows is not supported and we have no plan to support it.

[Node.js](https://nodejs.org) is required and it could be installed via `brew install node`.


# Installation

Installation is as simple as `npm install -g maml`.


# Create a new website

```shell
make mywebsite
cd  mywebsite
maml init
```


# Build the website

In the root folder of the website, run `maml build`.

Static website will be generated in `./dist` folder


# Deploy

Since the generated website is pure static, it could be deployed onto any HTTP server, such as Nginx. You can also upload the website to GitHub Pages or Amazon S3.
