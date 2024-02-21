const membersContainer = document.querySelector('.members');
const gridViewButton = document.querySelector('#grid-view');
const listViewButton = document.querySelector('#list-view');

gridViewButton.addEventListener('click', () => {
  membersContainer.classList.remove('list-view');
  membersContainer.classList.add('grid-view');
});

listViewButton.addEventListener('click', () => {
  membersContainer.classList.remove('grid-view');
  membersContainer.classList.add('list-view');
});

fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(member => {
      const memberElement = document.createElement('div');
      memberElement.classList.add('member');
      memberElement.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}">${member.website}</a>
        <p>${member.membershipLevel}</p>
        <p>${member.otherInfo}</p>
      `;
      membersContainer.appendChild(memberElement);
    });
  })
  .catch(error => console.error('Error:', error));
