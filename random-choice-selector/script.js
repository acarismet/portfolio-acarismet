const tagsEl = document.getElementById('tags')
const areaText = document.getElementById('textarea')

areaText.focus()

areaText.addEventListener('keyup', (e) => {
    generateTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

const generateTags = (input) => {
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
  
  tagsEl.innerHTML = '';

  tags.forEach(tag => {
      const tagEl = document.createElement('span');
      tagEl.classList.add('tag');
      tagEl.innerText = tag;
      tagsEl.appendChild(tagEl);
  });
}


const randomSelect = () => {
  const times = 30;

  const interval = setInterval(() => {
      const randomTag = selectRandomTag();

      if (randomTag !== undefined) {
          highlightTag(randomTag);

          setTimeout(() => {
              unHighlightTag(randomTag);
          }, 100);
      }
  }, 100);

  setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
          const randomTag = selectRandomTag();

          highlightTag(randomTag);
      }, 100);

  }, times * 100);
};


const selectRandomTag = () => {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = (tag) => {
  tag.classList.add('highlight');
};

const unHighlightTag = (tag) => {
  tag.classList.remove('highlight');
};
