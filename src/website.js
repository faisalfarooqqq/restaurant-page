import { homepageComponent } from "./homepage";
import { contactInfoComponent } from "./contact";
import { menuComponent } from "./menu";

function titleContainer(){ 
    const titleDiv = document.createElement('div');
    titleDiv.textContent = "Timmy's";
    return titleDiv;
}

function navContainer(){
    const navBar = document.createElement('div');
    
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact Us";

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);

    return navBar;
}

function contentContainer(){
    const contentDiv = document.createElement('div');


    contentDiv.appendChild(menuComponent());


    return contentDiv;

}


function initializeWebsite(){

    const wrapper = document.getElementById('wrapper');
    
    wrapper.appendChild(titleContainer());
    wrapper.appendChild(navContainer());
    wrapper.appendChild(contentContainer());
    
    
    return wrapper;

}

export {initializeWebsite};