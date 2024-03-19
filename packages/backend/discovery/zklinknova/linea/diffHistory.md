Generated with discovered.json: 0xb523df30445188e6495c2672cb93928e61af7c5b

# Diff at Tue, 19 Mar 2024 10:41:29 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- current block number: 2996725

## Description

zkLink Nova is a zkSync Era fork that has multiple canonical bridges from multiple chains. Following, the changes between zkSync Era and zkLink Nova are listed.

### DiamondProxy changes

No changes.

### AdminFacet changes

A function to set this chain's canonical gateway and secondary chains gateways has been added.

### GettersFacet changes

Functions to get the gateway, secondary chains info, secondary chains sync status, secondary chain op, secondary chain tx hashes have been added.

### MailboxFacet changes

Added a method to get the priority queue element at a certain index.
Added a `syncL2Request` function only callable by the gateway that sync the priority tranasctions.
Added a `syncBatchRoot` function only callable by a validator.
Added a `syncL2TxHash` function only callable by a validator.

## Initial discovery

```diff
+   Status: CREATED
    contract GnosisSafeL2 (0x0Bff4B38792a95314b3463E1Bf9831BDa1995391)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x1E1f6F22f97b4a7522D8B62e983953639239774E)
    +++ description: None
```

```diff
+   Status: CREATED
    contract  (0x217C85a8B14466963905C22E817Dd1553fa62DFC)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L2MessageService (0x508Ca82Df566dCD1B0DE8296e70a96332cD644ec)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ValidatorTimelock (0x509ff56c152315EdeE91A2e0f059195519507e01)
    +++ description: None
```

```diff
+   Status: CREATED
    contract zkLink (0x5Cb18b6e4e6F3b46Ce646b0f4704D53724C5Df05)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1ERC20Bridge (0x62cE247f34dc316f93D3830e4Bf10959FCe630f8)
    +++ description: None
```

```diff
+   Status: CREATED
    contract LineaL2Gateway (0x7b5780d6df85A7dF96a3e1A019639a1dbDe937dB)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Verifier (0x803460416C2682Ac54FccF03eF77b10A12f2809b)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Verifier (0x902C3806A84f4e855a8746e92d7F1C9a51400458)
    +++ description: None
```

```diff
+   Status: CREATED
    contract TimeLock (0xc808BfCBeD34D90fa9579CAa664e67B9A03C56ca)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Governance (0xeF528a8Ca4B6aFDB6716Ef9f11bCa0c5C47454ec)
    +++ description: None
```