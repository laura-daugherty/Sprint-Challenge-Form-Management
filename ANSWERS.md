# Answers

- [ ] Why are forms used so often in web applications and software?

 Forms are on every page! They are used to gather information from the user, then do something with that data. Usually it's sending it someplace or rendering somewhere on the page.

- [ ] What advantages are there by using a forms library like Formik?\

Formik really helps to simplify a form. It has built in change handlers and submit events that help take out a lot of the non-DRY, boilerplate parts of putting together forms. They can get very repetative without the use of a form managing third party like Formik.

- [ ] What is stateful logic?

Stateful Logic is logic that applies to the state. It is usually associated with some state on the page and usually is logic telling the state what to do, or when to do it, or how to conditionally act.

- [ ] What is a custom hook, and what does it mean to compose hooks together?

A custom hook is a hook you can build to reuse stateful logic throughout your application. You can even compose one custom hook using several pieces of statful logic together.

- [ ] Describe the process of retriving a token from a server and using that token in subsequent API calls.

To retrieve a token we need to send information to the server. We send login information (exact pattern differs by server, but usually requires we send at least password: "" and username: "" data) If the information we send to the server is appropriate it will send back a token. I set that token to localStorage where it is available for when I need it. I can refer to whether or not there is a token stored to conditionally render certain pages. I can also send the token in a header along with all of my server requests (this process is dried out by the AxiosAuth file that saves the token to send in a header with each request). That way it is sent along with the request every time we make it. Sometimes the server might be checking for a token to see if it will even send the information back (some info may need a token to be accessed).