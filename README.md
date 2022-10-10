# Charcuterie & More by Dylan 
a simple deno based web server to create a business store front

# Editing content
In order to edit or update the content of the page, with respect to text and images this has been built out
with content in mind and to simplify that process with out a need to search through the codebase and worry 
about keeping with syntax that could create issues.

now you can simply commit the changes direct to the `content.yaml` file in the root of the project, there you
will find all the text and images for the page, and text can be modified accordingly, along with images for the 
Home and Gallery pages. Simply keep with the existing structure and conform the the [YAML Specification](https://www.tutorialspoint.com/yaml/index.htm)
and no issues should arise.

it's also always a good idea to run your changes locally to make sure everything still compiles and now issues
are introduced in from a type-o or such.

## Running locally
simply run the `start.sh` script or ...
```sh
deno run --allow-net --allow-read --allow-env server.jsx
```

Then you should be able to access the page and the server on http://localhost:8000

## Deployment - Deno Deploy
This app is deployed using [Deno Deploy](https://deno.com/deploy) with the free tier with limitations, it is 
deployed using GitHooks, so whenever an update is made to the master branch, it is detected and will changes
will be re-deployed in a matter of seconds. Ahh the future is great.

you can access the most recent version @ https://charcuterieandmore.deno.dev/

## Dev Links
#### Deno install
You need to install the code tooling in order to run on your local machine.

https://deno.land/#installation

#### Google Fonts
Here you can go font shopping and simply import the ones you want to use in your page.

https://fonts.google.com/?preview.text=Charcuterie%20%26%20More%20by%20Dylan&preview.text_type=custom

#### FontAwesome - icons
Use this to search and find the icon class names to modify your page.

https://fontawesome.com/v5/search?o=r&m=free
