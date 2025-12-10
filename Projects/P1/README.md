# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```sh
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.




# user and user.$name is a dynamic routing with diff folder.
# Each folder should have the index.tsx or route.tsx file.

#  2. If we will use _index.tsx as a defualt file or routing or layout of the route file.

# 3. other file likes, 
# 3.1  add.tsx - > normal add route file
# 3.2  event.global.tsc  -> nested file -> event/global
# 3.3  event.$eventName.tsx  -> its dynamic file

# 4. folder /event -> route.tsx -> (layout)
# 5. folder /event._index -> route.tsx (homepage)
# 6. folder /event.$state -> route.tsx (dynamic segment)

# 7. _AuthLayout -> It's a path less routing, Until use the path, it will not show anything.
# 8. _AuthLayout.login.tsx