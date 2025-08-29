1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Solution:
getElementById : returns an  ID
getElementsByClassName : returns a live collection of elements 
querySelector: returns first element which  matches a CSS selector.

2.How do you create and insert a new element into the DOM?
Solution:
const li = document.createElement('li');
li.textContent = 'Buy milk';
document.querySelector('#todo').appendChild(li);

3.What is Event Bubbling and how does it work?
Solution:
Event bubbling is when an event happens on an element and then automatically passes up through its parent elements in the DOM.

4.What is Event Delegation in JavaScript? Why is it useful?
Solution:
Event delegation is a technique where instead of adding event listeners to many child elements, you add a single listener to their parent and use event.target to figure out which child was clicked. It’s useful because it saves memory, makes code cleaner, and automatically works for new elements added later.

5.What is the difference between preventDefault() and stopPropagation() methods?
Solution:
preventDefault() stops browsers default action and  stopPropagation() stops the event from  bubbling up  to  parent elements
