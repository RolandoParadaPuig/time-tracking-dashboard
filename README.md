# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).
Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![image](https://user-images.githubusercontent.com/33847751/173733537-0437f10b-815c-429d-98f4-70330727ad51.png)


### Links

- Solution URL: https://github.com/RolandoParadaPuig/time-tracking-dashboard
- Live Site URL: https://rolando-portfolio.web.app/time-tracking

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learn a lot about CSS Grid layouts and im very proud of the dinamic use of mi card component to render the 6 cards (work, play, study. etc)

```
export const TimeCard = (props) => {
  const timeFrameSelect = props.timeFrameSelect;
  console.log(timeFrameSelect);
  return data.map((time) => {
    const classNameTitle = time.title.split(" ").join("-").toLowerCase();
    let timeFrame;
    timeFrameSelect == "daily"
      ? (timeFrame = time.timeframes.daily)
      : timeFrameSelect == "weekly"
      ? (timeFrame = time.timeframes.weekly)
      : (timeFrame = time.timeframes.monthly);
    return (
      <div key={time.title} className={`time-tracking--card ${classNameTitle}`}>
        <article className="time-tracking--article-body">
          <header className="time-tracking--article-header">
            <h2>{time.title}</h2>
            <a type="" target={"#"}>
              dots
            </a>
          </header>
          <div className="time-tracking--article-timeframe">
            <p className="time-tracking--article-current">
              {timeFrame.current}hrs
            </p>
            <p className="time-tracking--article-previous">
              Last{" "}
              {timeFrameSelect == "daily"
                ? "day"
                : timeFrameSelect == "weekly"
                ? "week"
                : "month"}{" "}
              - {timeFrame.previous}hrs
            </p>
          </div>
        </article>
      </div>
    );
  });
};
```

### Useful resources

- [W3schools](https://www.w3schools.com/) - Always useful to find some HTML tags or CSS properties.
- [desarrolloweb](https://desarrolloweb.com/articulos/ajustar-filas-columnas-rejilla-css-grid) - This page help me to learn more about CSS Grid (spanish)
- [developer.mozilla](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout) - again to learn about CSS grid 


## Author

- LinkedIn - [Rolando Parada Puig](https://www.linkedin.com/in/rolando-parada-puig)
- Frontend Mentor - [@RolandoParadaPuig](https://www.frontendmentor.io/profile/RolandoParadaPuig)
- Twitter - [@RolandoParadap](https://twitter.com/RolandoParadap)
