# Animated Drawer

To run this project you need the react-native environment to be set up

Clone this repository, cd into it and then run

- `yarn`
- `npx pod-install ios` (if you are on a mac)
- `yarn start` in one terminal
- `yarn android` or `yarn ios` on another terminal

Final Result in result.mp4 file
<br/>
<br/>
<br/>

# Process of Thought

First added all the navigation structure

Then started to look around for animating the screen, an idea was to make a HOC that will add the header and screen animation (`DrawerScreenWrapper`)

The only issues I could not fix were

- Cannot rotate the tab navigator with the screen
  - I tried wrapping the navigator with the hoc but that did not go well
- Cannot overlay the screen rotation into the drawer navigator
  - I thought of making the drawer navigator some kind of underlying screen, but probably that wouldn't be a good idea - I don't know how to explain why
