type OutputComponentProps = {
    shortUrl: string;
}

const OutputComponent = ({ shortUrl }: OutputComponentProps) => {
    return (
        <div className={shortUrl.length === 0 ? 'hidden' : `mb-4 w-full flex flex-col items-center`}>
            <label className="mb-2 text-gray-700 font-semibold text-sm">Your Shortened URL</label>
            <input
                value={shortUrl}
                disabled
                className="w-full max-w-xl h-14 px-5 py-3 border border-gray-300 shadow rounded-full focus:outline-none text-md font-medium bg-gray-100"
            />
        </div>
    )
}

export default OutputComponent;