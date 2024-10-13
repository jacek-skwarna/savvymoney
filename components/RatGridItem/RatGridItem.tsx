type Props = {
    children?: React.ReactNode
};

export default function RatGridItem({ children }: Props): JSX.Element {
    return (
        <div className="flex justify-center items-center bg-slate-300 rounded-md">
            {children}
        </div>
    );
};
