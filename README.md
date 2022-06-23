# FEC-Team-Green
  In Project Atelier, we revamp a client-facing retail website. We provide it with its own server and a React based, single page app that is interactive and responsive.

  ## Table of Contents
  1. <a href='#description'> Description</a>

  2. <a href='#installation'> Installation</a>

  3. <a href='#project-widgets'> Project Widgets</a>

  4. <a href='#dark-mode'> Dark Mode</a>

  5. <a href='#team-members'> Team Members</a>


---
 ## Description
  We have a cohesive, visualy appealing, and user-friendly website using industry standard practices. Our project includes three main areas of interest in the following order:

  - <a href='#product-overview'> Product Overview</a> -created by Chloe Meinshausen.
  - <a href='#questions-and-answers'> Questions and Answers</a>  -created by Joann Whang
  - <a href='#ratings-and-reviews'> Ratings and Reviews</a> -created by Wen Dai

---
  ## Installation
  To run our project:
  1. clone the project
  2. run  `npm install` to install all dependencies
  3. please generate a Github API key and place it in `/server/.env` as
```
GITHUB_API_KEY=<your key>
```
  *EXAMPLE:*
```
GITHUB_API_KEY=123Jkldsufihflka32484r703utirjk
```
  *If you are using AWS, please place pertinent information in the .env file as well.*

  4. make sure that your .gitignore file contains:
```
## ENVIRONMENT KEYS ##
.env
```
  5. run  `npm run build-dev` to compile our source files in development mode | run  `npm run build-prod` to compile our source files in production mode
  6. run  `npm start`  to start our server and serve our client facing app.

  *  please review our **package-lock.json** file for the most updated list of dependencies
---
 ## Project Widgets
---
  ### Product Overview
* TBD
---
  ### Questions and Answers
* This feature displays any questions associated with this product along with any answers associated with each question. The user can load more questions (2 at a time) using the "More Answered Questions" button which will disappear if there are no more questions. They are also able to load the rest of the answers by clicking the "Load More Answers" text and only show 2 answers by clicking the "Collapse Answers" text.

![fec-moreButtons-GIF](https://user-images.githubusercontent.com/89096566/174423932-40b9f789-b3e5-4970-94c2-9c7884c4e9ae.gif)

* The search bar allows the user to filter the questions according to their search query of three or more characters. 

![fec-search-GIF](https://user-images.githubusercontent.com/89096566/174423937-2510880e-a260-4c66-9d3d-8942b3f69b60.gif)

* The user can indicate if a question or answer is helpful once. They are also able to report an answer once.

![fec-helpfulReport-GIF](https://user-images.githubusercontent.com/89096566/174423949-1b6951c8-2a40-4c12-807a-63d58bc85c5c.gif)

* A modal window appears when the "Add a Question +" button is clicked. The user is able to add a question about the product.

![fec-question-GIF](https://user-images.githubusercontent.com/89096566/174423957-4c45039d-87c8-4c16-ab3d-939802d3ca94.gif)

* A modal window appears when the "Add Answer" link is clicked. The user is able to add an answer for a particular question with the option to include photos.

![fec-answer-GIF](https://user-images.githubusercontent.com/89096566/174423967-17b0c8cd-4a85-49c8-8142-a9fac38acecc.gif)

---
  ### Ratings and Reviews
* The Ratings & Reviews module will allow viewing and submission of reviews for the product selected. The functionality contained within this module can be divided into several pieces:
1. Write new review
2. Reviews List
3. Sorting 
4. Rating Breakdown
5. Product Breakdown

* Reviews list and Sorting 


https://user-images.githubusercontent.com/88808070/175217046-2c02b1c8-bdb1-42d9-a20e-79d93eca3add.mov

* Rating & product breakdown: a breakdown of the ratings received for the product will double as the filtering options for the reviews list


https://user-images.githubusercontent.com/88808070/175217796-3f04ed90-2a21-447b-a931-c2c5bc2fa07d.mov

* Create a new review for the product 


https://user-images.githubusercontent.com/88808070/175218424-8d3e0aaf-1d2c-4b15-8d45-479d5d5e9663.mp4


---
  ## Dark Mode

![fec-darkMode-GIF](https://user-images.githubusercontent.com/89096566/174424293-53755bd7-26c7-4907-a9e7-4d9a9d6e1e5e.gif)
  
---
  ## Team Members

  * Christian Ortiz
  * Wen Dai
  * Joann Whang
  * Chloe Meinshausen
