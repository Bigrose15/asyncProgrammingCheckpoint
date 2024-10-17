//TASK 1
//Write an async function iterateWithAsynAwait that takes an array of values and logs each value with delay of 1 second between logs

//SOLUTION:
//Firstly we write a fuction that delays for a given time
//Secondly we write a function that logs the values of an array with delay of a second between logs.
//PROMISE Fuction that delays for a given time

const delayFunction = (timeInMs) => {
  return new Promise((resolve, reject) => {
    if (timeInMs < 0) {
      reject("invalid time");
    } else {
      setTimeout(() => {
        resolve();
      }, timeInMs);
    }
  });
};

//Function that logs the values of an array with delay of one (1) second between logs, the delay is achieved by using the delayFunction

const iterateWithAsynAwait = async (arrayOFValues) => {
  for (eachElement of arrayOFValues) {
    //this line loops through the array of values
    try {
      console.log(eachElement);
      await delayFunction(1000); //this line delays the loop for a second. The delay is achieved by using the delayFunction declared above.
    } catch (error) {
      console.log(error);
      break;
    }
  }
};

iterateWithAsynAwait(["how", "are", "you", "doing", "today"]); // this line calls the function

// //TASK 2 & 3A
// //Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.

// //TASK 3A:
// //Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.

// //SOLUTION:
// //Firstly we write an async function that calls the fetch function
// //Secondly we fetch data from an API and logs the data to the console

// //Async function that calls the fetch function
const awaitCall = async () => {
  try {
    //fetching data from an API
    const response = await fetch("https://api.github.com/users"); //this line fetches data from the API and stores it in the response variable
    const data = await response.json(); // this line parses the response to json to valid js object
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

awaitCall(); // this line calls the function

// //TASK 3B:
// //Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.

// //SOLUTION:
// //Firstly we write three async functions that logs a message after a delay of 1 second using await and the delayFunction declared above
// //Secondly we chain the three async functions using await

// //Sequential three different async functions that logs a message after a delay of 1 second

// //First Function:
const firstFunction = async () => {
  await delayFunction(1000);
  console.log("First Function");
};
//Second Function:
const secondFunction = async () => {
  await delayFunction(1000);
  console.log("Second Function");
};
//Third Function:
const thirdFunction = async () => {
  await delayFunction(1000);
  console.log("Third Function");
};

//Chaining the three async functions using await
const chainedAsyncFunctions = async () => {
  await firstFunction();
  await secondFunction();
  await thirdFunction();
};

chainedAsyncFunctions(); // this line calls the function

// //TASK 4: AWAITING CONCURRENT REQUESTS:
// //Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved.

// //SOLUTION:
// //Firstly we write an async function that makes two API calls concurrently using the await and Promise.all() method and store the responses in an array of responses. i.e response1 and response2
// //Secondly we use the fecth function to make the API calls
// //Thirdly we parse the responses to json to valid js object and store the data in an array of data.
// //Lastly we log the combined results after both requests have resolved.

const concurrentRequests = async () => {
  try {
    const [response1, response2] = await Promise.all([
      //this line makes two API calls concurrently using Promise.all(). it stores the responses in an array of responses. i.e response1 and response2. the responses are fetched from two different APIs using the fetch function.
      fetch("https://api.github.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ]);
    const [data1, data2] = await Promise.all([
      //this line parses the responses to json to valid js object and stores the data in an array of data. i.e data1 and data2. The data is fetched from the responses using the json() method.
      response1.json(),
      response2.json(),
    ]);
    console.log(data1, data2);
  } catch (error) {
    console.log(error.message);
  }
};

concurrentRequests(); //this line calls the function

// //TASK 5: Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs and fetches data from each URL concurrently using Promise.all(). Log the responses once all requests are complete.

// //SOLUTION:
//Firstly we write an async function that takes an array of URLs
//Secondly we loop through the array of URLs
//Thirdly we fetch data from each URL concurrently using Promise.all() and store the data in a variable
//Lastly we log the responses once all requests are complete

const parallelCalls = async (arrayOfUrls) => {
  for (eachElement of arrayOfUrls) {
    try {
      const urlData = await Promise.all([
        fetch(eachElement).then((response) => response.json()),
      ]);
      console.log(urlData);
    } catch (error) {
      console.log(error.message);
    }
  }
};

parallelCalls([
  "https://api.github.com/users",
  "https://jsonplaceholder.typicode.com/posts",
]);
