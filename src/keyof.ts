interface MemoryState {
  testa: boolean;
  testb: string;
}

class Controller {
  state: {
    memory: MemoryState;
  };

  constructor() {
    this.state = {
      memory: {
        testa: true,
        testb: ''
      }
    };
  }

  get<K extends keyof MemoryState>(key: K) {
    return this.state.memory[key];
  }

  set<K extends keyof MemoryState>(
    key: K,
    value: MemoryState[K]
  ): MemoryState[K] {
    this.state.memory[key] = value;
    return value;
  }
}

function getValue (p: Person, k: keyof Person) {
  return p[k];  // 如果k不如此定义，则无法以p[k]的代码格式通过编译
}
