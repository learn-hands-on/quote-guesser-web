let author = null

fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    document.querySelector('#header').innerText = data.content
    author = data.author
  })

const onClickHandler = () => {
  const guess = document.querySelector('#user_guess').value
  if (guess.toLowerCase() === author.toLowerCase()) {
    document.querySelector('#result').innerText = 'Correct!'
  } else {
    document.querySelector('#result').innerText = `Incorrect! Try Again....`
  }
}