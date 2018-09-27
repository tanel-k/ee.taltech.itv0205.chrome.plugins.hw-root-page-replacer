/* Content script shared library. */
/* DOCUMENT UTILS */
function selectSingleNode(xpath, docObject, docNode) {
  docObject = docObject || document;
  docNode = docNode || docObject;

  return docObject.evaluate(
      xpath,
      docNode,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
     ).singleNodeValue;
}


function selectNodes(xpath, docObject, docNode) {
  docObject = docObject || document;
  docNode = docNode || docObject;

  return docObject.evaluate(
    xpath,
    docNode,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null);
}

function replaceContent(documentContent, docObj) {
  docObj = docObj || document;
  docObj.open();
  docObj.write(documentContent);
  docObj.close();
}
/* /DOCUMENT UTILS */

/* STRING UTILS */
function trimFirst(s, token) {
  if (s.startsWith(token)) {
    return s.substring(token.length);
  }
  return s;
}

function trimLast(s, token) {
  if (s.endsWith(token)) {
    return s.substring(0, s.length - token.length);
  }
  return s;
}

function trimBoth(s, token) {
  return trimFirst(trimLast(s, token), token);
}
/* /STRING UTILS */

/* URL UTILS */
function getProtocol(URL) {
  var match = /^(https?:\/\/)/i.exec(URL);
  if (match.length > 1) {
    return match[1];
  }
}

function getLocalURLParts() {
  var URL = window.location.href.split('?')[0];

  var protocol = getProtocol(URL);
  var trimURL = typeof protocol === 'string'
    ? URL.replace(protocol, '')
    : URL;

  var rootURL;
  var nCut = trimURL.indexOf('/');
  var rootURL = nCut > 0
    ? trimURL.substring(0, nCut)
    : trimURL;

  var path = nCut > 0
    ? trimURL.substring(nCut)
    : '';

  rootURL = trimBoth(rootURL, '/');
  path = trimBoth(path, '/');
  return {
    protocol: protocol,
    root: rootURL,
    pathParts: path.split('/')
  };
}
/* /URL UTILS */
