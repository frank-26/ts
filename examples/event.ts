
export interface Listener<T> {
  (event: T): any;
}

export interface Disposable {
  dispose(): any;
}

export class TypedEvent<T> {
  private listeners: Listener<T>[] = [];
  private listenersOncer: Listener<T>[] = [];

  public on = (listener: Listener<T>): Disposable => {
    this.listeners.push(listener);

    return {
      dispose: () => this.off(listener)
    };
  };

  public once = (listener: Listener<T>): void => {
    this.listenersOncer.push(listener);
  };

  public off = (listener: Listener<T>) => {
    const callbackIndex = this.listeners.indexOf(listener);
    if (callbackIndex > -1) this.listeners.splice(callbackIndex, 1);
  };

  public emit = (event: T) => {
    this.listeners.forEach(listener => listener(event));

    this.listenersOncer.forEach(listener => listener(event));

    this.listenersOncer = [];
  };

  public pipe = (te: TypedEvent<T>): Disposable => {
    return this.on(e => te.emit(e));
  };
}

interface Bar {
}

interface Foo {
  type: string
}

const onFoo = new TypedEvent<Foo>();
const onBar = new TypedEvent<string>();

onFoo.on(foo => console.log(foo));
onBar.on(bar => bar);

onFoo.emit({type:'foo'});
onBar.emit('bar');


// ClipboardEvent<T = Element> // 剪贴板事件对象
// DragEvent<T = Element> // 拖拽事件对象
// ChangeEvent<T = Element> // Change 事件对象
// KeyboardEvent<T = Element> // 键盘事件对象
// MouseEvent<T = Element> // 鼠标事件对象
// TouchEvent<T = Element> // 触摸事件对象
// WheelEvent<T = Element> // 滚轮事件对象
// AnimationEvent<T = Element> // 动画事件对象
// TransitionEvent<T = Element> // 过渡事件对象


