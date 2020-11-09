let stories = [
  {
    title: 'Mission Statement',
    words: [
      'Adjective',
      'Verb 1',
      'Verb 2',
      'Plural Noun 1',
      'Plural Noun 2',
      'Plural Noun 3'
    ],
    output: function (words) {
      return `<p>Our mission is to <span class="word">${words['Verb 1']}</span> our <span class="word">${words['Plural Noun 2']}</span> with <span class="word">${words.Adjective}</span> <span class="word">${words['Plural Noun 3']}</span> that will <span class="word">${words['Verb 2']}</span> their <span class="word">${words['Plural Noun 1']}</span>.</p>`
    }
  },
  {
    title: 'Lunch Room!',
    words: [
      'Animal',
      'Adjective 1',
      'Adjective 2',
      'Vegetable 1',
      'Vegetable 2',
      'Noun',
      'Container'
    ],
    output: function (words) {
      return `<p>Make sure your lunch <span class="word">${words.Container}</span> is filled with <span class="word">${words['Adjective 1']}</span> food. Do not go to the <span class="word">${words['Adjective 2']}</span> food stand across the street from the school. The hamburgers they serve are fried in <span class="word">${words.Noun}</span> and are made of <span class="word">${words.Animal}</span> meat. So take a sandwich made of <span class="word">${words['Vegetable 1']}</span> or <span class="word">${words['Vegetable 2']}</span>, it's much healthier!</p>`
    }
  },

  {
    title: 'Weather Report',
    words: [
      'Adjective 1',
      'Adjective 2',
      'Article of Clothing',
      'Number 1',
      'Number 2',
      'Plural Noun 1',
      'Plural Noun 2'
    ],
    output: function (words) {
      return `<p>Early tomorrow, a <span class="word">${words['Adjective 1']}</span> front will collide with a mass of hot <span class="word">${words['Plural Noun 1']}</span> moving from the north. This means we can expect <span class="word">${words['Adjective 2']}</span> winds and occasional <span class="word">${words['Plural Noun 2']}</span> by late afternoon. Wind velocity will be <span class="word">${words['Number 1']}</span> miles an hour, and the high temperature should be around <span class="word">${words['Number 2']}</span> degrees. So, if you're going out, you had better plan on wearing your<span class="word"> ${words['Article of Clothing']}</span>.</p>`
    }
  }
]
// make buttons respond when clicked

document.getElementById('mission').addEventListener('click', function () {
  addForm('Mission Statement')
})
document.getElementById('lunch').addEventListener('click', function () {
  addForm('Lunch Room!')
})

document.getElementById('weather').addEventListener('click', function () {
  addForm('Weather Report')
})

// function generates form for each story

function addForm (formType) {
  let formOutput = []
  if (formType === 'Mission Statement') {
    formOutput.push('<form>')
    // loop to make form inputs
    for (let i = 0; i < stories[0].words.length; i++) {
      formOutput.push(`<input type="text" id="${stories[0].words[i]}" name="${stories[0].words[i]}" value="${stories[0].words[i]}">`)
    }
    formOutput.push('<button type="button" id="submitMission" >Generate Story!</button>')
    formOutput.push('</form>')
    document.getElementById('container').style = 'display:none'
    document.getElementById('form').style = 'display:block'
    document.getElementById('center-form').innerHTML = formOutput.join(' ')
    document.getElementById('submitMission').addEventListener('click', generateMission)
  } else if (formType === 'Lunch Room!') {
    formOutput.push('<form>')
    for (let i = 0; i < stories[1].words.length; i++) {
      formOutput.push(`<input type="text" id="${stories[1].words[i]}" name="${stories[1].words[i]}" value="${stories[1].words[i]}">`)
    }
    formOutput.push('<button type="button" id="submitLunch" >Generate Story!</button>')
    formOutput.push('</form>')
    document.getElementById('container').style = 'display:none'
    document.getElementById('form').style = 'display:block'
    document.getElementById('center-form').innerHTML = formOutput.join(' ')
    document.getElementById('submitLunch').addEventListener('click', generateLunch)
  } else if (formType === 'Weather Report') {
    formOutput.push('<form>')
    for (let i = 0; i < stories[2].words.length; i++) {
      formOutput.push(`<input type="text" id="${stories[2].words[i]}" name="${stories[2].words[i]}" value="${stories[2].words[i]}">`)
    }
    formOutput.push('<button type="button" id="submitWeather" >Generate Story!</button>')
    formOutput.push('</form>')
    document.getElementById('container').style = 'display:none'
    document.getElementById('form').style = 'display:block'
    document.getElementById('center-form').innerHTML = formOutput.join(' ')
    document.getElementById('submitWeather').addEventListener('click', generateWeather)
  }
}
// functions generate text from form input 
function generateMission () {
  let words = {}
  // loop to get inputs
  for (let i = 0; i < stories[0].words.length; i++) {
    let word = document.getElementById(stories[0].words[i]).value
    words[stories[0].words[i]] = word
  }
  document.getElementById('container').innerHTML = stories[0].output(words)
  document.getElementById('container').style = 'display:block'
  document.getElementById('form').innerHTML = ''
}

function generateLunch () {
  let words = {}
  for (let i = 0; i < stories[1].words.length; i++) {
    let word = document.getElementById(stories[1].words[i]).value
    words[stories[1].words[i]] = word
  }
  document.getElementById('container').innerHTML = stories[1].output(words)
  document.getElementById('container').style = 'display:block'
  document.getElementById('form').innerHTML = ''
}

function generateWeather () {
  let words = {}
  for (let i = 0; i < stories[2].words.length; i++) {
    let word = document.getElementById(stories[2].words[i]).value
    words[stories[2].words[i]] = word
  }
  document.getElementById('container').innerHTML = stories[2].output(words)
  document.getElementById('container').style = 'display:block'
  document.getElementById('form').innerHTML = ''
}
