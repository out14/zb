export interface Equip{
    Grade: string
    Icon: string
    Name: string
    Tooltip: string
    Type: string
    Level?:number
    Rune?:{
        Grade: string
        Icon:string
        Name:string
        Tooltip:string
    }
    Tripods?:{
        Icon: string
        IsSelected: boolean
        Level: number
        Name: string
        Slot: number
        Tier: number
        Tooltip: string
    }[]
}
export interface Ark{
    IsArkPassive: boolean,
    Points:{
            Name: string,
            Value: number,
            Tooltip: string
    }[],
    Effects:{
        Name: string,
        // Description:string | TrustedHTML,
        Description:string ,
        Icon: string,
        ToolTip: string
    }[]
}