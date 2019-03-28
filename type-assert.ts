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