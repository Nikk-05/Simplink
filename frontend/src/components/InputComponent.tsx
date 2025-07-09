type InputComponentProps = {
    setInputURL: (url: string) => void

}
const InputComponent = ({ setInputURL }: InputComponentProps) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputURL(event.target.value);
    };

    return (
        <div className="flex justify-center w-full">
            <div className="mb-4 w-full max-w-lg">
                <input
                    type="text"
                    placeholder="Paste Your URL"
                    className="w-full h-12 px-5 py-3 border border-gray-300 shadow-md shadow-gray-300 rounded-full focus:outline-none text-sm"
                    onChange={handleInputChange}
                />
            </div>
        </div>
    )
}

export default InputComponent;