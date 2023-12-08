const listItems = [] // used to store references to the list items (HTML <li> elements) that are created and added to the result element.
const filter = document.getElementById('filter') // input field
const result = document.getElementById('result')

getData(); // calls function below which needs to run async

filter.addEventListener('input', (e) => filterData(e.target.value));

// With filterData func filtering list looks lively
const filterData = (searchTerm) => {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
};


async function getData() {
    const res = await fetch('https://randomuser.me/api?results=120')

    const { results } = await res.json() // The response JSON is extracted by using await json() and array of users is stored in the results

    result.innerHTML = '' // helps to remove any previous data.

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })
}
