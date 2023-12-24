import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { Button } from "../components/Button";

enum ErrorMessageType {
    LENGTH = "Min 6 Characters",
    NUMBER = "Should not be a number",
}

const FormPage = () => {
    const [name, setName] = useState<string>("");
    const nameRef = useRef<HTMLInputElement>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        console.log(name);
        setName("");
    };

    useEffect(() => {
        if (nameRef.current) {
            nameRef.current.focus();
        }
    }, []);
    useEffect(() => {
        if (!isNaN(Number(name))) {
            setErrorMessage(ErrorMessageType.NUMBER);
        } else if (name.length < 6) {
            setErrorMessage(ErrorMessageType.LENGTH);
        } else {
            setErrorMessage(null);
        }
    }, [name]);

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input
                    ref={nameRef}
                    className="bg-gray-800 text-white rounded-lg p-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                />
                {errorMessage ? (
                    <p className="text-red-600">{errorMessage}</p>
                ) : (
                    <p className="text-green-600">Valid</p>
                )}
                <Button disabled={errorMessage !== null} type="submit">
                    Submit
                </Button>
            </form>
        </main>
    );
};

export default FormPage;
