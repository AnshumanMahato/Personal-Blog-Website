Welcome back, fellow developers! I'm excited to have you here for the next part of our JavaScript deep-dive series. The previous article explored the fundamental concepts and core features that make JavaScript a powerful language. Don't worry if you missed it - you can catch up [here](https://www.anshumanmahato.me/blogs/javascript-fundamentals-you-should-know).

I was all set to explore JavaScript code execution. Now that I am here, all of a sudden, I am craving some homemade Pizza. You know what? How about we do both? After all, both coding and cooking are about following a recipe, executing steps in the right order, and creating something amazing from basic ingredients.

Today, we will unravel one of JavaScript's most intriguing aspects—how JS code is processed and executed. We'll peek behind the curtain to understand what happens when our JS code executes while baking a cheesy corn pizza.

So preheat your brain (and maybe your oven), and let's dive into this tasty technical adventure!

![Chef wearing a white uniform, smiling and hugging a child, with the caption "Let's go!"](https://media1.tenor.com/m/VALgpQf30oYAAAAd/gordon-ramsay-lets-go.gif align="center")

## The JavaScript Engine

The execution of JavaScript code is handled by a program known as the JavaScript Engine or JS Engine. Just like Java requires JVM, JavaScript requires a **JS Engine**. All browsers and any other environment that executes JavaScript have a JS Engine, with Google's V8 Engine leading the pack as the powerhouse behind Chrome and Node.js. Firefox uses SpiderMonkey, Safari runs on JavaScriptCore, and several others.

The JS Engine has two key components - the Call Stack and the Heap. The **Call Stack** is where the code executes. On the other hand, the **Heap** is an unstructured memory space used for storing objects required by the code during execution. Think of JavaScript Execution as baking a pizza. The Cooking Area is your Engine, and the Cooking Counter is your Call Stack. The space over where you keep your ingredients is the Heap.

![Diagram illustrating a JavaScript engine with two main sections: the Heap and the Call Stack. The Heap contains various colored blocks representing objects in memory, while the Call Stack includes stacked rectangles labeled as execution contexts.](https://cdn.hashnode.com/res/hashnode/image/upload/v1740910742108/b15d2aca-9d6a-4973-b099-3d93bb4457b6.jpeg align="center")

Before you begin with the pizza, you have to prepare the ingredients. You cannot put them directly into the oven. You chop the vegetables, prepare the dough, grate the cheese, etc. Similarly, before the engine can execute the code, it has to be processed and converted to a machine-understandable form. It must speak the computer's language - machine code.

Earlier, we saw how JavaScript uses a clever hybrid approach called JIT Compilation, combining the best of compilation and interpretation. While I prepare the toppings for my pizza, let's peek under the hood and see how JIT Compilation inside the JS Engine.

## Just-in-Time Compilation

When code first arrives at the engine, something fascinating happens. The engine starts breaking down your code into meaningful pieces. It parses the code to segregate tokens holding some meaning to JavaScript, e.g., 'const', 'var', and 'for'. But it doesn't stop there. The engine then transforms these pieces into an **Abstract Syntax Tree (AST)** - a structured way for the engine to understand your code's intent. Let's take a simple example: for the line `const a = 10;`, here's what the AST looks like.

```json
{
  "type": "Program",
  "start": 0,
  "end": 13,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 12,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "a"
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 12,
            "value": 10,
            "raw": "10"
          }
        }
      ],
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```

Don't worry too much about the details of AST for now - but if you're curious to dive deeper, check out this [article](https://dev.to/marvinjude/abstract-syntax-trees-and-practical-applications-in-javascript-4a3).

The parsing phase does more than create the AST – it's your code's first quality check, handling transpilation, linting, and ensuring your syntax is spot-on. Once the engine parses the code to AST, it compiles this AST to machine code, which is then immediately put into the Call Stack for execution. Here's where it gets interesting. Initially, the engine generates a rough, unoptimised version of the machine code to get things up and running as fast as possible. Then, while your code is executing, it continuously works in the background to optimise this code for better performance.

![Just in Time Compilation](https://cdn.hashnode.com/res/hashnode/image/upload/v1740910807030/412af998-ef66-4602-bb1b-90576e876c6f.jpeg align="center")

While different JavaScript engines might handle these steps in their own ways, this is basically how Just-in-Time Compilation works in JavaScript. It's a clever balance between speed and optimisation.

Now that my toppings are ready, it’s time to bake the pizza. Let’s do that alongside learning how the engine executes the compiled code.

![A plate with a serving of sautéed paneer cubes, sliced red onions, and a portion of corn kernels. The plate has a decorative floral design.](https://cdn.hashnode.com/res/hashnode/image/upload/v1740911202958/0d5ac796-887e-4109-b479-5eac46488271.jpeg align="center")

## Execution Context

Once the code is parsed and compiled, it is ready for execution. As stated previously, the Call Stack is responsible for executing the code. It does so using something known as an Execution Context.

An **Execution Context** is an environment where a piece of code executes. Each context is like a self-contained environment that includes not just the code in execution but everything it needs to run – your variables, functions, objects, and more. Back to our cooking analogy, pots, pans, pizza trays, and all cooking vessels are the execution contexts.

We have two types of Execution Contexts: Function Execution Context and Global Execution Context. A **Function Execution Context** forms the environment for executing a function's code whenever we call it. Every function call creates a new separate execution context. The **Global Execution Context** is for the Top-Level code, i.e., the code which is not a part of any function. It is the first execution context to go into the call stack when execution begins. There is only one Global Execution Context, unlike Function Contexts, which can be many.

The code execution begins as the engine pushes the Global Execution context into the Call Stack. The code executes line by line until it hits a function call. Upon hitting a function call, the execution pauses for the current context, and its state is saved. The engine creates a new execution context for the called function and pushes it into the Call Stack on top of the current context. Control then moves to this new context, and execution starts from the first line of the function's body. This process is known as Context Switching. It happens every time the Call Stack encounters a function call.

Once the Execution Context successfully executes the last line of the function associated with the context, the Call Stack pops it off, and the control passes to the previous Execution Context. The execution resumes from the position where it stopped before context switching. The process continues until the Call Stack pops off the Global Execution Context.

Well, that was a lot of jibber jabber. Let's make some pizza and see this in action.

![a teenage mutant ninja turtle is holding three pizzas and saying it 's pizza time ..](https://media1.tenor.com/m/6omVw7_jl7AAAAAC/tmnt-michelangelo.gif align="center")

## Code Execution in Action

Here's our pizza recipe. Let's see how our JS engine will process it.

```javascript
function prepareDough() {
  console.log("Step 1: Preparing Dough");
  console.log(" - 2 cups all-purpose flour");
  console.log(" - 1 tsp yeast");
  console.log(" - 1/2 tsp salt");
  console.log(" - 1 tsp sugar");
  console.log(" - 3/4 cup warm water");
  console.log(" - 1 tbsp olive oil");
  console.log("Step 2: Mixing ingredients and kneading the dough.");
  console.log("Step 3: Letting the dough rest for 1 hour.");
}

function prepareSauce() {
  console.log("Step 4: Preparing Tomato Sauce");
  console.log(" - 1/2 cup tomato puree");
  console.log(" - 1/2 tsp salt");
  console.log(" - 1/2 tsp oregano");
  console.log(" - 1/4 tsp black pepper");
  console.log(" - 1/2 tsp garlic powder");
  console.log("Step 5: Cooking sauce for 10 minutes.");
}

function prepareToppings() {
  console.log("Step 6: Preparing Toppings");
  console.log(" - 1/2 cup grated mozzarella cheese");
  console.log(" - 1/2 cup sweet corn");
  console.log(" - 1/4 cup chopped bell peppers (optional)");
}

function assemblePizza() {
  prepareDough();
  prepareSauce();
  prepareToppings();
  console.log("Step 7: Rolling out the dough into a pizza base.");
  console.log("Step 8: Spreading the sauce over the dough.");
  console.log("Step 9: Adding cheese, corn, and other toppings.");
}

function bakePizza() {
  assemblePizza();
  console.log("Step 10: Baking Pizza");
  console.log(" - Preheating oven to 220°C (430°F).");
  console.log(" - Baking for 12-15 minutes until golden brown.");
}

bakePizza();
```

Once the engine compiles your code, it kicks things off by placing the Global Execution Context (GEC) in the Call Stack. First up, the engine scans through your code and sets aside memory for all your pizza-making functions: `prepareDough()`, `prepareSauce()`, `prepareToppings()`, `assemblePizza()`, and `bakePizza()`. When it hits the `bakePizza()` call, the engine pauses the Global Context, creates a fresh Execution Context for `bakePizza()`, and adds it to the Call Stack.

![An animation demonstrating the JavaScript execution context, where the global execution context is created, followed by function calls like 'bakePizza()'. The call stack dynamically updates as functions are pushed and popped.](https://cdn.hashnode.com/res/hashnode/image/upload/v1740912832305/cf993a5a-b817-4868-ae11-da8ffa0261a0.gif align="center")

As `bakePizza()` springs into action, it needs `assemblePizza()` to do its job. The engine creates another Execution Context that jumps onto the Call Stack. Now, `assemblePizza()` starts with `prepareDough()` - yes, you guessed it, another Execution Context joins the stack! After logging the dough preparation steps and finishing its job, `prepareDough()` context checks out and leaves the stack, handing control back to `assemblePizza()`. The same sequence plays out for `prepareSauce()` and `prepareToppings()` - each gets its own Execution Context, does its thing with the toppings, and exits the stack when done.

![An animation illustrating the JavaScript engine with heap memory and call stack. Functions related to assembling a pizza, such as adding dough, sauce, and toppings, are pushed onto the call stack and then removed as execution completes.](https://cdn.hashnode.com/res/hashnode/image/upload/v1740912877520/23180106-1b1d-49a4-a728-2b81e361dc35.gif align="center")

With all preparations complete, `assemblePizza()` handles the final assembly - rolling dough, spreading sauce, and adding toppings. Once done, it exits the Call Stack, passing control back to `bakePizza()`. Now, `bakePizza()` can do its part - handling the baking instructions and logging the final messages. After it completes its tasks, it leaves the Call Stack as well.

![An animation showing the JavaScript call stack in action, executing functions step by step. Functions are added to the stack and removed as they complete, visualizing how JavaScript processes synchronous code execution.](https://cdn.hashnode.com/res/hashnode/image/upload/v1740912926803/90bf34d7-a00d-4542-90c0-f5596933d20c.gif align="center")

When the Call Stack finally empties, we know our pizza-making program has completed its journey - all functions have done their jobs and returned home. And with this, my pizza is ready.

Speaking of which, writing this article has made me incredibly hungry. I think it's time for me to savour this tasty homemade pizza.

![A small pizza topped with cheese, corn, and onion slices on a decorative plate.](https://cdn.hashnode.com/res/hashnode/image/upload/v1740912999387/49779ffa-cd96-46de-92da-c04e344cb631.jpeg align="center")

![A farmer in overalls and a cap stands in a field, smiling. Text reads: "It ain't much, but it's honest work."](https://cdn.hashnode.com/res/hashnode/image/upload/v1740913274147/c6e0daf3-a824-49d8-b4b1-ea8b072673d7.jpeg align="center")

## Wrapping Up!

So, we've reached the end of our delicious journey through JavaScript's execution process! We've learned how the engine processes our code, manages execution contexts, and handles the call stack. What seems like simple scripting is a highly optimised and synchronised process under the hood.

Thanks for reading! I hope this article was insightful for you. I'll leave you here to digest all this information. If you found this helpful, pass it along to your fellow developers (maybe include a pizza when you do)!

Want to connect? Follow me on:

- X: [@AnshumanMahato\_](https://x.com/AnshumanMahato_)
- LinkedIn: [/in/anshuman-mahato/](https://www.linkedin.com/in/anshuman-mahato/)
- GitHub: [/AnshumanMahato](https://github.com/AnshumanMahato)

Happy Learning!! 😊🙏
