# Seach your favourite movies and tv shows

### Instructions

#### Basic setup

- Clone this the repo into yur local environment.

- Position yourself inside the folder of the cloned repo.

- Type in the command `npm install` to install all necessary dependencies.

- Run `npm run dev` command to start the app.


#### TMDB Authentication

- TMDB requires an api key to authenticate any calls. This api_key parameter will authenticate every individual user and allow them access to the db.

- Visit TMDB website to create your own api_key for fetching.

- This key will be used as a param inside your url:
```
  const url = (https://api.themoviedb.org/3?api_key=<YOUR_UNIQUE_API_KEY>);
```
  Alternatively it can be in the `params` object in the options object of the axios.get() call:
  ```
    axios.get(API_URL, {
      params: {
        api_key: YOUR_UNIQUE_API_KEY
      }
    })
  ```

- Put your API_KEY as an environment variable in a .env file at the root of your project:
```
  VITE_API_KEY=<YOUR_UNIQUE_API_KEY>
```

- Do **NOT** change the way Vite builder imports this variable from .env file. This is different from the way environment variables are usually imported in JavaScript/TypeScript, but it is necessary. Otherwise Vite builder will not be able to recognize them.

- Vite builder also requires all .env variables to be prefixed with a word 'VITE' at the begining:
```
VITE_API_KEY=<YOUR_UNIQUE_API_KEY>
```

### Technologies

- I used Vite builder to initialize a React app. Vite is somewhat faster alternative to create-react-app.

- I used CSS modules for styling. This is just my personal preference for styling if no css frameworks are used.

### Usage

- Initially app will fetch ten tv shows. That is the category that is initially selected.

- Click on any category and the app will fetch ten items of that category.

- Type in search box to search for items, either movies or tv shows, depending on which category is selected.