import { AbiItem, BigNumber } from 'eth-connect'

export const poiDeployments = {
  '123' /* local  */: '0xb6f59543c7aa0976f2e640f0cDDfd5adEf5525b3',
  '5' /* goerli  */: '0xb8c7a7afd42675ab61f0a3732f8d0491825a933b',
  '1' /* mainnet */: '0x0ef15a1c7a49429a36cb46d4da8c53119242b54e'
} as const

export const denylistNamesDeployments = {
  '123' /* local  */: '0x1eCb92cAd7BeA466C4aF6032A14fbae3cBaa9009',
  '5' /* goerli  */: '0x71c84760df0537f7db286274817462dc2e6c1366',
  '1' /* mainnet */: '0x0c4c90a4f29872a2e9ef4c4be3d419792bca9a36'
} as const

export type ListContract = {
  size(): Promise<BigNumber>
  get(input: BigNumber | number | string): Promise<string>
}

export const listAbiItems: AbiItem[] = [
  {
    constant: true,
    inputs: [],
    name: 'ADD_ROLE',
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
    name: 'name',
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
    inputs: [],
    name: 'REMOVE_ROLE',
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
        name: '',
        type: 'uint256'
      }
    ],
    name: 'values',
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
    constant: false,
    inputs: [
      {
        name: '_value',
        type: 'string'
      }
    ],
    name: 'remove',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
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
    constant: true,
    inputs: [],
    name: 'getTypeHash',
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
    name: 'listType',
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
    inputs: [],
    name: 'size',
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
        name: '_index',
        type: 'uint256'
      }
    ],
    name: 'get',
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
    inputs: [],
    name: 'symbol',
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
        name: '_name',
        type: 'string'
      },
      {
        name: '_symbol',
        type: 'string'
      },
      {
        name: '_type',
        type: 'string'
      }
    ],
    name: 'initialize',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_value',
        type: 'string'
      }
    ],
    name: 'add',
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
        name: '_caller',
        type: 'address'
      },
      {
        indexed: false,
        name: '_value',
        type: 'string'
      }
    ],
    name: 'Add',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_caller',
        type: 'address'
      },
      {
        indexed: false,
        name: '_value',
        type: 'string'
      }
    ],
    name: 'Remove',
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
