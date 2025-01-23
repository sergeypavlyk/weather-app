This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Summary of tech task

A capable candidate should create a responsive weather widget using React/NextJS as the base technology. The widget should display the current weather at the user's location and the weather forecast for the next several days.

The widget should have three sizes: small [2x2], wide [4x2], and large [4x4], and it should adapt to the size of the container it is placed in.

The amount and type of data displayed in each size is up to the developer.

It is up to the developer to decide how the widget should look and what style, colors, and fonts to use. An attachment provides an example of the final widget and may be used for inspiration (but not as a direct copy).

### Tech Requirements and Proposals

The widget markup should be built on top of modern design system principles. The recommended library is MaterialUI v5, as we heavily rely on it in our daily processes, but it is not a strict requirement. Alternatives such as ChakraUI, Shadcn, Ant, NextUI, Mantine, Bootstrap, etc., are also good choices. The intent is to see how the developer can work with a design system and use its semantic, structural, and layout components to build the widget's skeleton.

The weather data should be fetched from a free weather API, such as OpenWeatherMap or WeatherAPI. The candidate should demonstrate knowledge of working with REST APIs and handling the data in React components.
https://openweathermap.org/api/one-call-3
https://www.weatherapi.com/docs/
https://publicapis.dev/search?q=weather

It should show appropriate states / placeholders when the data is being fetched, when the data is fetched successfully and when there is an error.

Demonstrate the understaning of React contexts / providers / hooks by using them to manage the state of the widget. No prop drilling, please.

The set of icons and / or background images could be taken from any SVG icons library, like:
https://iconscout.com/icon-packs/weather?curated_assets=true
https://icons8.com/icons/set/weather

### Bonus points

- **User Input**: Include an input field/settings form for the user to enter the location for which they want to see the weather. This demonstrates knowledge of working with forms in React.

- **Server-Side Rendering (SSR)**: Fetch widget data on the server side of the NextJS app to demonstrate knowledge of SSR.

- **Animate** changes in the state and size of the widget.

- **Theme** : reflect the current browser theme (dark / light) in the widget design.

- Use **CSS container** media queries.

- Background color / image of the widget could also reflect the current weather along with displayed icon.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
