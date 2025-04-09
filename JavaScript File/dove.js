const api_url = "https://api.api-ninjas.com/v1/quotes/random";

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
}

getQuote(api_url);