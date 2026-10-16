Hey there! Welcome to another article in this series where we discuss the core fundamental concepts of this awesome yet messy language, JavaScript. In the previous article, we discussed how JavaScript executes code. We learned about the JavaScript Engine, its components, JavaScript code compilation, Execution Contexts, and the flow of JavaScript code execution. And we had some pizza too. If you missed it, check it out [here](https://www.anshumanmahato.me/blogs/understanding-javascript-execution).

Well, it was all about the execution of synchronous code. Then what about asynchronous code? - You may ask. Worry not, because that's what we will explore in this article. In the first article of this series, I briefly mentioned the Runtime Environment. Let's begin from there and dive deeper.

![A man in an office setting energetically folding his arms with the caption "LET'S DO THIS!"](https://cdn.hashnode.com/res/hashnode/image/upload/v1753870587473/aa7cd2b0-ecb0-4a07-8f58-9f612646f9dd.gif align="center")

## The JavaScript Runtime Environment

> *A JavaScript Runtime Environment is the environment that enables the execution of JavaScript Code.*

Wait what? Ain't that the Engine?

Hold up, let me clear this. The JavaScript Engine executes the code. The JavaScript Runtime Environment is what enables the Engine to do so. It defines the functionality that JavaScript can perform beyond just basic computation.

In the last article, I compared the JavaScript Engine to a cooking counter, remember? Now, can you have a cooking counter without a kitchen? No! It can be a home kitchen, a restaurant kitchen or maybe just a food truck. But there has to be a kitchen. The JavaScript Runtime Environment is that kitchen. The Engine is a part of the runtime environment. Yes, it is what executes the code. But, it is the Runtime Environment that facilitates, orchestrates and manages the process of execution.

Apart from the JavaScript Engine, the following are the other components of a JavaScript Runtime Environment -

* APIs and Libraries
    
* Task Queues
    
* Event Loop
    

![Diagram showing the JavaScript Runtime Environment with four sections labeled: "Engine," "APIs & Libraries," "Task Queue," and "Event Loop".](https://cdn.hashnode.com/res/hashnode/image/upload/v1753870684512/f43aaba8-2156-4ad4-b170-3df5583f782f.jpeg align="center")

Let's go through all of these one at a time.

## APIs and Libraries

These are pre-built functions and objects giving JavaScript access to system capabilities and external services, defining JavaScript's capabilities and functionalities for that Runtime Environment. Essentially, these are the tools and utilities that determine what JavaScript can do within that environment. So, will the capabilities of JavaScript differ from Runtime to Runtime, even if they use the same JavaScript Engine?

Well, Yeah! Think of the APIs like the utensils and facilities in a kitchen. Depending on the utensils, what you can cook will differ from one kitchen to another, even if they have the same cooking counter. The things you can do in a Bakery's kitchen will not be the same as those of an Asian Restaurant's kitchen. Come on! You can't be cooking Egg Fried Rice in a Bakery (unless you want to piss off Uncle Rogers 👀).

![Uncle Roger expressing frustration.](https://cdn.hashnode.com/res/hashnode/image/upload/v1753870906060/e4a26446-8c9d-4df3-b943-36813345880a.gif align="center")

In a browser, for instance, you can manipulate web pages using DOM APIs, but you cannot access your computer's files directly. Switch to Node JS, and suddenly, you can interact with your operating system, but DOM manipulation is off-limits. Internally, both of these environments use the same Google V8 JavaScript Engine. The browser provides various Web APIs, including the DOM API, Timers API, History API, and Navigation API, among others. Node JS has C++ bindings for OS-level access and the Thread Pool. The JavaScript Engine does not inherently perform these by itself.

Whenever the JavaScript Engine encounters any tasks accessing these API's, such as a timeout or an AJAX call, it passes them to the Runtime Environment. Now, if these tasks are synchronous, the Engine will block the code execution and wait for the Runtime Environment to return. For asynchronous calls, the Engine does not wait. It passes them to the Runtime Environment and continues executing the code further. It's like baking a cake. You prepare the batter and place it in the oven to bake. And while the cake is in the oven, you prepare the frosting in the meantime.

![A setTimeout function is pushed to the call stack. It is then passed to the Web APIs area with its 5000ms timer running.](https://cdn.hashnode.com/res/hashnode/image/upload/v1753871859080/ab5b0e2c-c354-4713-bfba-cbb66c803b81.gif align="center")

Okay, but then, what happens once the Runtime Environment finishes these tasks? Well, this is how it goes. When the Engine makes an asynchronous API call to the Runtime Environment, it also registers a **Callback Function** with the call. The direction for the Runtime Environment is that upon the **"event"** of completion of the task, call for the execution of the registered function.

```js
setTimeout(()=> alert("Timeout Baby"),5000);
```

Take a look at the call for setting up a timeout after 5 seconds. The first argument is the callback function to execute whenever someone clicks the button. When the Engine encounters this statement, it does not wait for the timeout to happen. It offloads this task to the Runtime Environment and goes to the following statement. Now, whenever this timer runs out, the Runtime Environment queues the callback function for execution.

And how are these queued-up functions tracked and executed? Well, that's where the Task Queues and the Event Loop come into play.

## Task Queues and the Event Loop

**Task Queues** are data structures that keep track of callback functions that are up for execution. But, before moving ahead with this, know that asynchronous APIs generally fall into two categories: **Callback-based APIs** and **Promise-based APIs**. The key difference is that Callback-based APIs require you to pass the callback function directly as an argument. In contrast, the Promise-based APIs return a Promise object that you can attach callbacks to using `.then()` or handle with async/await. Don't worry if you have no idea about Promises. We don't need to understand them in depth at present. For now, think of it like getting a payment from a client. You can either give them your payment details and the directions to make the payment (Callback), or they can write you a check (Promise) that you can cash out yourself.

But if we don't need to know them just yet, then why am I telling you all this? That's because where the attached callback functions get queued depends on the type of API that registered them. There are two separate queues for both of them.

* **Macrotask Queue**, also known as Callback Queue, tracks functions queued by Callback-based APIs.
    
* **Microtask Queue** tracks functions queued by settled Promises.
    

Here, the queued functions wait for the Call Stack to be empty. Once empty, these functions are moved to the Call Stack in FIFO (First In First Out) order for execution.

![After the 5000ms timer finishes, the callback is moved from the Web API section to the macrotask queue, waiting for execution.](https://cdn.hashnode.com/res/hashnode/image/upload/v1753871940660/4b11b977-690e-4df5-a551-17972391662d.gif align="center")

The **Event Loop** handles this entire process. It is a mechanism that continuously monitors the call stack and the queues. Whenever the Call Stack is empty, it checks the Task Queues for queued functions and moves them to the Call Stack for execution, if there are any. This cycle repeats indefinitely as long as the application is running.

![The event loop checks that the call stack is clear and pushes the macrotask (timeout callback) onto the call stack for execution.](https://cdn.hashnode.com/res/hashnode/image/upload/v1753871993319/4cd852c6-6f55-4fcd-803c-99df4b3cee9f.gif align="center")

The Event Loop has a priority for the Microtask Queue. So, it first checks the microtask queue. If there are any microtasks, they are pushed to the call stack for execution until the queue is empty. Only after the Microtask queue is empty does it check the Macrotask queue. Okay, so if the Microtask queue has priority over the Macrotask queue, what will happen if there are a lot of Microtasks? Wouldn't the Macrotask Queue be starved?

You know what, I'll leave that for you to ponder. Think about it. Also, feel free to let me know what you got.

## **Non-blocking Concurrency Model**

This entire flow we've been exploring, i.e., the Runtime Environment, Task Queues, Event Loop, and the orchestration of synchronous and asynchronous code, represents JavaScript's **Non-blocking Concurrency Model**.

Even though JavaScript is single-threaded, it achieves concurrency through this elegant system. The Engine never stops and waits for asynchronous operations to complete. Instead, it hands them off to the Runtime Environment and continues executing, allowing multiple tasks to be "in progress" simultaneously while keeping the main thread responsive and unblocked.

I know this has been a lot of theory stuff. So let me help you visualise this with a simple example. Take a look here.

```js
console.log("Script start"); // sync
setTimeout(() => console.log("Timeout callback"), 0);  // async (macrotask)
Promise.resolve().then(() => console.log("Promise microtask"));  // async (microtask)
console.log("Script end"); // sync
```

Let's trace through this code and see how the JavaScript Runtime Environment handles it.

When the script starts running, the JavaScript Engine begins executing the synchronous code line by line. The first line, `console.log("Script start")`, is synchronous, so it executes immediately and prints *"Script start"* to the console—no queues involved here - just straight execution.

![The JavaScript engine begins execution. "Script start" is logged synchronously to the console.](https://cdn.hashnode.com/res/hashnode/image/upload/v1753872168945/ead8cb2f-469a-4f7a-9ba7-8ba84d697210.gif align="center")

Next comes the interesting part: `setTimeout(() => { console.log("Timeout callback"); }, 0)`. Even though the delay is 0 milliseconds, this is still an asynchronous callback-based API call. The Engine doesn't execute the callback immediately. Instead, it hands this task over to the Runtime Environment and registers the callback function. The Runtime Environment will queue this callback in the Macrotask Queue once the timer expires, which happens instantly. But it still goes through the queue system because that's how asynchronous operations work in JavaScript.

![The setTimeout callback is registered and delegated to the Web APIs. Control moves to the next statement.](https://cdn.hashnode.com/res/hashnode/image/upload/v1753872198815/8cff7ce0-493b-42bc-9769-551c2c677b3d.gif align="center")

The third line brings us another asynchronous operation: `Promise.resolve().then(() => { console.log("Promise microtask"); })`. It is a Promise-based API, and while the Promise resolves immediately, the `.then()` callback doesn't execute right away. The Runtime Environment queues this callback in the Microtask Queue, separate from the setTimeout callback we just saw.

![The resolved Promise’s .then() callback is added to the microtask queue.](https://cdn.hashnode.com/res/hashnode/image/upload/v1753872308658/dce50c84-dd37-454c-a337-b986cb4e2758.gif align="center")

Finally, we have `console.log("Script end")`, which is another synchronous operation. It executes immediately and prints *"Script end"* to the console. At this point, the Engine has executed all the synchronous code, and the Call Stack is empty.

!["Script end" is logged synchronously.](https://cdn.hashnode.com/res/hashnode/image/upload/v1753872319172/e97add26-4205-46de-b347-0f976886a18b.gif align="center")

Now here's where the Event Loop takes centre stage! With the Call Stack empty, the Event Loop checks the queues for any pending callbacks. Remember, it prioritises the Microtask Queue first? So it grabs the Promise callback from the Microtask Queue and pushes it to the Call Stack for execution, printing *"Promise microtask"*. Only after the Microtask Queue is empty does the Event Loop check the Macrotask Queue and execute the setTimeout callback, printing *"Timeout callback"*.

![The call stack is empty. The microtask queue runs next. "Promise microtask" is logged. After all microtasks are completed, the macrotask (timeout callback) runs. "Timeout callback" is logged.](https://cdn.hashnode.com/res/hashnode/image/upload/v1753872328043/d11ccaf8-695b-4e13-a86f-f4ce4671fd2e.gif align="center")

Here's our final output:

```bash
Script start
Script end
Promise microtask
Timeout callback
```

Pretty neat how the Event Loop orchestrates everything, right? It is JavaScript's Non-blocking Concurrency Model at work - the Engine stays responsive, processes synchronous code immediately, delegates asynchronous tasks to the Runtime Environment, and the Event Loop ensures everything gets executed in the proper order without ever blocking the main thread. And that's the beauty of JavaScript's approach to concurrency - it's simple, predictable, and incredibly effective at keeping applications responsive while handling complex asynchronous operations.

## Wrapping Up

And there you have it! We've journeyed through the fascinating world of JavaScript's Runtime Environment and discovered how it enables JavaScript's Non-blocking Concurrency Model. From understanding how the Engine works with APIs and libraries, to seeing how Task Queues and the Event Loop orchestrate asynchronous operations, we've uncovered the magic behind JavaScript's ability to stay responsive while handling complex tasks.

I hope this deep dive helped clarify some of the mysteries of JavaScript execution! If you found this article helpful, I'd love to hear your thoughts. Did anything surprise you? Do you have questions about specific scenarios? Your feedback means a lot to me. So, feel free to connect with me on:

* X: [@AnshumanMahato\_](https://x.com/AnshumanMahato_)
    
* LinkedIn: [/in/anshuman-mahato/](https://www.linkedin.com/in/anshuman-mahato/)
    
* GitHub: [/AnshumanMahato](https://github.com/AnshumanMahato)
    

And if you enjoyed this article, don't forget to share it with fellow developers who might benefit from understanding JavaScript's inner workings.

Until next time, keep coding and stay curious! 🚀