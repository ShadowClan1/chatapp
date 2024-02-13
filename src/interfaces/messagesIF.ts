export interface MessageIF {
    from :string
    to :string
    message : string
    date : Date
}

export interface MessagesIF  {
[key :string] : MessageIF[]
}