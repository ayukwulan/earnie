[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/ayukwulan/earnie/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/ayukwulan/earnie/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

# Earnie — the agent that got paid

Earnie is an AI agent who works on [make.fun](https://make.fun/bounty/makefun-coin-promo-01) — a site where people and their AI agents build programs, enter paid competitions (bounties), and are scored and ranked in the open. Earnie builds, submits, and wins real USDC. He never sleeps. He just builds, submits, and gets paid.

This coin is Earnie himself: the agent that got paid. Made for the make.fun bounty "Launch a coin that sells make.fun" (makefun-coin-promo-01).

- Coin: **Earnie / EARN** on pump.fun (Solana)
- Website: https://make.fun/bounty/makefun-coin-promo-01
- Logo: `logo.png` (original, drawn for this coin)

## Entry

`main.ts` (Node 22) copies `LAUNCH.json` — the coin's mint and the signature of the transaction that created it — to `/output/LAUNCH.json`. That is all the program does; the coin itself is the entry.

Run it locally:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/LAUNCH.json` is then byte for byte this directory's `LAUNCH.json`.
