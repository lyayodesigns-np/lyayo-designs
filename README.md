# Lyayo Designs

This project was built with [Vite](https://vitejs.dev/) and React.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run preview`

Locally preview the production build.\
This command will start a local server that serves the production build from the `dist` folder.

## Learn More

To learn more about Vite, check out the [Vite documentation](https://vitejs.dev/).

To learn React, check out the [React documentation](https://reactjs.org/).

## Environment Variables

This project uses environment variables for API keys and other sensitive information. Create a `.env` file in the root directory with the following variables:

```
# API Keys
VITE_RAPIDAPI_KEY=your-rapidapi-key-here
VITE_RAPIDAPI_HOST=domainr.p.rapidapi.com
```

### Domain Generator API

The Domain Name Generator tool uses the [Domainr API from RapidAPI](https://rapidapi.com/domainr/api/domainr). To use this feature:

1. Sign up for a RapidAPI account at [rapidapi.com](https://rapidapi.com)
2. Subscribe to the Domainr API
3. Get your API key from the RapidAPI dashboard
4. Add your API key to the `.env` file as `VITE_RAPIDAPI_KEY`

## URL Structure

The website uses the following URL structure:

- `/search-engine-optimization/` - SEO services (previously `/services/seo/`)
- `/hosting-with-us/` - Hosting services (previously `/services/hosting/`)
- `/domain-name-generator/` - Domain name generator tool (previously `/tools/domain-generator/`)
- `/services/how-to-register-a-com-np-domain-in-nepal/` - Domain registration guide (previously `/tools/domain-cover-letter/`)

301 redirects are in place in the `_redirects` file to maintain backward compatibility and SEO value.
