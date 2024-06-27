export type TextInputPropsType = {
    id: string,
    classes?: string
    type?: 'password' | 'text',
    placeholder: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

