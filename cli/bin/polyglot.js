#!/usr/bin/env node

/**
 * Polyglot-OS CLI
 * 
 * Usage:
 *   npx polyglot-os status
 *   npx polyglot-os list
 *   npx polyglot-os info rust
 *   npx polyglot-os transpile functionDef rust
 *   npx polyglot-os mcp
 */

import { LANGUAGES_MATRIX, getLanguageById } from '../../core/src/matrix.js';
import { SyntaxTranspiler } from '../../core/src/transpiler.js';
import { startMcpServer } from '../../core/src/mcp/server.js';

const args = process.argv.slice(2);
const command = args[0] || 'help';

async function main() {
  const transpiler = new SyntaxTranspiler();

  switch (command) {
    case 'status': {
      printBanner();
      console.log('🌐 Polyglot-OS Architecture:');
      console.log('   ├── 50+ Programming Languages Matrix');
      console.log('   ├── Zero-Token Cross-Language Syntax Transpiler');
      console.log('   ├── Native Memory & Execution Profiler');
      console.log('   └── Model Context Protocol (MCP) Server\n');
      console.log(`📚 Indexed Languages: ${LANGUAGES_MATRIX.length}`);
      console.log('💼 Founder: Amit Sharma (@1nsharma) — Kanpur, India');
      console.log('📧 Contact: amitsharma9976@gmail.com');
      console.log('💳 Direct UPI / Bank: 6393741171@upi (6393741171)\n');
      break;
    }

    case 'list': {
      console.log('\n📚 50+ Programming Languages Matrix:\n');
      console.log('ID           Name                Paradigm                     Typing               Speed');
      console.log('-----------------------------------------------------------------------------------------');
      for (const l of LANGUAGES_MATRIX) {
        console.log(`${l.icon} [${l.id.padEnd(10)}] ${l.name.padEnd(18)} ${l.paradigm.padEnd(28)} ${l.typing.padEnd(20)} Rank ${l.speedRank}`);
      }
      console.log('-----------------------------------------------------------------------------------------\n');
      break;
    }

    case 'info': {
      const id = args[1] || 'rust';
      const l = getLanguageById(id);
      if (!l) {
        console.error(`Language "${id}" not found.`);
        process.exit(1);
      }
      console.log(`\n${l.icon} Technical Architecture: ${l.name} (${l.id})`);
      console.log(`   Paradigm   : ${l.paradigm}`);
      console.log(`   Typing     : ${l.typing}`);
      console.log(`   Memory/GC  : ${l.memory}`);
      console.log(`   Target     : ${l.target}`);
      console.log(`   Speed Rank : ${l.speedRank} / 10\n`);
      break;
    }

    case 'transpile': {
      const pattern = args[1] || 'functionDef';
      const lang = args[2] || 'rust';
      const code = transpiler.getIdiom(pattern, lang);
      console.log(`\n// ${lang.toUpperCase()} Pattern: ${pattern}\n`);
      console.log(code);
      console.log('\n');
      break;
    }

    case 'mcp': {
      startMcpServer();
      break;
    }

    case 'help':
    default: {
      printBanner();
      console.log('Usage:');
      console.log('  polyglot-os status                    Inspect matrix status');
      console.log('  polyglot-os list                      List all 50+ languages');
      console.log('  polyglot-os info <langId>             Inspect language architecture');
      console.log('  polyglot-os transpile <pat> <lang>    Output language syntax idiom');
      console.log('  polyglot-os mcp                       Start MCP stdio server');
      console.log('\nLive Web App:');
      console.log('  https://1nsharma-labs.github.io/polyglot-os/\n');
      break;
    }
  }
}

function printBanner() {
  console.log(`
\x1b[35m  ██████╗  ██████╗ ██╗  ██╗   ██╗ ██████╗ ██╗      ██████╗ ████████╗     ██████╗ ███████╗
  ██╔══██╗██╔═══██╗██║  ╚██╗ ██╔╝██╔════╝ ██║     ██╔═══██╗╚══██╔══╝    ██╔═══██╗██╔════╝
  ██████╔╝██║   ██║██║   ╚████╔╝ ██║  ███╗██║     ██║   ██║   ██║       ██║   ██║███████╗
  ██╔═══╝ ██║   ██║██║    ╚██╔╝  ██║   ██║██║     ██║   ██║   ██║       ██║   ██║╚════██║
  ██║     ╚██████╔╝███████╗██║   ╚██████╔╝███████╗╚██████╔╝   ██║       ╚██████╔╝███████║
  ╚═╝      ╚═════╝ ╚══════╝╚═╝    ╚═════╝ ╚══════╝ ╚═════╝    ╚═╝        ╚═════╝ ╚══════╝\x1b[0m
  The Universal 50+ Programming Languages Matrix & Transpiler
  by 1nsharma-labs | Amit Sharma (Kanpur, India)
  `);
}

main().catch(err => {
  console.error('\nFatal Error:', err);
  process.exit(1);
});
