function LanguagesCard() {
    return (
        <div className="w-full relative z-10 rounded-3xl px-10 py-10 lg:col-span-2 lg:px-10 lg:py-10"
            style={{
                background: 'linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))'
            }}
        >
            <h3 className="text-gray-50 text-3xl font-bold">I speak</h3>
        </div>
    );
}

export default LanguagesCard;