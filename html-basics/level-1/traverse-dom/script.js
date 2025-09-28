const walk_the_DOM = function walk(node, callback) {
  callback(node);
  node = node.firstChild;
  while (node) {
    walk(node, callback);
    node = node.nextSibling;
  }
};

const loggerCallback = function (node) {
  if (node.nodeType === 1) {
    console.log(`Element Node: <${node.nodeName.toLowerCase()}>`);
  } else if (node.nodeType === 3 && node.nodeValue.trim() !== "") {
    console.log(`Text Node: "${node.nodeValue.trim().substring(0, 20)}..."`);
  } else if (node.nodeType === 8) {
    console.log(`Comment Node: `);
  }
};

walk_the_DOM(document.body, loggerCallback);
