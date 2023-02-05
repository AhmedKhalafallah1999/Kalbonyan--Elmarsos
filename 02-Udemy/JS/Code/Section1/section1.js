/*
What's JavaScript: 
All JavaScript code needs to be hosted and run in some kind of environment. 


In most cases, that environment would be a web browser.
Before we dive in, here are some prerequisites to familiarize yourself with, 
because we'll use them often in this article.

Parser: A Parser or Syntax Parser is a program that reads your code line-by-line. 
It understands how the code fits the syntax defined by the Programming Language and what it (the code) is expected to do.

JavaScript Engine: A JavaScript engine is simply a computer program that receives 
JavaScript source code and compiles it to the binary instructions (machine code) 
that a CPU can understand. JavaScript engines are typically developed by web browser vendors, 
and each major browser has one. Examples include the V8 engine for Google chrome, SpiderMonkey for Firefox, 
and Chakra for Internet Explorer.

Function Declarations: These are functions that are assigned a name.
Function Expressions: These are anonymous functions, that is functions without a 
function name like js function () { statements }. They are usually used in statements, 
like assigning a function to a variable. let someValue = function () { statements }.

How JavaScript Code Gets Executed
For does who don't know, the browser doesn't natively understand the high-level JavaScript 
code that we write in our applications. It needs to be converted into a format that the browser and our
 computers can understand – machine code.
There are two kinds of Execution Context in JavaScript:

Global Execution Context (GEC)
Function Execution Context (FEC)

Global Execution Context (GEC)
Whenever the JavaScript engine receives a script file, it first creates a default
 Execution Context known as the Global Execution Context (GEC).
The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.

Function Execution Context (FEC)
Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function.
Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.
*/
