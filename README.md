## Documentation

This is the companion repository of the official Volto Hands-on Plone training you can find at [https://training.plone.org/5/voltohandson/](https://training.plone.org/5/voltohandson/).
In this training you'll learn on how to create your own website using Volto.

## Quick Start

First get all the requirements installed on your system.

### Prerequisites

- [Node.js LTS (12.x)](https://nodejs.org/)
- [Python 3.7.x / 2.7.x](https://python.org/) or
- [Docker](https://www.docker.com/get-started) (if using the Plone/Guillotina docker images)

### Create Volto App

Create a new Volto project by using the `create-volto-app` utility.

It will bootstrap a Volto project in a folder of your choice with all the required
boilerplate to start customizing your Volto site.

    $ npm install -g yarn
    $ npm install -g @plone/create-volto-app
    $ create-volto-app myvoltoproject
    $ cd myvoltoproject

Although we install and use `yarn`, the `create-volto-app` tool still needs to be
installed using `npm -g` because `yarn` has a different implementation of
global installs.

### Bootstrap the Plone API backend

We recommend Plone as backend of choice for Volto.

You can bootstrap a ready Docker Plone container with all the dependencies and ready for Volto use:

```shell
$ docker run -it --rm --name=plone -p 8080:8080 -e SITE=Plone -e ADDONS="kitconcept.voltodemo" -e ZCML="kitconcept.voltodemo.cors" plone
```

or as an alternative if you have experience with Plone and you have all the
dependencies installed on your system, you can use the supplied buildout in the
`api` folder by issuing the command:

```shell
$ make build-backend
```

### Start Volto

Once inside your Volto project folder:

```shell
$ yarn start
```

## Volto Documentation

You can find the (beta) documentation in [http://docs.voltocms.com](http://docs.voltocms.com)
# volto-plone

## Trouble Shooting
If the error presents when running plone backend, try to update docker and python version first. And also check docker version and image capacities Omelete folder is optional for reference and should make sure arc directory path match omelete directory. Dexetory mode and content type relationship can be modified in the plone backend. For specific action type content, should create rule in zope. Pyramid as web framework for Python 3. Similar manipulation of redux in volto. Splitting bundle to optimize burden of web service with lazy load. Make sure install all the relevant dependency for an add-on.
Semantic UI might be plug in for future development and easily import or managed, which bootstrap might be a substitute. Theming of the Plone content can be customized from scratch and Plone backend interface is customizable as well. 
