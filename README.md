# Reonic Frontend Task

## Description

This project is a frontend task for Reonic. The task is to simulate charging of electric cars on a shop parking lot with some input parameters:

1. Number of charging points
2. Cars arrival probability
3. Consumptions of the cars (in kWh)
4. Charging power per charging point (in kW)

The simulation processes these input values and renders the output with the following values:

1. Total energy charged
2. Total amount of charging events
3. The heatmap of consumed energy, charging events, and max power demand, aggregated by month, week and day.

## Getting Started

First clone the repository.

Then go to the folder, and follow these steps:

1. **Install dependencies**:
```bash
yarn
```

2. **Run the development server**:
```bash
yarn dev
```

## Tech stack

A single-page app based on **React + Typescript** built with **Vite**. CSS framework is **Tailwind**.

The app utilizes Tailwind's media queries to make components responsive as much as possible.

The app doesn't use any other libraries apart from the aforementioned.

## Form values handling

The form values are all represented as **range inputs**, which simplifies validation and submission handling, because all values have minimum and maximum values.

## Data generation and other assumptions

Even though there's no requirement to do dynamic data generation, I thought it would be easier for me to understand the logic and relations between different values if the data is dynamically chaning by clicking the button **"Simulate"**.

In the simulation logic I used few assumptions to make the generation simpler.

One is that every car needs just **one hour of its charging power** to be fully charged, meaning that if the car consumption is 10kWh and the charging power of the charging point is 5kWh, the car needs 2 hours to be fully charged.

Also, the data structure is made as a **3D array of events for each charge point for each hour for each day**, meaning he inner _axis Z_ represents _the amount of charging points_, the middle _axis Y_ represents hours and the outer _axis X_ represents _days_ (which I also assume to **always be 30**). Each value of this 3D array is just a _boolean true or false_ representing that the event of car arrival happened at that hour at that charging point.

All necessary commentaries are supplied across the code.