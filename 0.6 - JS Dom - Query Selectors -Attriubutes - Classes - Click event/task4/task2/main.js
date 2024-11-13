const BackButton = document.createElement('button');
BackButton.innerText = 'Back';
BackButton.style.position = 'fixed';
BackButton.style.top = '90px';
BackButton.style.left = '20px';
BackButton.style.backgroundColor = 'cadetblue'
BackButton.style.border = 'none';
BackButton.style.color = 'white';
BackButton.style.padding = '10px';
BackButton.style.fontSize = '1rem';
BackButton.style.cursor = 'pointer';
document.body.appendChild(BackButton);

BackButton.onclick = () => {
    location.href = '../task4.html'
};

const App = document.createElement('div');
App.id = 'app';
App.className = 'container';
document.body.appendChild(App);

const Main = document.createElement('div');
Main.className = 'main'
const İmgMain = document.createElement('img');
İmgMain.src = 'img/main2.png'
İmgMain.width = '1080'
İmgMain.height = '310'

Main.appendChild(İmgMain);
App.appendChild(Main);

const row = document.createElement('div');
row.className = 'col-mt-4'
App.appendChild(row);

for (let i = 0; i < 3; i++) {
    const cols = document.createElement('div');
    cols.className = 'col-md-4'
 row.appendChild(cols);  

 const divcols = document.createElement('div');
divcols.className = 'divcols';
cols.appendChild(divcols);

const ImgCols = document.createElement('img');
ImgCols.src = 'img/img3.png';
ImgCols.width = '310'
ImgCols.height = '180'
divcols.appendChild(ImgCols);

const AllTexts = document.createElement('div');
AllTexts.style.padding = '20px'
cols.appendChild(AllTexts);

const title = document.createElement('h6');
title.className = 'text-muted';
title.textContent = 'Indonecetus facilis';
AllTexts.appendChild(title);

const description = document.createElement('p');
description.className = 'text-muted';
description.textContent = 'Nullam ac nisi dui. Ipsum consectetue lobortis non euisque morbi penatis dapibus urna.';
AllTexts.appendChild(description);

const readMore = document.createElement('a');
readMore.href = '#';
readMore.className = 'text-warning';
readMore.textContent = 'Read More »';
readMore.style.textAlign = 'center';
AllTexts.appendChild(readMore);
}