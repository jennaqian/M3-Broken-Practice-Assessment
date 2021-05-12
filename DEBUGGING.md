# Questions to answer for each bug you find:

**Once you identify a bug, before you fix it, answer the following:**

1. How did I know there was a problem? List all of the available information (Cypress assertion error? Failed to compile? JavaScript error message? Is there a line number? Something not rendering correctly in the browser?)

- The error was failed to compile, the msg told us which line the error was on in App.js
- Error: You should not use <Link> outside a <Router>
- Error: Cannot read property 'name of undefined 
- Error: img in navbar wont pass in cypress 

1. Based on the information I have (error message, assertion error, line number, etc) :
   - What is the most likely cause for the bug? Why is this a good possible explanation?
   - Where should I start looking for the bug?

- Looks like we are missing a closing tag in <Route />
- Look in index.js where we will need to add BrowserRouter, to wrap around App component
- The bug is possibly in the state! 
- Look in Navbar.js for the css error 

**Once you've fixed the bug, answer the following:**

1. Describe the steps you took to identify the problem.

- We added the closing tag to <Route /> and that resolved the error msg. 
- For the second error msg, we imported BroswerRouter and wrapped it around App component 
- BerryCard was trying to access a prop that was never passed, and it was accessing the wrong prop. Rendering an object made an error appear, resolved it by specifying .name and .firmness
- style in img tag was missing a width




# Example bug

**Before Fixing**

1. Error message: TypeError: Cannot read property 'front_default' of undefined. Line 7 of PokemonCard.js
1. Based on this information:
   - I think one of my variables is undefined when I don't expect it to be
   - I want to find the variable that is undefined - I'll start looking at line 7 of PokemonCard.js


**After Fixing**

1. PokemonCard.js line 7 references `pokemon.sprites.front_default`. `pokemon` is passed as a prop, so I looked in the parent component. In Pokemon.js, we were sometimes passing an empty object as the `pokemon` prop, which caused the type error. To fix this, I used conditional rendering to only render a PokemonCard if there is a sprite object.
