

function ex1(): Promise<boolean> {
  return fetch('https://microsoft.com').then( result => result.ok );
}