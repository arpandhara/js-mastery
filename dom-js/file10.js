const rootNode = document.getRootNode();
console.log(rootNode); // here the root node is the document 
const htmlElementNode = rootNode.childNodes[0]; // it returns a node list and here the child is html 
console.log(htmlElementNode);
console.log(htmlElementNode.childNodes);

// propeties generally used 

// childNodes
// children
// htmlElementNode.parentNode



