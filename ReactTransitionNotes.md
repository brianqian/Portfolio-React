# React Transition Group

## Transition

The Transition component is a custom created component that needs a few parameters to work. What it does is it passes class styles down to its children and provide a timespan for the animation to take place. Also note in the example the 'in' prop in Transition. When that is set to 'true', the animation begins. Example:

```Javascript
import Transition from 'react-transition-group/Transition';

const duration = 300;

const defaultStyle = {
 transition: `opacity ${duration}ms ease-in-out`,
 opacity: 0,
}

const transitionStyles = {
 entering: { opacity: 0 },
 entered:  { opacity: 1 },
};

const Fade = ({ in: inProp }) => (
 <Transition in={inProp} timeout={duration}>
   {(state) => (
     <div style={{
       ...defaultStyle,
       ...transitionStyles[state]
     }}>
       I'm a fade Transition!
     </div>
   )}
 </Transition>
);
```

These class styles (in the example, they are represented by two objects) are created beforehand. After the class styles are created, the direct child of Transition is a function that returns the div/component you want to render and your two style objects are passed into the style Prop of the component.

The two objects are defaultStyle and transitionStyles. Default style defines the transition using css properties like `transition: opacity 300ms ease-in-out; opacity: 0; This defines the default style of the component. transitionStyles is an object with specific keys, namely: entering, entered, exiting, exited. This makes more sense when looking at the function itself.

```Javascript
{(state) => (
  <div style={{
    ...defaultStyle,
    ...transitionStyles[state]
  }}

```

Transition passes along 'state' to its child (ie. entering, entered, exiting,exited) and passes the corresponding transition style

## CSSTransition

CSSTransition is almost identical to Transition except that it uses CSS Transitions instead of custom defined ones. How it does this is by appending identifiers to a provided class name like -appear, -appear-active, -enter, -enter-active, -exit, -exit-active.

You can see in this example:

````Javascript
<CSSTransition
  in={showValidationMessage}
  timeout={300}
  classNames="message"
  unmountOnExit
  onExited={() => {
    this.setState({
      showValidationButton: true,
    });
  }}
>```

The classNames prop takes in message as a base name. In the CSS styles you can see the definitions:

```CSS
.message-enter {
  opacity: 0.01;
  transform: scale(0.9) translateY(50%);
}
.message-enter-active {
  opacity: 1;
  transform: scale(1) translateY(0%);
  transition: all 300ms ease-out;
}
.message-exit {
  opacity: 1;
  transform: scale(1) translateY(0%);
}
.message-exit-active {
  opacity: 0.01;
  transform: scale(0.9) translateY(50%);
  transition: all 300ms ease-out;
}```

More importantly this can be used in conjunction with styled components. Here's an example of it being used with React Router.
https://veerasundar.com/blog/2018/12/how-to-animate-page-transition-in-react-using-styled-components/

```Javascript
return (
  <Route
  render={({ location }) => {
    return (
      <PageContainer>
        <TransitionGroup component={null}>
          <CSSTransition
            timeout={300}
            classNames="page"
            key={location.key}
          >
            <Switch location={location}>
              <Route exact path="/details" component={DetailsPage} />
              <Route exact path="/" component={HomePage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </PageContainer>
    );
  }}/>```

In your styled-component you simply apply the appended class names to the container of the component.
```CSS
const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
const Page = styled.div`
 ...// removed
`;

const HomePageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInLeft} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.2s forwards;
  }
`;

`;```

```Javascript
function HomePage() {
  return (
    <HomePageElm>
      <h2>Home Page</h2>
      <p>
        This page demonstrate the page transition animation done on react router
        URLs with styled components and react-transition-group.{" "}
      </p>
      <p>To view the page transition, click on below link.</p>
      <Link to="/details">Go to Page Two →</Link>
    </HomePageElm>
  );
}```


Here you can see that the Switch is inside a Route that doesn't take a path meaning it always renders. This is used to pass the location prop down into the Switch. According to https://reacttraining.com/react-router/web/example/animated-transitions this is so it can match the old location and animate on its way out. TransitionGroup also handles the triggering of the 'in' prop as items are changed within the list.
````
