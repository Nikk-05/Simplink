import type { ReactNode } from 'react';
interface ButtonComponentProps {
    label: string,
    svg: ReactNode
}
const ButtonComponent = ({ label, svg }: ButtonComponentProps) => {
    return (
        <div className='flex max-w-fit px-4 py-2 rounded-full bg-black text-white'>
            <button className=' inline-flex cursor-pointer font-medium text-sm'> {label}<span className='ml-3'>{svg}</span></button>
        </div>
    )
}
export default ButtonComponent;