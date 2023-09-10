export interface IAddTransactionReq {
    items: Array<{
        quantity: number
        name: string
        total: number
    }>
    total: number
}
