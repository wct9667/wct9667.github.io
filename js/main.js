import * as footer from "./components/footer.js";
import * as contacts from "./components/contacts.js";
import * as navbar from "./components/navbar.js";

HookUpComponent("footer", footer.Generate());
HookUpComponent("contacts", contacts.Generate());
HookUpComponent("navbar", navbar.Generate());


function HookUpComponent(id, component) 
{
  const el = document.getElementById(id);
 
  if (!el) 
    return; 
  
  el.innerHTML = component;
}