// CFA Level I · Alternative Investments · Learning module 7: Introduction to Digital Assets.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1digital = `
<p class="syl">CFA Level I · Alternative Investments (7–10%) · Learning module 7 of 7 · Introduction to Digital Assets</p>
<p>Digital assets are assets that exist and are transferred electronically on distributed ledgers. This lesson explains how blockchains work (including proof of work and proof of stake), permissioned vs permissionless networks, the main types of digital asset (cryptocurrencies, stablecoins, tokens, NFTs, CBDCs), smart contracts and DeFi, ways to invest, and the risks.</p>

<h3>1. Distributed ledgers and blockchains <span class="hot">Highly tested</span></h3>
<ul>
  <li>A <b>distributed ledger</b> is a database shared across many computers (nodes), with no single central record keeper.</li>
  <li>A <b>blockchain</b> is a distributed ledger in which transactions are grouped into <b>blocks</b>, each linked to the previous one by a <b>cryptographic hash</b>. Changing an old block would change every later block, so the record is effectively <b>immutable</b>.</li>
  <li>Nodes agree on which transactions are valid through a <b>consensus mechanism</b>:</li>
</ul>
<table>
  <tr><th></th><th>Proof of work (PoW)</th><th>Proof of stake (PoS)</th></tr>
  <tr><td>Who validates</td><td><b>Miners</b> compete to solve a computational puzzle</td><td><b>Validators</b> chosen based on the amount of tokens they <b>stake</b> (lock up)</td></tr>
  <tr><td>Security</td><td>Attacking requires most of the network's computing power</td><td>Attacking requires most of the staked tokens; dishonest validators lose stake ("slashing")</td></tr>
  <tr><td>Energy use</td><td>Very high</td><td>Much lower</td></tr>
  <tr><td>Example</td><td>Bitcoin</td><td>Ethereum (since 2022)</td></tr>
</table>
<ul>
  <li><b>Permissionless</b> (public) networks let anyone join, view and validate (Bitcoin, Ethereum). <b>Permissioned</b> networks restrict who can participate or validate, typically used by firms for internal or consortium applications (faster, more private, less decentralized).</li>
</ul>

<h3>2. Types of digital assets</h3>
<table>
  <tr><th>Type</th><th>Description</th></tr>
  <tr><td><b>Cryptocurrencies</b></td><td>Native coins of a blockchain used as a medium of exchange or store of value (bitcoin, ether); value depends on supply and demand, often with a capped or rule-based supply</td></tr>
  <tr><td><b>Stablecoins</b></td><td>Designed to hold a <b>stable value</b>, usually pegged to a fiat currency such as the US dollar, backed by reserves (cash, Treasuries) or managed by algorithms (riskier)</td></tr>
  <tr><td><b>Utility tokens</b></td><td>Give access to a product or service on a platform</td></tr>
  <tr><td><b>Security tokens</b></td><td>Represent ownership of an asset (shares, bonds, real estate): <b>tokenization</b> enables fractional ownership, faster settlement and 24/7 trading</td></tr>
  <tr><td><b>Non-fungible tokens (NFTs)</b></td><td>Unique, non-interchangeable tokens representing a specific item (art, collectibles)</td></tr>
  <tr><td><b>Central bank digital currencies (CBDCs)</b></td><td>Digital money issued by a central bank, a liability of the central bank (not decentralized crypto)</td></tr>
</table>

<h3>3. Smart contracts and DeFi</h3>
<ul>
  <li><b>Smart contracts</b>: programs stored on a blockchain that <b>execute automatically</b> when set conditions are met (e.g. release payment when delivery is confirmed).</li>
  <li><b>Decentralized finance (DeFi)</b>: financial services (lending, borrowing, trading, derivatives) run by smart contracts without traditional intermediaries, through decentralized applications (dApps) and decentralized exchanges.</li>
</ul>

<h3>4. Ways to invest</h3>
<ul>
  <li><b>Direct ownership</b>: buy on an exchange and hold in a <b>wallet</b>; whoever controls the <b>private key</b> controls the asset. Hot wallets (online, convenient, more hackable) vs cold wallets (offline, more secure).</li>
  <li><b>Centralized exchanges</b> (a company holds customers' assets: counterparty risk) vs <b>decentralized exchanges</b> (trades via smart contracts).</li>
  <li><b>Funds</b>: spot and futures-based exchange-traded products, trusts, private funds.</li>
  <li><b>Shares</b> of companies linked to digital assets (exchanges, miners), which also carry equity risk.</li>
</ul>

<h3>5. Risk and return</h3>
<ul>
  <li><b>Very high volatility</b> and large drawdowns; most cryptocurrencies produce no cash flows, so valuation relies on adoption, network effects and supply limits.</li>
  <li><b>Regulatory</b> uncertainty, <b>custody and cyber risk</b> (lost keys can't be recovered, exchange failures and hacks), fraud and market manipulation, and limited investor protections.</li>
  <li>Diversification benefits are uncertain: correlations with equities have risen at times of stress.</li>
  <li>ESG concerns, especially the energy use of proof-of-work networks.</li>
</ul>

<div class="how"><b>How it's tested:</b> how blockchains achieve immutability and consensus, proof of work vs proof of stake, permissioned vs permissionless networks, identifying stablecoins, utility and security tokens, NFTs and CBDCs, smart contracts and DeFi, wallets and private keys, and the main risks.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe distributed ledgers, blockchains and consensus mechanisms.</li>
  <li>Compare permissioned and permissionless networks.</li>
  <li>Describe the types of digital assets, smart contracts and DeFi.</li>
  <li>Describe ways to invest in digital assets and their risks.</li>
</ul></div>
`;

window.QB_HARD.l1digital = [
  ["In a proof-of-stake blockchain, the participants who validate transactions are chosen based on:",
    ["The amount of tokens they stake", "The computing power they contribute", "Approval from a central authority"],
    "Proof of stake selects validators by their staked holdings; proof of work relies on computing power (mining).", "r"],
  ["A permissioned blockchain differs from a permissionless one in that it:",
    ["Restricts who can join or validate transactions", "Lets anyone join and validate transactions", "Has no way to reach consensus among nodes"],
    "Permissionless networks (e.g. Bitcoin) are open to all; permissioned networks restrict participation to approved parties.", "r"],
  ["A stablecoin is designed to:",
    ["Hold a stable value, often pegged to a currency", "Track a basket of technology stocks", "Pay a guaranteed rate of interest to its holders"],
    "Stablecoins aim to maintain a stable value by pegging to a currency, commodity or other asset, often backed by reserves.", "r"],
  ["Smart contracts are best described as:",
    ["Blockchain programs that run when conditions are met", "Legal agreements that both parties sign electronically", "Contracts guaranteed by a central bank"],
    "Smart contracts are computer code stored on a blockchain that automatically executes terms once predefined conditions are satisfied.", "r"],
  ["Linking each block to the previous one with a cryptographic hash makes a blockchain record:",
    ["Effectively immutable", "Fully anonymous to all", "Centrally controlled"],
    "Altering an old block would change every later hash, which the network would reject.", "r"],
  ["In a proof-of-work blockchain, new blocks are validated by:",
    ["Miners solving computational puzzles", "Validators chosen by tokens staked", "A central bank approving transactions"],
    "Proof of work relies on computing power; proof of stake relies on staked tokens.", "r"],
  ["Compared with proof of work, a key advantage of proof of stake is:",
    ["Much lower energy use", "Greater decentralization of mining", "No need for consensus at all"],
    "Proof of stake doesn't require energy-intensive mining.", "r"],
  ["A token representing a fractional ownership interest in an office building is best described as a:",
    ["Security token", "Utility token", "Stablecoin"],
    "Security tokens represent ownership of underlying assets (tokenization).", "r"],
  ["A unique digital token that represents ownership of a specific piece of digital art is a:",
    ["Non-fungible token", "Algorithmic stablecoin", "Utility token"],
    "NFTs are unique and not interchangeable, unlike cryptocurrencies and stablecoins.", "r"],
  ["Digital money issued by a country's central bank as its own liability is a:",
    ["Central bank digital currency", "Permissionless cryptocurrency", "Algorithmic stablecoin"],
    "CBDCs are central bank money in digital form, not decentralized assets.", "r"],
  ["Lending and trading services run by smart contracts without banks or brokers are known as:",
    ["Decentralized finance", "Central bank digital finance", "Permissioned banking"],
    "DeFi uses smart contracts and dApps instead of traditional intermediaries.", "r"],
  ["An investor who holds bitcoin directly loses the private key to her cold wallet. The most likely outcome is that she:",
    ["Can't access her bitcoin", "Can reset the key with the exchange", "Is compensated by the network"],
    "Control of a digital asset depends on the private key; lost keys generally can't be recovered.", "s"],
];

window.GLOSSARY.push(
  ["Proof of work vs proof of stake","PoW: miners compete with computing power. PoS: validators chosen by tokens staked.","l1digital"],
  ["Blockchain", "Distributed ledger of hash-linked blocks of transactions, validated by consensus.", "l1digital"],
  ["Permissioned vs permissionless", "Restricted participants and validators vs open to anyone.", "l1digital"],
  ["Stablecoin", "Digital asset designed to hold a stable value, usually pegged to a fiat currency.", "l1digital"],
  ["Smart contract", "Blockchain program that executes automatically when conditions are met.", "l1digital"]
);
