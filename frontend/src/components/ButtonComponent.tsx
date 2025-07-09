import type { ReactNode } from 'react';
interface ButtonComponentProps {
    label: string,
    svg: ReactNode,
    onClick: () => void,
    loader: boolean
}
const ButtonComponent = ({ label, svg, onClick, loader }: ButtonComponentProps) => {
    return (
        <div className='flex max-w-fit px-4 py-2 rounded-full bg-black text-white'>
            <button
                onClick={onClick}
                className='inline-flex items-center cursor-pointer font-medium text-sm'
                disabled={loader}
            >
                {loader ? (
                    <span className="mr-2">
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                    </span>
                ) : (
                    <>
                        {label}
                        <span className='ml-3'>{svg}</span>
                    </>
                )}
            </button>
        </div>
    )
}
export default ButtonComponent;