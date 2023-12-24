import { ButtonHTMLAttributes } from "react";

export const Button = ({
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
    return (
        <button
            className="bg-indigo-500 p-2 rounded-lg text-white m-2 disabled:opacity-60"
            {...props}
        >
            {children}
        </button>
    );
};
