# StarWarsApp

This project was built in [Angular](https://angular.io/) v15 with [TypeScript](https://www.typescriptlang.org/) using the Star Wars API ([SWAPI](https://swapi.dev/))

## Running this application locally

To run this application locally you will need to clone this repository or clone a fork of this repository.

Make sure to run `npm install` or `npm i` to install all dependencies neeed for this project.

Assuming you have the angular CLI installed, run `ng serve` for a local dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

If you are missing the angular CLI you will need to install it globally in your environment using the following command via npm. This command will only work on the assumption you have node and npm installed.

```
npm install -g @angular/cli
```

As this application is built with TypeScript, you will also need to install TypeScript `npm install -g typescript` if you haven't done so already.

## Application Features

- The user can view a list of starships on the homepage witha summary of the ships specifications

- Clicking on a starship name from the list will navigate the user to the ship's detailed view.

- If the starship has any known pilots, the user may additionally click on the pilot's name, which will navigate them to the person's details page, to get more information on that pilot.

- The person's details may include additional starships they've been known to fly or be a part of the crew. The user may click on the starship listed to navigate to said starship's details.

- At any point the user can navigate to the section preferred by clicking on the desired link's in the navigation bar.

## Application Notes

- The application will load all the data once the application is initially launched or on a refresh.

- Sometimes the load times are impaired due to API call times. However, once loaded the navigation on the site is kicked into hyperdrive.
