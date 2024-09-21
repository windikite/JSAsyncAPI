My 41st assignment! This was a tough one. First up, using the marvel api to fetch data and display it. Second, a timer app with some special functionality.

Assignment 1  
1. The first thing I was asked to do was obtain the API key and correctly configure the marvel account. This was a bit tricker than expected, but an eventual youtube comment gave the answer: providing a * as a whitelisted domain was all that was needed to allow for a site run in localhost to connect.  
2. After that, I implemented a function to fetch marvel characters via the api endpoint. I used async and await to ensure the function ran smoothly without hitching on unfulfilled promises.  
3. Finally, I implemented a UI and dynamically populated it with a carousel using the fetched data, which was built into slides to browse.  

Assignment 2
1. Firstly, I created a countdown timer that starts from a number you define in seconds. It will update every second, and when it reaches zero it stops.  
2. Then, I implemented a function to display a notification after a predefinied delay using setTimeout. This happens a single time as opposed to the next one.  
3. Lastly, I developed a function that repeatedly displays a notification every 10 seconds that must be dismissed to continue. It piggybacks on the normal countdown function to determine the current time. 

The only thing that this needs to run is a marvel public key to be placed in the keys.js file. 