type TFormSectionProps = {
    children: React.ReactNode;
    title: string;
    className?: string;
};

const FormSection = ({ children, title, className }: TFormSectionProps) => {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <div className={className}>
                {children}
            </div>
        </div>
    );
};

export default FormSection;
