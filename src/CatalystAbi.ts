import { AbiItem, BigNumber } from 'eth-connect'

export const catalystDeployments = {
  '123' /* zqb  mainnet  */: '0xDED97a91CE866a5E52C3905e6D5b3208B1CA30e5',
  '5' /* goerli  */: '0x380e46851c47b73b6aa9bea50cf3b50e2cf637cf',
  '1' /* mainnet */: '0x4a2f10076101650f40342885b99b6b101d83c486'
} as const

export type CatalystByIdResult = {
  id: Uint8Array
  owner: string
  domain: string
}

export type CatalystContract = {
  catalystCount(): Promise<BigNumber>
  catalystIds(input: BigNumber | string | number): Promise<Uint8Array>
  catalystById(id: Uint8Array): Promise<CatalystByIdResult>
}

export const catalystAbiItems: AbiItem[] = [
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    name: 'owners',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'hasInitialized',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'catalystCount',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_script',
        type: 'bytes'
      }
    ],
    name: 'getEVMScriptExecutor',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getRecoveryVault',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'bytes32'
      }
    ],
    name: 'catalystIndexById',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_id',
        type: 'bytes32'
      }
    ],
    name: 'catalystOwner',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_id',
        type: 'bytes32'
      }
    ],
    name: 'catalystDomain',
    outputs: [
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    name: 'catalystIds',
    outputs: [
      {
        name: '',
        type: 'bytes32'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'token',
        type: 'address'
      }
    ],
    name: 'allowRecoverability',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'appId',
    outputs: [
      {
        name: '',
        type: 'bytes32'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'initialize',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getInitializationBlock',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_token',
        type: 'address'
      }
    ],
    name: 'transferToVault',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_sender',
        type: 'address'
      },
      {
        name: '_role',
        type: 'bytes32'
      },
      {
        name: '_params',
        type: 'uint256[]'
      }
    ],
    name: 'canPerform',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getEVMScriptRegistry',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_id',
        type: 'bytes32'
      }
    ],
    name: 'removeCatalyst',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'bytes32'
      }
    ],
    name: 'domains',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'bytes32'
      }
    ],
    name: 'catalystById',
    outputs: [
      {
        name: 'id',
        type: 'bytes32'
      },
      {
        name: 'owner',
        type: 'address'
      },
      {
        name: 'domain',
        type: 'string'
      },
      {
        name: 'startTime',
        type: 'uint256'
      },
      {
        name: 'endTime',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_owner',
        type: 'address'
      },
      {
        name: '_domain',
        type: 'string'
      }
    ],
    name: 'addCatalyst',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'kernel',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'MODIFY_ROLE',
    outputs: [
      {
        name: '',
        type: 'bytes32'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'isPetrified',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_id',
        type: 'bytes32'
      },
      {
        indexed: true,
        name: '_owner',
        type: 'address'
      },
      {
        indexed: false,
        name: '_domain',
        type: 'string'
      }
    ],
    name: 'AddCatalyst',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_id',
        type: 'bytes32'
      },
      {
        indexed: true,
        name: '_owner',
        type: 'address'
      },
      {
        indexed: false,
        name: '_domain',
        type: 'string'
      }
    ],
    name: 'RemoveCatalyst',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'executor',
        type: 'address'
      },
      {
        indexed: false,
        name: 'script',
        type: 'bytes'
      },
      {
        indexed: false,
        name: 'input',
        type: 'bytes'
      },
      {
        indexed: false,
        name: 'returnData',
        type: 'bytes'
      }
    ],
    name: 'ScriptResult',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'vault',
        type: 'address'
      },
      {
        indexed: true,
        name: 'token',
        type: 'address'
      },
      {
        indexed: false,
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'RecoverToVault',
    type: 'event'
  }
]
