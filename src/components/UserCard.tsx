import React from "react";

type Props = {
    name: string;
    email: string;
};

const UserCard = ({ name, email }: Props): JSX.Element => {
    return (
        <section className="bg-indigo-500 rounded-lg p-6 text-white">
            <p>{name}</p>
            <p>{email}</p>
        </section>
    );
};

export default UserCard;
