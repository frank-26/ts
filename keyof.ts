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
