## Squads Based CLI

```
   _____   ____    __  __    ___     ____    _____
  / ___/  / __ \  / / / /   /   |   / __ \  / ___/
  \__ \  / / / / / / / /   / /| |  / / / /  \__ \ 
 ___/ / / /_/ / / /_/ /   / ___ | / /_/ /  ___/ / 
/____/  \___\_\ \____/   /_/  |_|/_____/  /____/  
                                                  
```

Interact with the Squads Multisig Program through a simple CLI.\
The CLI program runs against the Solana program at [BASEDWVF6xeXTJSrk99cbMCwGFtaUvFLihpg6ki9UWX3](https://explorer.solana.com/address/BASEDWVF6xeXTJSrk99cbMCwGFtaUvFLihpg6ki9UWX3)
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
