/**
 * Automated Test Suite for Polyglot-OS
 */

import assert from 'node:assert';
import { describe, it } from 'node:test';
import { LANGUAGES_MATRIX, getLanguageById, searchLanguages } from '../core/src/matrix.js';
import { SyntaxTranspiler } from '../core/src/transpiler.js';
import { PolyglotMcpServer } from '../core/src/mcp/server.js';

describe('Polyglot-OS Matrix', () => {
  it('should have indexed > 40 languages', () => {
    assert.ok(LANGUAGES_MATRIX.length >= 40);
  });

  it('should retrieve Rust by id', () => {
    const l = getLanguageById('rust');
    assert.ok(l);
    assert.strictEqual(l.name, 'Rust');
    assert.strictEqual(l.speedRank, 1);
  });

  it('should search languages by paradigm', () => {
    const funcs = searchLanguages('functional');
    assert.ok(funcs.length >= 3);
  });
});

describe('Polyglot-OS Transpiler', () => {
  const transpiler = new SyntaxTranspiler();

  it('should provide Python and Rust idioms', () => {
    const py = transpiler.getIdiom('functionDef', 'python');
    const rs = transpiler.getIdiom('functionDef', 'rust');
    assert.ok(py.includes('def calculate_sum'));
    assert.ok(rs.includes('fn calculate_sum'));
  });

  it('should provide Devanagari pseudo-code pattern', () => {
    const indic = transpiler.getIdiom('functionDef', 'indicDevanagari');
    assert.ok(indic.includes('जोड़_संख्या'));
  });
});

describe('Polyglot-OS MCP Server', () => {
  const server = new PolyglotMcpServer();

  it('should register all 4 tools', () => {
    assert.strictEqual(server.getTools().length, 4);
  });

  it('should execute polyglot_status tool', async () => {
    const res = await server.handleCallTool('polyglot_status', {});
    const parsed = JSON.parse(res.content[0].text);
    assert.strictEqual(parsed.product, 'Polyglot-OS');
    assert.strictEqual(parsed.upi, '6393741171@upi');
  });
});
