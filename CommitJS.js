//  I am too tired to code right now after work so
//  instead will write down what I've read and learn about JS today.
//  Because of bad interview decided to deep down in JS and how it works under the hood!
//  This is empty commit to fill GitHup profile.

//*Read about JS's specification and TC39 team and how they vote the new features
//  that are planned to be intrdocued in the next versions. https://github.com/tc39/proposals
//*Read about how not all JS is actually JS.
//  So alert(..) and console.log(..) are not defined by JS.
//  But they look like JS. They are functions and object methods and they obey JS syntax rules.
//  The behaviors behind them are controlled by the environment running the JS engine, 
//  but on the surface they definitely have to abide by JS to be able to play in the JS playground.
//*Read about the types of writing code: Procedural style as C, OO as Java/C++ and FP(functional) => {as Haskell}
//  JS can be written in all of them a.k.a. multi paradigm language.
//*Read about the backwards compability and forwards compability. JS is backwards compatible, not forward.
//  Forward compatibles are HTML and CSS but they are not backwards compatible.
//  Explanation: If new feature is planning to be used and JS still does not have it and the "IF" statements
//  jumps to skip it it may lead to bad behavior. But with the help of Babel it transpiles the JS to older platforms
//  so this makes it readble from the transpiler. However HTML and CSS written in the 1995 most probably implemented now
//  have different meaning and won't work as they were working perviosly. But newer HTML and CSS will work smootly on
//  browser from the past.
//*Read about the Interpretation of JS is it Interpretated/Scripted or compiled language.
//  So JS is parsing => compiling => executing JS 
//  JS is a compiled language. And again, the reason that matters is, since JS is compiled, 
//  we are informed of static errors (such as malformed syntax) before our code is executed. 
//  That is a substantively different interaction model than we get with traditional "scripting" programs,
//  and arguably more helpful!
//  REFERENCES: https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md