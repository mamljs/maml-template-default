# Preface

If you haven't installed `maml`, please check [Download](/download/).

If you want to get started in 5 minutes, please read the [Tutorial](/tutorial/).

If you want to dive into the details, please select the topics you are interested from the sidebar.



# Fundamentals

1. Every `index.md` file in input directory is a web page.
1. Every `index.md` has an accompany `index.yml` as configuration file.
1. `index.yml` inheirts and overrides `index.yml` in ancestor directories.
1. Views' template engine is [nunjucks](https://github.com/mozilla/nunjucks).



# Conventions

## pathname starts with and ends with `/`

- correct: `/`, `/download/`, `/blog/`
- wrong: `download`, `/download`, `blog/`

## each page is a directory, not file

- correct: `/download/`, `/blog/`
- wrong: `/download.html`, `/blog.htm`



# Directories

## assets

This folder contains static resource files, such as javascript, css and images.


## controllers

The main logic of the website generator. As an end user, you probably don't need to change anything in this folder.

If you are a developer, you should know that this is the "brain" of `maml`.


## models

This folder contains the main data of the website, content data is in `*.md` files, configuration data is in `*.yml` files.

And the folder structure reflects the website structure.


## views

This folder contains HTML code, including layouts and templates. Views' template engine is [nunjucks](https://github.com/mozilla/nunjucks).



# Command Reference

## maml

```shell
maml help

  Usage: maml [options] [command]


  Commands:

    init        initialize a new website
    build       build the website
    help [cmd]  display help for [cmd]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## maml init

```shell
maml init

Options:

    -h, --help                 output usage information
    -V, --version              output the version number
    -t, --template <template>  specify website template
```

## maml build

```shell
maml build

Options:

    -h, --help             output usage information
    -V, --version          output the version number
    -o, --output <output>  specify output directory
```
