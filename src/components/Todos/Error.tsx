type ErrorProps = {
    text:string
}

const Error = ({text}: ErrorProps) => {
    return <p className="text-red-600 text-xs">{text}</p>
}

export {Error}