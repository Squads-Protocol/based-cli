## Squads Based CLI

```
   _____   ____    __  __    ___     ____    _____
  / ___/  / __ \  / / / /   /   |   / __ \  / ___/
  \__ \  / / / / / / / /   / /| |  / / / /  \__ \ 
 ___/ / / /_/ / / /_/ /   / ___ | / /_/ /  ___/ / 
/____/  \___\_\ \____/   /_/  |_|/_____/  /____/  
                                                  
```

Interact with the Squads Multisig Program through a simple CLI.\
The CLI program runs against the Solana program at [BASEDWVF6xeXTJSrk99cbMCwGFtaUvFLihpg6ki9UWX3](https://explorer.solana.com/address/BASEDWVF6xeXTJSrk99cbMCwGFtaUvFLihpg6ki9UWX3), which is set as non-upgradeable.
### Requirements
Nodejs version >= 16
### Installing the CLI tool
`npm install -g @sqds/based`

### Running the tool
Running the simple command will start the tool and ask a few setup questions for the wallet and the network cluster.\
`squads-based`

### Cluster Option
Providing the cluster will bypass the question upon startup\
`squads-based --cluster https://api.mainnet-beta.solana.com`

### Transactions
There are 2 ways to create multisig transactions
1. Using a base58 encoded serialization of the Transaction message
2. Creating a raw draft, and adding each instruction individually

It is important to note, that the signer of any multisig transaction for proper execution must be the relevant authority. For most cases, this will be the vault address that is show from
the vault menu, and will usually default to the authority index of 1 when creating a transaction draft (unless otherwise specified).

If attaching an instruction to a draft, you'll need to add the data as a base58 encoded version of the data buffer.\
Make sure that all instructions for any given transaction thats created for the multisig has the proper signer as the relevant authority. If there is an additional signer, it MUST be a member of the multisig and strictly the member that executes it, or else it will fail.

### Important Notes
If creating a multisig, it will automatically fund the default vault/authority with .001 SOL. This helps with certain clients that require destinations to have lamports in a system account.

DO NOT use the multisig address to receive funds or act as an authority. Any treasury, vault, or authority based transactions should be associated with a proper authority address. In the context of this CLI tool, it will be shown as the default vault address in the vault or settings menu.

### Contributing
Join the Squads discord at [discord.gg/tYpY9UfRFx](https://discord.gg/tYpY9UfRFx) or reach out to the team on Twitter at [@SquadsProtocol](https://twitter.com/SquadsProtocol) and ask how to be a contributor!