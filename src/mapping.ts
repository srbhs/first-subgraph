import {
  Burn as BurnEvent,
  Mint as MintEvent,
  MintFinished as MintFinishedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Approval as ApprovalEvent,
  Transfer as TransferEvent,
  TransferFromCall
} from "../generated/Contract/Contract"
import {
  Burn,
  Mint,
  MintFinished,
  OwnershipTransferred,
  Approval,
  Transfer,
  Block
} from "../generated/schema"
import { ethereum } from "@graphprotocol/graph-ts"

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.burner = event.params.burner
  entity.value = event.params.value
  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}

export function handleMintFinished(event: MintFinishedEvent): void {
  let entity = new MintFinished(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleTransferFrom(call: TransferFromCall): void {
  let entity = new Transfer(call.transaction.hash.toHex())
  entity.from = call.inputs._from
  entity.to = call.inputs._to
  entity.value = call.inputs._value
  entity.save()
}

export function handleBlock(block: ethereum.Block): void {
  let id = block.hash.toHex()
  let entity = new Block(id)
  entity.save()
}
