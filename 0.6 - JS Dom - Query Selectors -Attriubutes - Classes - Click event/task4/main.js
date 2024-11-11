const sidebar = document.createElement('div');
sidebar.id = 'sidebar';
sidebar.style.width = '200px';
sidebar.style.height = '100vh';
sidebar.style.backgroundColor = 'cadetblue';
sidebar.style.position = 'fixed';
sidebar.style.top = '0';
sidebar.style.left = '-200px'; 
sidebar.style.padding = '20px';
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

const link1 = document.createElement('a');
link1.innerText = 'BigTexts';
link1.href = 'task1/task1.html';
link1.style.display = 'block';
link1.style.width = '100%';
link1.style.marginBottom = '15px';
link1.style.color = '#fff';
link1.style.textDecoration = 'none';
link1.style.fontSize = '1rem';
link1.style.fontFamily = 'Arial, sans-serif';
link1.style.transition = 'opacity 0.6s ease';
sidebar.appendChild(link1);

const link3 = document.createElement('a');
link3.innerText = 'Bootstrap';
link3.href = 'task2/task2.html';
link3.style.display = 'block';
link3.style.marginBottom = '15px';
link3.style.color = '#fff';
link3.style.textDecoration = 'none';
link3.style.fontSize = '1rem';
link3.style.fontFamily = 'Arial, sans-serif';
link3.style.transition = 'opacity 0.6s ease';
sidebar.appendChild(link3);

const link2 = document.createElement('a');
link2.innerText = 'Calculator';
link2.href = 'task3/task3.html';
link2.style.display = 'block';
link2.style.marginBottom = '15px';
link2.style.color = '#fff';
link2.style.textDecoration = 'none';
link2.style.fontSize = '1rem';
link2.style.fontFamily = 'Arial, sans-serif';
link2.style.transition = 'opacity 0.6s ease';
sidebar.appendChild(link2);

const link4 = document.createElement('a');
link4.innerText = 'Sidebar';
link4.href = 'task4.html';
link4.style.display = 'block';
link4.style.marginBottom = '15px';
link4.style.color = '#fff';
link4.style.textDecoration = 'none';
link4.style.fontSize = '1rem';
link4.style.fontFamily = 'Arial, sans-serif';
link4.style.transition = 'opacity 0.6s ease';
sidebar.appendChild(link4);

link1.onmouseover = () => link1.style.opacity = '0.6'
link1.onmouseout = () => link1.style.opacity = '1'

link2.onmouseover = () => link2.style.opacity = '0.6'
link2.onmouseout = () => link2.style.opacity = '1'

link3.onmouseover = () => link3.style.opacity = '0.6'
link3.onmouseout = () => link3.style.opacity = '1'

link4.onmouseover = () => link4.style.opacity = '0.6'
link4.onmouseout = () => link4.style.opacity = '1'

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
closeButton.style.color = '#333';
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