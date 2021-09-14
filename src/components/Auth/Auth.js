const Auth = ({onAuthenticate}) => {
    return (
        <div className="max-w-prose mx-auto mt-24 mb-32 text-center">
            <button className="bg-white hover:bg-gray-200 active:bg-gray-300 text-black px-8 py-2 rounded"
                type="button" onClick={onAuthenticate}>
                Acceder con mi cuenta de Google
            </button>
        </div>
    )
}

export default Auth