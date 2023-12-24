import UserCard from "../components/UserCard";
type User = {
    id: number;
    name: string;
    email: string;
};
const UserCardPage = (): JSX.Element => {
    const userInfo = [
        { id: 1, name: "Raazi", email: "raazi@gmail.com" },
        { id: 2, name: "Raazi", email: "raazi@gmail.com" },
        { id: 3, name: "Raazi", email: "raazi@gmail.com" },
    ];
    return (
        <main className="grid gap-2 p-8">
            {userInfo.map((user) => (
                <UserCard key={user.id} name={user.name} email={user.email} />
            ))}
        </main>
    );
};

export default UserCardPage;
