type TSectionTitleProps = {
    title: string;
};
const SectionTitle = ({ title }: TSectionTitleProps) => {
    return (
        <h1 style={{ textAlign: 'center' }}>
            {title}
        </h1>
    );
};

export default SectionTitle;