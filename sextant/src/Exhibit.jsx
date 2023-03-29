export default function Exhibit(props) {
    const { heading, children } = props
    return (
        <>
            <h1>{heading}</h1>
            {children}
        </>
    )
}