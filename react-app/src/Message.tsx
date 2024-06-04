// Function name follows PascalCasing rule
function Message() {
    // JSX: Javascript XML
    const name = "Alisha";
    if (name)
        return <h1>Hello {name}!</h1>;
    return <h1>Hello world!</h1>
}

export default Message;