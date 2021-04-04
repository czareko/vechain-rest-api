export interface Vechain {
    balance: (address: string) => Promise<any>,
    sendTokens: (resource: any) => Promise<any>,
}
