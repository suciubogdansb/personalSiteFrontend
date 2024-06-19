export default function FilterInput(
    {
        setFilter,
    }: {
        setFilter: React.Dispatch<React.SetStateAction<string>>,
    }
) {
    return (
        <input className="FilterInput"
            placeholder="Filter posts"
            onChange={(e) => setFilter(e.target.value)}
        />
    );
}