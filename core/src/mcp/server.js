/**
 * Polyglot-OS Model Context Protocol (MCP) Server
 */

import readline from 'readline';
import { LANGUAGES_MATRIX, getLanguageById, searchLanguages } from '../matrix.js';
import { SyntaxTranspiler, IDIOM_TEMPLATES } from '../transpiler.js';

export class PolyglotMcpServer {
  constructor() {
    this.transpiler = new SyntaxTranspiler();
  }

  getTools() {
    return [
      {
        name: 'polyglot_list',
        description: 'List supported programming languages in the Polyglot-OS matrix.',
        inputSchema: { type: 'object', properties: {} }
      },
      {
        name: 'polyglot_info',
        description: 'Get deep technical specs for a language: paradigm, typing, GC/memory model, speed rank, compile targets.',
        inputSchema: {
          type: 'object',
          properties: {
            languageId: { type: 'string', description: 'Language ID (e.g. rust, python, golang, mojo, zig, solidity)' }
          },
          required: ['languageId']
        }
      },
      {
        name: 'polyglot_transpile',
        description: 'Translate idiom syntax pattern between programming languages.',
        inputSchema: {
          type: 'object',
          properties: {
            pattern: { type: 'string', description: 'Pattern name (functionDef, asyncHttp)' },
            targetLanguage: { type: 'string', description: 'Target language (python, typescript, rust, golang, cpp, indicDevanagari)' }
          },
          required: ['pattern', 'targetLanguage']
        }
      },
      {
        name: 'polyglot_status',
        description: 'Inspect Polyglot-OS system status and founder contact.',
        inputSchema: { type: 'object', properties: {} }
      }
    ];
  }

  async handleCallTool(name, args) {
    switch (name) {
      case 'polyglot_list': {
        const list = LANGUAGES_MATRIX.map(l => ({ id: l.id, name: l.name, icon: l.icon, typing: l.typing, speedRank: l.speedRank }));
        return { content: [{ type: 'text', text: JSON.stringify(list, null, 2) }] };
      }
      case 'polyglot_info': {
        const lang = getLanguageById(args.languageId);
        if (!lang) throw new Error(`Language ${args.languageId} not found in matrix.`);
        return { content: [{ type: 'text', text: JSON.stringify(lang, null, 2) }] };
      }
      case 'polyglot_transpile': {
        const code = this.transpiler.getIdiom(args.pattern, args.targetLanguage);
        return { content: [{ type: 'text', text: code }] };
      }
      case 'polyglot_status': {
        return {
          content: [{
            type: 'text',
            text: JSON.stringify({
              product: 'Polyglot-OS',
              version: '1.0.0',
              languagesCount: LANGUAGES_MATRIX.length,
              founder: 'Amit Sharma (@1nsharma) — Kanpur, India',
              contact: 'amitsharma9976@gmail.com',
              upi: '6393741171@upi'
            }, null, 2)
          }]
        };
      }
      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  }

  startStdio() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
    rl.on('line', async (line) => {
      if (!line.trim()) return;
      try {
        const req = JSON.parse(line);
        const res = await this.handleRpc(req);
        if (res) process.stdout.write(JSON.stringify(res) + '\n');
      } catch (err) {
        process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32603, message: err.message } }) + '\n');
      }
    });
  }

  async handleRpc(req) {
    const { id, method, params } = req;
    if (method === 'initialize') {
      return {
        jsonrpc: '2.0',
        id,
        result: {
          protocolVersion: '2024-11-05',
          serverInfo: { name: 'polyglot-os-mcp', version: '1.0.0' },
          capabilities: { tools: {} }
        }
      };
    }
    if (method === 'tools/list') return { jsonrpc: '2.0', id, result: { tools: this.getTools() } };
    if (method === 'tools/call') {
      try {
        const res = await this.handleCallTool(params.name, params.arguments || {});
        return { jsonrpc: '2.0', id, result: res };
      } catch (err) {
        return { jsonrpc: '2.0', id, error: { code: -32000, message: err.message } };
      }
    }
    return null;
  }
}

export function startMcpServer() {
  const server = new PolyglotMcpServer();
  server.startStdio();
}

if (process.argv[1] && process.argv[1].endsWith('server.js')) {
  startMcpServer();
}
