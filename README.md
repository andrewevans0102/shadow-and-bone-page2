# Shadow and Bone Page

This project is a fan site for the popular netflix show and book series [Shadow and Bone](https://www.netflix.com/title/80236319).

If you'd like to learn more about it, check out my post [Getting Started with React Remix](https://www.rhythmandbinary.com/post/2022-02-28-getting-started-with-react-remix).

Descriptions and locations came from https://screenrant.com/shadow-bone-glossary-vocabulary-terminology-encyclopedia-guide/;

cover image came from https://www.google.com/url?sa=i&url=https%3A%2F%2Fepicstream.com%2Farticle%2Fshadow-and-bone-what-is-morozovas-stag-and-how-is-it-connected-to-alina-starkov&psig=AOvVaw0GR_0whSBQOnVunZt_3d73&ust=1645104787019000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCwyomrhPYCFQAAAAAdAAAAABAD

The sections that are below about deployment and running with netlify were copied from the Remix CLI project.

To run locally:

-   `sudo netlify dev`

[Remix Docs](https://remix.run/docs)

Site is hosted on Netlify at https://shadow-and-bone-page.netlify.app/

## Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

The Netlify CLI starts your app in development mode, rebuilding assets on file changes.

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
$ npm run build
# preview deployment
$ netlify deploy

# production deployment
$ netlify deploy --prod
```
