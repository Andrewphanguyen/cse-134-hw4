/* dom.js */

function init() {
    let element = document.getElementById('walkBtn');
    element.addEventListener('click', function () {
        walk();
    });

     element = document.getElementById('walkBtn2');
    element.addEventListener('click', function () {
        advancedWalk();
    });

    element = document.getElementById('modifyBtn');
    element.addEventListener('click', function () {
        modify();
    });

    element = document.getElementById('modifyBtn2');
    element.addEventListener('click', function () {
        modify();
    });

    element = document.getElementById('addBtn');
    element.addEventListener('click', function () {
        add();
    });

    element = document.getElementById('removeBtn');
    element.addEventListener('click', function () {
        remove();
    });

    element = document.getElementById('safeDelete');
    element.addEventListener('click', function () {
        remove();
    });

    element = document.getElementById('walkBtn3');
    element.addEventListener('click', function () {
        remove2();
    });

    element = document.getElementById('basicclone');
    element.addEventListener('click', function () {
        clone();
    });

    element = document.getElementById('AdvancedClone');
    element.addEventListener('click', function () {
        clone2();
    });
}

function walk() {
   let el;

   el = document.getElementById('p1');
   showNode(el);

   el = el.firstChild;
   showNode(el);

   el = el.nextSibling;
   showNode(el);

   el = el.lastChild;
   showNode(el);

   el = el.parentNode.parentNode.parentNode;
   showNode(el);

   el = el.querySelector('section > *');
   showNode(el);


}

function advancedWalk() {
    let el;
 
    el = document.getElementById('first');
    let num = 0;
    getTree(el, num);

   
 }

function getTree(el, num) {
    
    let out1 = document.getElementById('output1');
    
    if(el === null) {
        return;
    }

    
    showNodeName(el,num);

   num++;
    
    getTree(el.firstChild, num);
    
   
    getTree(el.nextSibling, num)

    
    getTree(el.lastChild, num)
}

function showNode(el) {
    let nodeType = el.nodeType;
    let nodeName = el.nodeName;
    let nodeValue = el.nodeValue;

    //alert(`Node type: ${nodeType}\nNode name: ${nodeName}\nNode value: ${nodeValue}`);
    let out1 = document.getElementById('output1');
  

    
        out1.innerHTML += `\nNode type: ${nodeType}\nNode name: ${nodeName}\nNode value: ${nodeValue}\n`;
       

}

function showNodeName(el,num) {
    
    let nodeName = el.nodeName;
    

    let out1 = document.getElementById('output1');
  
    out1.innerHTML += `\n`;
       
    for(let i = 0; i < num; i++) {
        out1.innerHTML += `-`;
    }
        out1.innerHTML += `|--${nodeName}\n`;
       

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function modify() {
    let el = document.getElementById('p1');
    let el2 = document.getElementsByClassName('shmancy');


   
    heading.innerHTML = "DOM Manipulation is Fun!";
    let num = getRandomInt(6);
    if(num == 0) {
        heading.style.color = 'black';

    } else if(num == 1) {
        heading.style.color = 'darkslategray';
    } else if(num == 2) {
        heading.style.color = 'darkgreen';
    } else if(num == 3) {
        heading.style.color = 'darkgoldenrod';
    } else if(num == 4) {
        heading.style.color = 'darkred';
    } else if(num == 5) {
        heading.style.color = 'darkmagenta';
    }
   
    // You can do all the properties one by one if you know them in HTML
   // el.title = 'I was changed by JS';

    // you can update the style as a string
    // el.style = 'color: blue; font-size: 1em;';

    // you also may prefer to update on the CSS object.  This is the same as above
    // el.style.color = 'blue';
    // el.style.fontSize = '1em';
    // be careful doing many styles bit by bit it isn't efficent, might be easier just to set a class

    // you can also update the class list
    //el.classList.add('fancy');
    el2[0].classList.add('fancy2');
   

    // you can also update the dataset which change data-* attributes
    //el.dataset.cool = 'true';       // data-cool="true"
    //el.dataset.coolFactor = '9000'; //data-cool-factor="9000"

}

function add() {

    let p, em, txt1, txt2, txt3;


    let oldP = document.getElementById('p1');

    const input = document.getElementById('addBtn2');
    const input2 = document.getElementById('outt');
    const btn = document.querySelector('#addBtn');
    const sb = document.querySelector('#women')
    const date = new Date();
    const localeString = date.toLocaleString('en', { timeZone: 'UTC' });

    btn.onclick = (event) => {
        
        if(sb.selectedIndex == 1) {
            
                if(input.value.length == 0) {
                    let textNode = document.createTextNode("text node" + " " + localeString); 
                    input2.appendChild(textNode);
                } else {
                    let textNode = document.createTextNode(input.value); 
                    input2.appendChild(textNode);
                }
            
               

            

           




        } else if(sb.selectedIndex == 2) {
            if(input.value.length == 0) {
                let commenttNode = document.createComment("comment text" + " " + localeString); 

                
                console.log(commenttNode);
            input2.appendChild(commenttNode);
            } else {
                let commenttNode = document.createComment(input.value); 

               
                console.log(commenttNode);
            input2.appendChild(commenttNode);
            }
            
            

        } else if(sb.selectedIndex == 3) {

            if(input.value.length == 0) {
                
                let ElementtNode = document.createElement('NewElement', { content: localeString }); 
                let textNode = document.createTextNode("New Element"); 
                ElementtNode.appendChild(textNode);
                
                input2.appendChild(ElementtNode);
            
            
            input2.appendChild(ElementtNode);
            } else {
                let ElementtNode = document.createElement(input.value); 
            let textNode = document.createTextNode("New Element"); 
            ElementtNode.appendChild(textNode);
            
            input2.appendChild(ElementtNode);
            }
            
        }
        
    };









    // first we do things the long old-fashioned standard DOM way
    p = document.createElement('p'); // <p></p>
    em = document.createElement('em'); // <em></em>
    txt1 = document.createTextNode('This is a '); // "This is a"
    txt2 = document.createTextNode('test'); // "test"
    txt3 = document.createTextNode(' of the DOM'); // " of the DOM"

    p.appendChild(txt1); // <p>This is a</p>
    em.appendChild(txt2); // <em>test</em>
    p.appendChild(em); // <p>This is a<em>test</em></p>
    p.appendChild(txt3); // <p>This is a<em>test</em> of the DOM</p>

    // go an insert this new copy below the old one
    oldP.parentNode.insertBefore(p, oldP.nextSibling);

    // Alternative method using innerHTML and insertAdjacentHTML
    // let oldP = document.getElementById('p1');
    // oldP.insertAdjacentHTML('afterend', '<p>This is a<em>test</em> of the DOM</p>');
    // clearly short hands are pretty easy!
}

function remove() {
   // const el = document.getElementById('controls');
    
    let el;
   
 
    el = document.getElementById('controls');
    
    
   

    el.parentElement.replaceWith(el);
    el.parentElement.replaceWith(el);
}

function remove2() {
    let removes = document.getElementById('output3');

    let el = Array.from(document.getElementsByClassName(removes.value));
el.forEach(ele => {
 ele.remove();
});



}

function clone() {
   let el = document.getElementById('p1');

   let el2 = el.cloneNode();

   el.appendChild(el2);
}

function clone2() {
    let el = document.getElementsByTagName('template')[0];
 
    let el2 = el.content.cloneNode(true);
    document.body.appendChild(el2);
    
   


   
    el2.innerHTML += "new template";
    
    el2.innerHTML += Math.random();
    
   
 }

window.addEventListener('DOMContentLoaded', init);