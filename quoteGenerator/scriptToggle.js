const quotes = ['"The only way to do great work is to love what you do." - Steve Jobs', 
'"In three words I can sum up everything I\'ve learned about life: it goes on." - Robert Frost', 
'"Be yourself; everyone else is already taken." - Oscar Wilde', 
'"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt', 
'"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill', 
'"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt', 
'"You miss 100% of the shots you don\'t take." - Wayne Gretzky', 
'"Life is what happens when you\'re busy making other plans." - John Lennon', 
'"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela', 
'"Don\'t count the days, make the days count." - Muhammad Ali',
'"Believe you can and you\'re halfway there." - Theodore Roosevelt',
'"Your time is limited, don\'t waste it living someone else\'s life." - Steve Jobs',
'"The best way to predict the future is to create it." - Peter Drucker',
'"Happiness is not something ready made. It comes from your own actions." - Dalai Lama',
'"The only person you are destined to become is the person you decide to be." - Ralph Waldo Emerson',
'"The way to get started is to quit talking and begin doing." - Walt Disney',
'"Don\'t watch the clock; do what it does. Keep going." - Sam Levenson',
'"It does not matter how slowly you go as long as you do not stop." - Confucius',
'"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
'"Life is what happens when you\'re busy making other plans." - John Lennon'];

const btn = document.getElementById("btn");
const quote = document.querySelector(".quote");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    quote.textContent = quotes[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * quotes.length);
}