


function ContactForm() {

    return (
        <form action="https://formspree.io/f/xqalbzdk" method="POST" className="bg-white/7 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-6 space-y-6 max-w-md mx-auto">
            <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-primary">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 w-full rounded border border-gray-300 p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-primary">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 w-full rounded border border-gray-300 p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-primary">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 w-full rounded border border-gray-300 p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full rounded bg-blue-600 text-white p-2 sm:p-3 font-semibold hover:bg-blue-700 transition"
            >
                Send
            </button>
        </form>
    );
}

export default ContactForm;
