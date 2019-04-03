function getLength(something: string | number): number {
  if (something.length) {
      return something.length;
  } else {
      return something.toString().length;
  }
}

function getLength2(something: string | number): number {
  if ((<string>something).length) {
      return (<string>something).length;
  } else {
      return something.toString().length;
  }
}

function handler(event: Event) {
  const mouseEvent = event as MouseEvent;
}

function handler1(event: Event) {
  const element = event as HTMLElement; // Error: 'Event' 和 'HTMLElement' 中的任何一个都不能赋值给另外一个
}
function handler2(event: Event) {
  const element = (event as any) as HTMLElement; // ok
}