interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary'
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn btn-${variant}`}
        >
            {children}
        </button>
    );
}; 