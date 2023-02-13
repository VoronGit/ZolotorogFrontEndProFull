const mainBody = document.querySelector('#posts');
const commBody = document.querySelector('#comments');
const mainURL = 'https://jsonplaceholder.typicode.com/posts/';

mainBody.addEventListener('click', event => {
    if (event.target.id == 'getComments') {
        fetch(`${mainURL}${event.target.value}/comments`, {
            method: 'GET'
        })
            .then(async (response) => {
                let resultHTML = '';
                if (response.ok) {
                    const json = await response.json();
                    console.log(json);
                    json.forEach(elem => {
                        resultHTML += `<div>
                        <span>
                          <h2>${elem.name}</h2> 
                        </span> 
                        <span>
                          ${elem.body}
                        </span>
                      </div>`;
                    });
                } else {
                    resultHTML = 'Comments not found :(';
                }
                commBody.innerHTML = resultHTML;
            })
            .catch(error => commBody.innerHTML = error)
    }
});

document.getElementById('getPostIdForm').addEventListener('submit', event => {
    event.preventDefault();

    const formDataObj = Object.fromEntries(new FormData(event.target).entries());

    commBody.innerHTML = '';

    fetch(`${mainURL}${formDataObj.id}`, {
        method: 'GET'
    })
        .then(async (response) => {
            if (response.ok) {
                const json = await response.json();
                mainBody.innerHTML = `<div>
                                        <span>
                                          <h1>Title:</h1> ${json.title}
                                        </span> 
                                        <span>
                                          <h1>Body:</h1> ${json.body}
                                        </span>
                                      </div> 
                                      <button id="getComments" value="${json.id}">Get comments</button>`;
            } else {
                mainBody.innerHTML = 'Post not found :(';
            }
        })
        .catch(error => mainBody.innerHTML = error)
});