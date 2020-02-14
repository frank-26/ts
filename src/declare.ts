// declare var jQuery: (selector: string) => any;
declare function jQuery(selector: string) : any;


declare class Animal {
  constructor(name: string);
  sayHi(): string;
}

export { Animal }

declare enum Directions {
  Up,
  Down,
  Left,
  Right
}

declare namespace jQuery {
  function ajax(url: string, settings?: any): void;
  const version: number;
  class Event {
      blur(eventType: EventType): void
  }
  enum EventType {
      CustomClick
  }
}

interface AjaxSettings {
  method?: 'GET' | 'POST'
  data?: any;
}
declare namespace jQuery {
  function ajax(url: string, settings?: AjaxSettings): void;
}

// user
let settings: AjaxSettings = {
  method: 'POST',
  data: {
      name: 'foo'
  }
};
jQuery.ajax('/api/post_something', settings);

import * as foo from 'foo'

console.log(foo)