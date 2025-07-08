function ContactForm() {
    return (
        <form className="bg-white/7 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="mt-1 w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="mt-1 w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                    Message
                </label>
                <textarea
                    id="message"
                    rows="4"
                    className="mt-1 w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full rounded bg-blue-600 text-white p-2 font-semibold hover:bg-blue-700 transition"
            >
                Send
            </button>
        </form>
    );
}

export default ContactForm;