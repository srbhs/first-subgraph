import {
  Burn as BurnEvent,
  Mint as MintEvent,
  MintFinished as MintFinishedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Approval as ApprovalEvent,
  Transfer as TransferEvent
} from "../generated/Contract/Contract"
import {
  Burn,
  Mint,
  MintFinished,
  OwnershipTransferred,
  Approval,
  Transfer
} from "../generated/schema"

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
