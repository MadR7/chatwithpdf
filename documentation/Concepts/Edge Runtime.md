


Before learning about Edge Runtime itself, I had to first understand why I even need it in the first place

Traditionally, if you are in Asia and you build your application in Asia, you will probably have the server in Asia as well. 

This is completely fine if most of your userbase is situated within Asia, but for example if someone outside of Asia tries to make a request to the server, their experience will be very slow.


This is where Edge Runtime comes into play:

Instead of deploying the server into only one location, it duplicates the code and is able to deploy the code into multiple [[CDNs]].
But obviously nothing is free. 

What are the tradeoffs of using Edge Runtime?
- The packages need to be much smaller
- You won't be able to use all of the Node APIs

But, this will make the user experience much faster 

I will exploring this concept while I build this project

