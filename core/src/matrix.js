/**
 * Polyglot-OS 50+ Programming Languages Matrix
 */

export const LANGUAGES_MATRIX = [
  { id: 'python', name: 'Python', paradigm: 'Multi-paradigm', typing: 'Dynamic', memory: 'Garbage Collected', target: 'Bytecode / CPython', speedRank: 8, icon: '🐍' },
  { id: 'javascript', name: 'JavaScript', paradigm: 'Event-driven, Functional', typing: 'Dynamic', memory: 'Garbage Collected', target: 'V8 / Bytecode', speedRank: 6, icon: '📜' },
  { id: 'typescript', name: 'TypeScript', paradigm: 'Static Typed JS', typing: 'Static (compile-time)', memory: 'Garbage Collected', target: 'JavaScript', speedRank: 6, icon: '🔷' },
  { id: 'rust', name: 'Rust', paradigm: 'Systems, Functional', typing: 'Static, Inferred', memory: 'Borrow Checker / RAII', target: 'Native Machine Code', speedRank: 1, icon: '🦀' },
  { id: 'golang', name: 'Go', paradigm: 'Concurrent, Imperative', typing: 'Static', memory: 'Concurrent GC', target: 'Native Machine Code', speedRank: 3, icon: '🐹' },
  { id: 'cpp', name: 'C++', paradigm: 'Multi-paradigm, Systems', typing: 'Static', memory: 'Manual / Smart Pointers', target: 'Native Machine Code', speedRank: 1, icon: '⚡' },
  { id: 'c', name: 'C', paradigm: 'Procedural, Imperative', typing: 'Static', memory: 'Manual (malloc/free)', target: 'Native Machine Code', speedRank: 1, icon: '⚙️' },
  { id: 'csharp', name: 'C#', paradigm: 'Object-Oriented, Functional', typing: 'Static', memory: 'CLR GC', target: 'IL / Native (AOT)', speedRank: 4, icon: '🎯' },
  { id: 'java', name: 'Java', paradigm: 'Class-based, OO', typing: 'Static', memory: 'JVM Generational GC', target: 'JVM Bytecode', speedRank: 4, icon: '☕' },
  { id: 'kotlin', name: 'Kotlin', paradigm: 'Concise OO & Functional', typing: 'Static', memory: 'JVM GC / ARC (Native)', target: 'JVM / Native / JS', speedRank: 4, icon: '💜' },
  { id: 'swift', name: 'Swift', paradigm: 'Protocol-oriented', typing: 'Static', memory: 'ARC (Automatic Ref Counting)', target: 'Native Machine Code', speedRank: 2, icon: '🦅' },
  { id: 'dart', name: 'Dart', paradigm: 'Client-optimized, OO', typing: 'Sound Static', memory: 'Generational GC', target: 'AOT Native / JS', speedRank: 5, icon: '🎯' },
  { id: 'zig', name: 'Zig', paradigm: 'Robust Systems', typing: 'Static', memory: 'Manual (No Hidden Allocations)', target: 'Native Machine Code', speedRank: 1, icon: '⚡' },
  { id: 'nim', name: 'Nim', paradigm: 'Expressive Systems', typing: 'Static', memory: 'ARC / ORC / Deterministic', target: 'C / C++ / JS', speedRank: 2, icon: '👑' },
  { id: 'mojo', name: 'Mojo', paradigm: 'AI & Systems', typing: 'Static', memory: 'ASAP / Ownership', target: 'MLIR / Native', speedRank: 1, icon: '🔥' },
  { id: 'solidity', name: 'Solidity', paradigm: 'Contract-Oriented', typing: 'Static', memory: 'EVM Memory & Storage', target: 'EVM Bytecode', speedRank: 7, icon: '💎' },
  { id: 'vyper', name: 'Vyper', paradigm: 'Smart Contracts', typing: 'Static', memory: 'EVM Memory', target: 'EVM Bytecode', speedRank: 7, icon: '🐍' },
  { id: 'move', name: 'Move', paradigm: 'Resource-Oriented', typing: 'Linear Static', memory: 'Formal Bytecode Verifier', target: 'Move VM', speedRank: 4, icon: '📦' },
  { id: 'cairo', name: 'Cairo', paradigm: 'Zero-Knowledge Proving', typing: 'Static', memory: 'Read-only Non-deterministic', target: 'Cairo VM (STARKs)', speedRank: 5, icon: '📐' },
  { id: 'julia', name: 'Julia', paradigm: 'Numerical & Scientific', typing: 'Multiple Dispatch', memory: 'Garbage Collected', target: 'LLVM JIT Native', speedRank: 2, icon: '🔴' },
  { id: 'r', name: 'R', paradigm: 'Statistical Computing', typing: 'Dynamic', memory: 'Garbage Collected', target: 'Interpreted', speedRank: 9, icon: '📊' },
  { id: 'ruby', name: 'Ruby', paradigm: 'Pure Object-Oriented', typing: 'Dynamic', memory: 'Garbage Collected', target: 'YARV Bytecode', speedRank: 8, icon: '💎' },
  { id: 'php', name: 'PHP', paradigm: 'Web-Focused, OO', typing: 'Gradual / Dynamic', memory: 'Ref Counting + Cycle GC', target: 'Zend OpCache', speedRank: 7, icon: '🐘' },
  { id: 'elixir', name: 'Elixir', paradigm: 'Concurrent, Functional', typing: 'Dynamic', memory: 'BEAM Per-Process Heap', target: 'BEAM Bytecode', speedRank: 5, icon: '💧' },
  { id: 'erlang', name: 'Erlang', paradigm: 'Actor-Based Concurrency', typing: 'Dynamic', memory: 'BEAM Per-Process Heap', target: 'BEAM Bytecode', speedRank: 5, icon: '🔴' },
  { id: 'clojure', name: 'Clojure', paradigm: 'Immutable Lisp', typing: 'Dynamic', memory: 'JVM GC', target: 'JVM Bytecode', speedRank: 5, icon: '☯️' },
  { id: 'haskell', name: 'Haskell', paradigm: 'Pure Functional, Lazy', typing: 'Static, Monadic', memory: 'GHC RTS GC', target: 'Native Machine Code', speedRank: 3, icon: 'λ' },
  { id: 'ocaml', name: 'OCaml', paradigm: 'Functional & Imperative', typing: 'Static, Algebraic', memory: 'Fast Generational GC', target: 'Native Machine Code', speedRank: 2, icon: '🐫' },
  { id: 'scala', name: 'Scala', paradigm: 'Functional & Object', typing: 'Static', memory: 'JVM GC', target: 'JVM / Native', speedRank: 4, icon: '🔴' },
  { id: 'lua', name: 'Lua', paradigm: 'Lightweight Embedded', typing: 'Dynamic', memory: 'Incremental GC', target: 'LuaJIT / Bytecode', speedRank: 3, icon: '🌙' },
  { id: 'bash', name: 'Bash', paradigm: 'Unix Shell Scripting', typing: 'String Untyped', memory: 'Process Lifecycle', target: 'Interpreted', speedRank: 9, icon: '🐚' },
  { id: 'powershell', name: 'PowerShell', paradigm: 'Object Pipeline Shell', typing: 'Dynamic / Strong', memory: '.NET CLR GC', target: '.NET DLR', speedRank: 8, icon: '💻' },
  { id: 'sql', name: 'SQL', paradigm: 'Declarative Relational', typing: 'Static / Schema', memory: 'Database Engine Buffers', target: 'Query Execution Plan', speedRank: 3, icon: '🗄️' },
  { id: 'graphql', name: 'GraphQL', paradigm: 'Declarative Query API', typing: 'Schema Typed', memory: 'Resolver Memory', target: 'AST Resolver', speedRank: 5, icon: '🕸️' },
  { id: 'wasm', name: 'WebAssembly', paradigm: 'Stack-based Bytecode', typing: 'Static', memory: 'Linear Memory Buffer', target: 'V8 / Wasmtime Native', speedRank: 1, icon: '🌐' },
  { id: 'assembly', name: 'Assembly (x86_64)', paradigm: 'Low-Level Hardware', typing: 'Untyped Bitfields', memory: 'Direct CPU Registers & RAM', target: 'Raw Machine Opcodes', speedRank: 1, icon: '💾' },
  { id: 'arm_asm', name: 'Assembly (ARM64)', paradigm: 'RISC Architecture', typing: 'Untyped Bitfields', memory: 'Registers X0-X31', target: 'ARM Machine Opcodes', speedRank: 1, icon: '📱' },
  { id: 'vlang', name: 'V', paradigm: 'Simple & Fast Systems', typing: 'Static', memory: 'Autofree / Manual', target: 'C / Native Machine Code', speedRank: 2, icon: '✌️' },
  { id: 'prolog', name: 'Prolog', paradigm: 'Logic Programming', typing: 'Dynamic Unification', memory: 'Heap & Stack Backtracking', target: 'WAM Bytecode', speedRank: 6, icon: '🦉' },
  { id: 'lisp', name: 'Common Lisp', paradigm: 'Symbolic AI, Functional', typing: 'Dynamic / Gradual', memory: 'Garbage Collected', target: 'Native Machine Code (SBCL)', speedRank: 3, icon: '괄' },
  { id: 'fortran', name: 'Fortran', paradigm: 'HPC & Numerical Arrays', typing: 'Static', memory: 'Stack & Array Descriptors', target: 'Native Machine Code', speedRank: 1, icon: '📐' },
  { id: 'cobol', name: 'COBOL', paradigm: 'Banking & Financial Core', typing: 'Static Fixed-Format', memory: 'Static Data Divisions', target: 'Native / JVM Machine Code', speedRank: 4, icon: '🏦' }
];

export function getLanguageById(id) {
  return LANGUAGES_MATRIX.find(l => l.id === id) || null;
}

export function searchLanguages(query) {
  if (!query) return LANGUAGES_MATRIX;
  const q = query.toLowerCase();
  return LANGUAGES_MATRIX.filter(l => l.name.toLowerCase().includes(q) || l.paradigm.toLowerCase().includes(q) || l.typing.toLowerCase().includes(q));
}
