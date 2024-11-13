const sidebar = document.createElement('div');
sidebar.id = 'sidebar';
sidebar.style.width = '200px';
sidebar.style.height = '100vh';
sidebar.style.backgroundColor = 'cadetblue';
sidebar.style.position = 'fixed';
sidebar.style.top = '0';
sidebar.style.left = '-200px'; 
// sidebar.style.padding = '20px';
sidebar.style.boxSizing = 'border-box';
sidebar.style.transition = 'left 0.3s ease'; 
document.body.appendChild(sidebar);

const sidebarTitle = document.createElement('h2');
sidebarTitle.innerText = 'Homeworks';
sidebarTitle.style.color = '#fff'
sidebarTitle.style.fontFamily = 'Arial, sans-serif';
sidebarTitle.style.fontSize = '1.5rem';
sidebarTitle.style.marginBottom = '20px';
sidebar.appendChild(sidebarTitle);

const divA = document.createElement('div');
divA.style.width = '200px';
divA.style.height = '40px';
divA.style.textAlign = 'left';
divA.style.transition = '0.6s ease';
sidebar.appendChild(divA);

const link1 = document.createElement('a');
link1.innerText = 'BigTexts';
link1.href = 'task1/task1.html';
link1.style.display = 'block';
link1.style.width = '100%';
link1.style.padding = '12px 4px'
link1.style.color = '#fff';
link1.style.textDecoration = 'none';
link1.style.fontSize = '1rem';
link1.style.fontFamily = 'Arial, sans-serif';
divA.appendChild(link1);

const divA3 = document.createElement('div');
divA3.style.width = '200px';
divA3.style.height = '40px';
divA3.style.textAlign = 'left'
divA3.style.transition = '0.6s ease'
sidebar.appendChild(divA3);

const link3 = document.createElement('a');
link3.innerText = 'Bootstrap';
link3.href = 'task2/task2.html';
link3.style.display = 'block';
link3.style.width = '100%';
link3.style.padding = '12px 4px'
link3.style.color = '#fff';
link3.style.textDecoration = 'none';
link3.style.fontSize = '1rem';
link3.style.fontFamily = 'Arial, sans-serif';
divA3.appendChild(link3);

const divA2 = document.createElement('div');
divA2.style.width = '200px';
divA2.style.height = '40px';
divA2.style.textAlign = 'left'
divA2.style.transition = '0.6s ease'
sidebar.appendChild(divA2);

const link2 = document.createElement('a');
link2.innerText = 'Calculator';
link2.href = 'task3/task3.html';
link2.style.display = 'block';
link2.style.width = '100%';
link2.style.padding = '12px 4px'
link2.style.color = '#fff';
link2.style.textDecoration = 'none';
link2.style.fontSize = '1rem';
link2.style.fontFamily = 'Arial, sans-serif';
divA2.appendChild(link2);

const divA4 = document.createElement('div');
divA4.style.width = '200px';
divA4.style.height = '40px';
divA4.style.textAlign = 'left'
divA4.style.transition = '0.6s ease'
sidebar.appendChild(divA4);

const link4 = document.createElement('a');
link4.innerText = 'Sidebar';
link4.href = 'task4.html';
link4.style.display = 'block';
link4.style.padding = '12px 4px'
link4.style.color = '#fff';
link4.style.textDecoration = 'none';
link4.style.fontSize = '1rem';
link4.style.fontFamily = 'Arial, sans-serif';
divA4.appendChild(link4);

divA.onmouseover = () => divA.style.backgroundColor = '#52898b'
divA.onmouseout = () => divA.style.backgroundColor = 'cadetblue'

divA2.onmouseover = () => divA2.style.backgroundColor = '#52898b'
divA2.onmouseout = () => divA2.style.backgroundColor = 'cadetblue'

divA3.onmouseover = () => divA3.style.backgroundColor = '#52898b'
divA3.onmouseout = () => divA3.style.backgroundColor = 'cadetblue'

divA4.onmouseover = () => divA4.style.backgroundColor = '#52898b'
divA4.onmouseout = () => divA4.style.backgroundColor = 'cadetblue'

const mainContent = document.createElement('div');
mainContent.id = 'main-content';
mainContent.style.marginLeft = '0'; 
mainContent.style.padding = '20px';
mainContent.style.fontFamily = 'Arial, sans-serif';
document.body.appendChild(mainContent);


const toggleButton = document.createElement('button');
toggleButton.innerText = 'Open';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.left = '20px';
toggleButton.style.backgroundColor = 'cadetblue'
toggleButton.style.border = 'none';
toggleButton.style.color = 'white';
toggleButton.style.padding = '10px';
toggleButton.style.fontSize = '1rem';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

const closeButton = document.createElement('button');
closeButton.innerText = 'X'; 
closeButton.style.position = 'absolute';
closeButton.style.top = '10px';
closeButton.style.right = '10px';
closeButton.style.fontSize = '0.6rem';
closeButton.style.background = 'none';
closeButton.style.border = 'none';
closeButton.style.color = '#fff';
closeButton.style.cursor = 'pointer';
sidebar.appendChild(closeButton);

let sidebarVisible = false;
toggleButton.onclick = () => {
    sidebarVisible = !sidebarVisible;
    if (sidebarVisible) {
        sidebar.style.left = '0'; 
        mainContent.style.marginLeft = '220px'; 
        toggleButton.style.display = 'none';
    } else {
        sidebar.style.left = '-200px'; 
        mainContent.style.marginLeft = '0'; 
        toggleButton.style.display = 'block';
    }
};
closeButton.onclick = () => {
    sidebar.style.left = '-200px'; 
    mainContent.style.marginLeft = '0'; 
    toggleButton.style.display = 'block'; 
};