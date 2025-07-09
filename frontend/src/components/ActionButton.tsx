import type { ReactNode } from "react";

interface ActionButtonProps {
    label: string,
    svg: ReactNode,
    onClick?: () => void
}

const ActionButton = ({label, svg, onClick}:ActionButtonProps) => {
    return (
        <div>
            <div className = 'flex max-w-fit px-4 py-2 rounded-full bg-white text-gray-700 border border-black text-center text-sm font-medium mx-2'>
                <button 
                onClick={onClick}
                className = 'inline-flex w-full cursor-pointer'>{label} <span className= 'ml-5'>{svg}</span></button>
            </div>
        </div>
    )
}
export default ActionButton;