# Content Security Policy Example

- I learned CSR from this great video https://www.youtube.com/watch?v=JbfNWg6JS4U.
- Kyle's code does not work with my machine running node14.
- So, I wrote this code to recap what Kyle taught in the video.

## Getting started
```
npm install
npm run dev
```

## Some scripts to try out


`<script>alert('You got hacked!')</script>`

`<style>h1:after {content: "You got hacked";}</style>`