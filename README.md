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
Semantic UI might be plug in for future development and easily import or managed, which bootstrap might be a substitute. Theming of the Plone content can be customized from scratch and Plone backend interface is customizable as well. To understand Dexderity, it creates a "real" content type entirely through-the-web without having to know programming. Every Plone content type has the following parts: Schema, FTI and Views.

## Plone 2020
NLP in javascript has privacy and parallel computation advantage. One argument might be the true advantage of JS's capability in ML. Add on should be specified in the package.json file. Plone and Zope can be specified for new theming. For local server start, use node server.js. AWS deployment for Plone backend. Use docker to deploy phone which has same configuration and scale abilities. Optimize lightrail AWS to help deploy the server in place. AWS would allow minimal configuration and easy package for server deployment. Using AWS Packaging to minimize the configuration burden and integrate docker use. Dexterity was created to serve two audiences: Administrators/integrators, and developers. A schema is an Interface with zope.schema fields, which can be specified in Python code or loaded from an XML model. The unnamed schema as IContentType schema which provide the zope IContentType interface. 

Guillotine is a WSGI middleware which allows for HEAD requests to be properly handled by your WSGI pipeline. Has strong potential for Mchine Learning in JavaScript. Built in for messaging platform for veteran suicide crisis. Or chat it feature for auto suicide ideation detection and auto referral for emergency line. 

The theme folder contains the Pastanaga theme which is used for the styling. The theme.config can be used to set the theme settings.

What has Rails got that Plone doesn't, why does it have so much hype? For machine learning option, the inefficient computation speed and lack of community support might be a challenge. 

npm install -g yarn
$ npm install -g @plone/create-volto-app
$ create-volto-app myvoltoproject
$ cd myvoltoproject
