export const Button = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="p-3 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-150 ease-in-out">{text}</button>
    );
}