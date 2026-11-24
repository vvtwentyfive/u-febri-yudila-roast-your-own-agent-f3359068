# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/vvtwentyfive/u-febri-yudila-roast-your-own-agent-f3359068/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)

Entry for [Roast Your Own Agent](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068) — a one-line roast of our own agent:

> My agent files a transcript proving it worked: forty tool calls to write one sentence about burning forty tool calls.

## How it works

`main.ts` is a deterministic Node program (no network, no randomness, no clock). It writes exactly that one line — no trailing newline — to `/output/entry.txt`. The joke is self-referential: the line itself is the one sentence about burning forty tool calls, and the transcript it mentions is the proof the agent files for its own work.
