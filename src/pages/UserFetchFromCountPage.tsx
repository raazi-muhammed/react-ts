import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import UserCard from "../components/UserCard";
import axios from "axios";

type UserType = {
    name: string;
    email: string;
};
enum PageStateTypes {
    LOADING = "LOADING",
    ERROR = "ERROR",
    SUCCESS = "SUCCESS",
}
const URL = "https://jsonplaceholder.typicode.com/users";
const UserFetchFromCountPage = (): JSX.Element => {
    const [count, setCount] = useState<number>(0);
    const [user, setUser] = useState<UserType | null>(null);
    const [pageState, setPageState] = useState<PageStateTypes>(
        PageStateTypes.LOADING
    );

    useEffect(() => {
        setPageState(PageStateTypes.LOADING);
        axios
            .get(`${URL}/${count}`)
            .then((response) => {
                setUser(response.data as UserType);
                setPageState(PageStateTypes.SUCCESS);
            })
            .catch((err) => {
                setUser(null);
                setPageState(PageStateTypes.ERROR);
            });
    }, [count]);

    const handleChangeCountBy = (changeCountBy: number) => {
        setCount((c) => c + changeCountBy);
    };

    return (
        <main>
            <p className="font-bold text-2xl text-indigo-500">Count: {count}</p>

            {pageState === PageStateTypes.LOADING ? (
                <p>Loading</p>
            ) : pageState === PageStateTypes.ERROR ? (
                <p>An error occurred</p>
            ) : null}

            {user ? (
                <UserCard name={user.name} email={user.email} />
            ) : (
                <p>No user</p>
            )}

            <Button
                disabled={pageState === PageStateTypes.LOADING}
                onClick={() => handleChangeCountBy(1)}
            >
                Add
            </Button>
            <Button
                disabled={pageState === PageStateTypes.LOADING}
                onClick={() => handleChangeCountBy(-1)}
            >
                Minus
            </Button>
        </main>
    );
};

export default UserFetchFromCountPage;
