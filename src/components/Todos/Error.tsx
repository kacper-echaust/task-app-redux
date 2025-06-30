type ErrorProps = {
    text:string
}

const Error = ({text}: ErrorProps) => {
    return <p className="text-red-600 text-xs absolute top-12">{text}</p>
}

export {Error}