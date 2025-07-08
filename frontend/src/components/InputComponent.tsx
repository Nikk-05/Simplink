const InputComponent = () =>{
    return (
        <div>
            <div className = 'mb-4 w-100'>
                <input type = "text" placeholder="Paste Your URL" 
                className='w-full h-12 px-5 py-3 border border-gray-300  shadow-md shadow-gray-300 rounded-full focus:outline-none text-sm' />
            </div>
        </div>
    )
}

export default InputComponent;