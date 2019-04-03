declare module 'foo' {
  // some variable declarations
  export var bar: number;
}

declare namespace Utility {
  export function log(msg){
    console.log(msg);
  }
  export function error(msg){
    console.log(msg);
  }
}

// usage
// Utility.log('Call me');
// Utility.error('maybe');