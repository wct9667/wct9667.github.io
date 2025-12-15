import * as footer from "./components/footer.js";
import * as contacts from "./components/contacts.js";

HookUpComponent("footer", footer.Generate());
HookUpComponent("contacts", contacts.Generate());


function HookUpComponent(id, component) 
{
  const el = document.getElementById(id);
 
  if (!el) 
    return; 
  
  el.innerHTML = component;
}